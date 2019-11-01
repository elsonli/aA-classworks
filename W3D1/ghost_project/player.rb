class Player
    attr_reader :name

    def initialize(name)
        @name = name
    end

    def guess
        gets.chomp
    end

    def alert_invalid_guess
        puts "This is not a valid play. Please enter a single letter."
    end
end