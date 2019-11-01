require_relative "./card.rb"

class Board
    def initialize(size)
        raise "Invalid size, please enter an even number!" if size.odd?
        @grid = Array.new(size) { Array.new(size) }
        @size = size * size
    end

    def [](pos)
      row, col = pos
      @grid[row][col]
    end

    def populate
      shuffled_alphabet = ("a".."z").to_a.shuffle
      random_samples = shuffled_alphabet[0...@size / 2]

      cards = []
      random_samples.each do |sample|
         cards << Card.new(sample)
         cards << Card.new(sample)
      end
      cards.shuffle!

      @grid.length.times do |row|
        @grid.length.times do |col|
            @grid[row][col] = cards.shift
        end
      end
   end

    def render
        (0...@grid.length).each do |row|
            (0...@grid.length).each do |col|
                if @grid[row][col].face_up
                    print "#{@grid[row][col].face_value}  "
                else
                    print "  "
                end
            end
            print "\n"
        end
    end

    def reveal(guess)
        unless self[guess].face_up
            self[guess].reveal
            return self[guess].face_value
        end 
    end

    def won?
        @grid.flatten.all?(&:face_up)
    end
end