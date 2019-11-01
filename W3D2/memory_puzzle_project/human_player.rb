class HumanPlayer
    attr_reader :name, :count

    def initialize(name)
        @name = name
        @count = 0
    end

    def increase_count
        @count += 1
    end

    def prompt
        puts "#{self.name}: Enter two numbers separated by a space like `1 3`"
        input_1 = get_input

        puts "#{self.name}: Enter two numbers separated by a space like `1 3`"
        input_2 = get_input
        
        [input_1, input_2]
    end

    def get_input
        gets.chomp.split.map(&:to_i)
    end
end