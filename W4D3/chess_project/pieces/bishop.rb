require_relative "./piece.rb"
require_relative "../modules/slideable.rb"

class Bishop < Piece
  include Slideable
  attr_reader :symbol

  # Initializes a Bishop Piece represented by the symbol :bishop
  def initialize(color, board, position)
    super
    @symbol = :bishop
  end

  protected
  def move_dirs
    Slideable.diagonal_dirs
  end
end