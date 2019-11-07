# This module will be included in the Knight and King Pieces
module Stepable

  # Public class methods that retrieve private constants
  def self.king_dirs
    Stepable::KING_DIRS
  end

  def self.knight_dirs
    Stepable::KNIGHT_DIRS
  end

  # Gets all possible moves for a Piece given the current position
  def moves
    directions = self.move_diffs
    possible_moves = []

    directions.each do |direction|
      new_position = [self.position.first + direction.first, self.position.last + direction.last]
      
      if self.board.valid_position?(new_position)
        
        # Move is valid if the current position is a NullPiece
        if self.board[new_position].is_a?(NullPiece)
          possible_moves << new_position
          next
        end
        
        # Move is invalid, can't move onto a Piece of the same color
        next if self.board[new_position].color == self.color
        
        # Move is valid, can move onto a Piece of a different color
        possible_moves << new_position
      end
    end

    possible_moves
  end

  # Private constants and methods
  private

  KING_DIRS = [
    [ 0,  1],
    [ 0, -1],
    [ 1,  0],
    [ 1,  1],
    [ 1, -1],
    [-1,  1],
    [-1,  0],
    [-1, -1]
  ]

  KNIGHT_DIRS = [
    [ 1,  2],
    [ 2,  1],
    [ 2, -1],
    [ 1, -2],
    [-1,  2],
    [-2,  1],
    [-2, -1],
    [-1, -2]
  ]
end