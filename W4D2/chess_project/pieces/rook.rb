require_relative "./piece.rb"
require_relative "../modules/slideable.rb"

class Rook < Piece
  include Slideable

  # Initializes a Rook Piece represented by the symbol :rook
  def initialize(color, board, position)
    super
    @symbol = :rook
  end

  # Calculate a new position from the current position given a differential
  def add_diff(current_pos, diff)
    [current_pos.first + diff.first, current_pos.last + diff.last]
  end

  # private

  # Generate all of the possible moves for a Rook Piece from the current position,
  # given that the new position must be valid and no other Piece is in the way
  def move_dirs
    possible_moves = []
    diffs = Slideable.horizontal_dirs.dup

    until diffs.empty?
      diff = diffs.shift
      current_pos = self.add_diff(self.position, diff)

      while self.board.valid_position?(current_pos)
        possible_moves << current_pos
        current_pos = self.add_diff(current_pos, diff)
      end
    end
  
    possible_moves
  end

  # Rook#moves filters the result of Rook#move_dirs
  # Maybe use a Hash where hash[diff] => [positions]
  # Check all positions, and exclude the ones that are not blocked by another piece
end