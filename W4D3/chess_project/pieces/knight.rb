require_relative "./piece.rb"
require_relative "../modules/stepable.rb"

class Knight < Piece
  include Stepable
  attr_reader :symbol

  # Initializes a Knight Piece represented by the symbol :knight
  def initialize(color, board, position)
    super
    @symbol = :knight
  end
  
  protected
  def move_diffs
    Stepable.knight_dirs
  end
end