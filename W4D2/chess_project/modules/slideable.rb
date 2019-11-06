# This module will be included in the Rook, Bishop, and Queen Pieces
module Slideable

  # Public class methods that retrieve private constants
  def self.horizontal_dirs
    Slideable::HORIZONTAL_DIRS
  end

  def self.diagonal_dirs
    Slideable::DIAGONAL_DIRS
  end


  # Private constants and methods
  private

  HORIZONTAL_DIRS = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
  ]

  DIAGONAL_DIRS = [
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1]
  ]
end