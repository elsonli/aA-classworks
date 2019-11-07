require_relative "./piece.rb"
require_relative "../modules/slideable.rb"

class Queen < Piece
  include Slideable
  attr_reader :symbol

  # Initializes a Queen Piece represented by the symbol :queen
  def initialize(color, board, position)
    super
    @symbol = :queen
  end

  protected
  def move_dirs
    Slideable.diagonal_dirs + Slideable.horizontal_dirs
  end
end