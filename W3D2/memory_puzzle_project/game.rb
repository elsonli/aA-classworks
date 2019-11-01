require_relative "./board.rb"
require_relative "./human_player.rb"

class Game
    def initialize(size)
        @board = Board.new(size)
        @board.populate
        @players = []
    end

    def switch_players!
        @players.rotate!
    end

    def get_winners
        winner = @players.max_by { |player| player.count }
        @players.select { |player| player.count == winner.count }
    end

    def play
        puts "Enter Player 1's name"
        player_1 = HumanPlayer.new(gets.chomp)
        @players << player_1

        puts "Enter Player 2's name"
        player_2 = HumanPlayer.new(gets.chomp)
        @players << player_2

        until @board.won?
            system("clear")
            @board.render

            input_1, input_2 = @players.first.prompt

            @board[input_1].reveal
            @board[input_2].reveal
            unless @board[input_1].face_value == @board[input_2].face_value
                @board.render
                sleep(2)
                @board[input_1].hide
                @board[input_2].hide
                self.switch_players!
            else
                @players.first.increase_count
            end
        end

        winners = self.get_winners
        if winners.length == 1
            puts "#{winners.first.name} wins!"
        else
            puts "#{winners.map(&:name).join(", ")} win!"
        end
    end
end