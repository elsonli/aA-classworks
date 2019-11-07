require_relative "./piece.rb"
require_relative "../modules/slideable.rb"

class Rook < Piece
  include Slideable
  attr_reader :symbol

  # Initializes a Rook Piece represented by the symbol :rook
  def initialize(color, board, position)
    super
    @symbol = :rook
  end

  protected
  def move_dirs
    Slideable.horizontal_dirs
  end
end