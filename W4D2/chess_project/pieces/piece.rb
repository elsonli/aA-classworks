class Piece
  attr_reader :color, :board, :position

  def initialize(color, board, position)
    @color = color
    @board = board
    @position = position
  end

  def moves

  end

  def inspect
    self.position
  end
end