# This module will be included in the Rook, Bishop, and Queen Pieces
module Slideable

  # Public class methods that retrieve private constants
  def self.horizontal_dirs
    Slideable::HORIZONTAL_DIRS
  end

  def self.diagonal_dirs
    Slideable::DIAGONAL_DIRS
  end

  # Gets all possible moves for a Piece given the current position
  def moves
    directions = self.move_dirs
    possible_moves = []

    directions.each do |direction|
      moves_arr = grow_unblocked_moves_in_dir(direction.first, direction.last)
      possible_moves += moves_arr
    end

    possible_moves
  end

  # Private constants and methods
  private

  HORIZONTAL_DIRS = [
    [ 0,  1],
    [ 0, -1],
    [ 1,  0],
    [-1,  0]
  ]

  DIAGONAL_DIRS = [
    [ 1,  1],
    [ 1, -1],
    [-1,  1],
    [-1, -1]
  ]

  # Generate all of the possible moves for a Rook Piece from the current position,
  # given that the new position must be valid and no other Piece is in the way
  def grow_unblocked_moves_in_dir(dx, dy)
    moves = []
    current_pos = [self.position.first + dx, self.position.last + dy]

    while self.board.valid_position?(current_pos)

      # Move is valid if the current position is a NullPiece
      if self.board[current_pos].is_a?(NullPiece)
        moves << current_pos
        current_pos = [current_pos.first + dx, current_pos.last + dy]
        next
      end

      # Move is invalid, can't move any further, break out of loop
      break if self.board[current_pos].color == self.color

      # Move is still valid, but can't move any further, also break out of loop
      moves << current_pos
      break
    end
    moves
  end
end