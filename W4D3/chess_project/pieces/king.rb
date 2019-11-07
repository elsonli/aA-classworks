require_relative "./piece.rb"
require_relative "../modules/stepable.rb"

class King < Piece
  include Stepable
  attr_reader :symbol

  # Initializes a King Piece represented by the symbol :king
  def initialize(color, board, position)
    super
    @symbol = :king
  end
  
  protected
  def move_diffs
    Stepable.king_dirs
  end
end