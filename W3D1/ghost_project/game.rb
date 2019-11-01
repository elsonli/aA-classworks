require "set"
require_relative "./player.rb"
require_relative "./aiplayer.rb"

class Game
    attr_reader :fragment # For AiPlayer class
    attr_accessor :current_player, :previous_player
    DICTIONARY = File.read("dictionary.txt").split.to_set

    def initialize(*players)
        @player_stack = players
        @fragment = [] # Pass as reference for AiPlayer class
        @losses = Hash.new(0)
    end

    # For AiPlayer class
    def add_player(player)
        @player_stack << player
    end

    def next_player!
        # Move the first player to the end of the Player stack
        first_player = @player_stack.shift
        @player_stack.push(first_player)
    end

    def take_turn(player)
        player_move = ""

        # Get a string from the player until a valid move is made
        until valid_play?(player_move)
            player_move = player.guess

            # Only alert invalid guess if it's a Player and not AiPlayer
            if player.is_a?(Player)
                player.alert_invalid_guess unless valid_play?(player_move)
            end
        end

        # Update the fragment and check against the dictionary
        @fragment << player_move

        # A word has been spelled and the move is (un)successful
        # Include a separator for printing purposes
        fragment_word = @fragment.join("")
        if DICTIONARY.include?(fragment_word)
            puts "-------------------------------"
            puts "The word '#{fragment_word}' has been spelled!"
            puts "-------------------------------"
            return false
        end

        # True if the current player successfully makes a move without losing
        true
    end

    def valid_play?(string)
        alphabet = ("a".."z").to_a

        # Immediately return false if a single letter is not given
        return false unless alphabet.include?(string.downcase)

        # Add the letter to the fragment to test it
        fragment_word = @fragment.join("")
        test_fragment = fragment_word + string.downcase

        # Ensure a word is still possible
        DICTIONARY.each { |word| return true if word.start_with?(test_fragment) }

        # Return false as there are no words that can be made
        false
    end

    def record(player)
        losses = @losses[player]
        "GHOST"[0...losses]
    end

    def display_standings
        sorted_stack = @player_stack.sort_by { |player| player.name }
        sorted_stack.each { |player| puts "#{player.name}: #{record(player)}" }
    end

    def play_round
        # Reset the fragment for each round
        @fragment = []

        # Keep taking turns and alternating players until a word is spelled
        while self.take_turn(@player_stack.first)
            self.next_player!
            puts "-------------------------------"
            puts "It is now #{@player_stack.first.name}'s turn."
            puts "Current word fragment: #{@fragment.join("")}"
        end

        # The loop only exits when the current player spells a word
        # The player will have been moved to the back of the Player stack
        # In this case, we want to add a loss for that player in the hash
        # The same Player exited the loop, so we need to update the turn order
        @losses[@player_stack.first] += 1
        self.next_player!
    end

    def run
        puts "-------------------------------"
        puts "----------Game start!----------"
        puts "-------------------------------"

        # Keep playing rounds until all but one player accumulates "GHOST"
        while @player_stack.length > 1
            puts "It is now #{@player_stack.first.name}'s turn."
            self.play_round

            # Takes care of the edge case where game ends after printing "GHOS"
            puts "The current scoreboard is:"
            self.display_standings
            puts "-------------------------------"

            # Only one Player can possibly lose at once
            loser_hash = @losses.select { |player, losses| losses >= 5 }
            if loser_hash.length > 0
                singleLoser = loser_hash.to_a.flatten.first
                puts "#{singleLoser.name} has reached 5 losses. Eliminated!"
                @player_stack.delete(singleLoser)
                @losses.delete(singleLoser)
            end
        end

        puts "-------------------------------"
        puts "#{@player_stack.first.name} is the winner!"
    end
end

# game = Game.new(Player.new("Sakurajima"), Player.new("Kirisaki"))
# game.add_player(AiPlayer.new("Kizuna Ai", game.fragment, 3))
# game.run