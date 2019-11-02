require_relative "./polytreenode.rb"
require "byebug"

class KnightPathFinder
    attr_reader :root_node

    def self.valid_moves(pos)
        x, y = pos
        
        poss = [[1,2], [-1,2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]
        mapped = poss.map { |pair| [x + pair.first, y + pair.last] }
        prc = Proc.new { |ele| ele >= 0 && ele <= 7 }
        mapped.select { |pair| prc.call(pair.first) && prc.call(pair.last) }
    end

    def initialize(start_pos)
        @grid = Array.new(8) { Array.new(8) }
        (0...@grid.length).each do |i|
            (0...@grid.length).each do |j| 
                @grid[i][j] = PolyTreeNode.new([i, j])
            end
        end
        @root_node = PolyTreeNode.new(start_pos)
        @considered_positions = [start_pos]
        self.build_move_tree
    end

    def [](pos)
        x, y = pos
        @grid[x][y]
    end
    
    def new_move_positions(pos)
        valid_pos = KnightPathFinder.valid_moves(pos)
        valid_pos.reject! { |pos| @considered_positions.include?(pos) }
        @considered_positions.concat(valid_pos)
        valid_pos
    end

    def build_move_tree
        queue = [@root_node]
        # pop off root node
        # check for all possible moves from popped
        # add all possible moves into queue
        # link nodes together using tree node methods
    end
end