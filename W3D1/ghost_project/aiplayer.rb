require "set"
class AiPlayer
    attr_reader :name, :fragment, :numPlayers

    def initialize(name, fragment, numPlayers)
        @name = name
        @fragment = fragment
        @numPlayers = numPlayers
    end

    def guess_winning_move
        # Add a letter to the fragment to NOT spell a word
        fragment_word = @fragment.join("")
        possible_words = Game::DICTIONARY.select { |word| word.start_with?(fragment_word) }
        losing_words = possible_words.select { |word| word.length == (fragment_word.length + 1) }
        losing_letters = losing_words.map { |word| word[-1] }.to_set
        winning_words = possible_words.select do |word|
            # Condition 1: Not the same as the current fragment
            # Condition 2: Length of word after adding a character to fragment
            #              is less than the number of players (modulo)
            # Condition 3: The last letter cannot be a losing letter 
            !word.eql?(@fragment.join("")) and
            ((word.length - @fragment.join("").length - 1) % @numPlayers) < @numPlayers and
            !losing_letters.include?(word[-1])
        end
        winning_words
    end

    def guess_losing_move
        # Add a letter to the fragment to spell a word in order to lose
        possible_words = Game::DICTIONARY.select { |word| word.start_with?(@fragment.join("")) }
        losing_words = possible_words.select { |word| word.length == (@fragment.join("").length + 1) }
        losing_words
    end

    def guess
        # If there are no winning words and no losing words
        # Choose a random word that starts with the fragment
        winning_words = self.guess_winning_move
        if winning_words.empty?
            losing_words = self.guess_losing_move
            if losing_words.empty?
                losing_words = Game::DICTIONARY.select { |word| word.start_with?(@fragment.join("")) }
            end
            losing_word = losing_words.sample
            fragment_word = @fragment.join("")
            return losing_word[fragment_word.length]

        # Otherwise choose a word from the winning words
        else
            winning_word = winning_words.sample
            fragment_word = @fragment.join("")
            return winning_word[fragment_word.length]
        end
    end

    "TO DO: See if you can improve your AI by computing the entire tree of
    possible moves from the current position. Choose the move that leaves the
    fewest losers and the most winners in the tree."
end