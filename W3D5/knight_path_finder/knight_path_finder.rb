require_relative "./polytreenode.rb"
require "byebug"

class KnightPathFinder
    attr_reader :root_node

    def self.valid_moves(pos)
        row, col = pos
        half_knight_moves = [[1, 2], [-1, 2], [1, -2], [-1, -2]]
        knight_moves = half_knight_moves + half_knight_moves.map(&:reverse)

        knight_moves.map! { |move| [row + move.first, col + move.last] }

        knight_moves.select do |move|
            (move.first >= 0) && (move.first <= 7) &&
            (move.last >= 0) && (move.last <= 7)
        end
    end

    def initialize(start_pos)
        @grid = Array.new(8) { Array.new(8) }
        (0...@grid.length).each do |row|
            (0...@grid.length).each do |col| 
                @grid[row][col] = PolyTreeNode.new([row, col])
            end
        end
        @root_node = PolyTreeNode.new(start_pos)
        @considered_positions = [start_pos]
        self.build_move_tree
    end

    def [](pos)
        row, col = pos
        @grid[row][col]
    end
    
    def new_move_positions(curr_pos)
        valid_pos = KnightPathFinder.valid_moves(curr_pos)
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