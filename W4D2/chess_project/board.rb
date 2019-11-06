require_relative "./pieces/piece.rb"
require_relative "./pieces/null_piece.rb"

class Board
  attr_reader :board

  def initialize
    # Instantiates the Chess board and places the Pieces
    @board = Array.new(8) { Array.new(8) }
    self.generate_pieces
  end
  

  def generate_pieces
    # Each set contains the starting rows for a specific color (player)
    red_piece_rows = [0,1].to_set
    black_piece_rows = [6,7].to_set

    # Iterate over the board and place Pieces depending on Player and position
    # 1. Red Piece Instances for the Red Player
    # 2. Black Piece Instances for the Black Player
    # 3. Null NullPiece Instances for empty positions
    (0...@board.length).each do |row_idx|
      (0...@board.length).each do |col_idx|
        position = [row_idx, col_idx]
        if red_piece_rows.include?(row_idx)
          self[position] = Piece.new(:red, @board, [row_idx, col_idx])
        elsif black_piece_rows.include?(row_idx)
          self[position] = Piece.new(:black, @board, [row_idx, col_idx])
        else
          self[position] = NullPiece.new(:null, @board, [row_idx, col_idx])
        end
      end
    end
  end

  # Getter method for position
  def [](position)
    row, col = position
    @board[row][col]
  end

  # Setter method for position
  def []=(position, value)
    row, col = position
    @board[row][col] = value
  end

  # Check if a position is a valid spot on the board
  def valid_position?(position)
    return false unless position.first.between?(0, 7) && position.last.between?(0, 7)
    true
  end

  # Moves a piece from start_pos to end_pos according to the following constraints:
  # 1. The start position must be between [0, 0] and [7, 7]
  # 2. The end position must be between [0, 0] and [7, 7]
  # 3. Moves the Piece from start position to end position if not occupied (?)
  #    Might need to include logic for moving onto Pieces of the opposite color
  def move_piece(start_pos, end_pos)
    unless self.valid_position?(start_pos)
      raise ArgumentError.new("Invalid start position, must be between '[0, 0]' and '[7, 7]'") 
    end
    unless self.valid_position?(end_pos)
      raise ArgumentError.new("Invalid end position, must be between '[0, 0]' and '[7, 7]'") 
    end
    if self[end_pos].is_a?(NullPiece)
      self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    end
  end
end