class Piece
  attr_reader :color, :board
  attr_accessor :position

  def initialize(color, board, position)
    @color = color
    @board = board
    @position = position
  end

  def inspect
    self.symbol
  end
end