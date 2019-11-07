require "set"
require_relative "./pieces/piece.rb"
require_relative "./pieces/bishop.rb"
require_relative "./pieces/king.rb"
require_relative "./pieces/knight.rb"
require_relative "./pieces/pawn.rb"
require_relative "./pieces/queen.rb"
require_relative "./pieces/rook.rb"
require_relative "./pieces/null_piece.rb"

class Board
  attr_reader :board

  def initialize
    # Instantiates the Chess board and places the Pieces
    @board = Array.new(8) { Array.new(8) }
    @sentinel = NullPiece.instance
    self.generate_pieces
  end
  

  def generate_pieces
    # Each set contains the starting rows for a specific color (player)
    # red_piece_rows = [0,1].to_set
    # black_piece_rows = [6,7].to_set

    # Iterate over the board and place Pieces depending on Player and position
    # 1. Red Piece Instances for the Red Player
    # 2. Black Piece Instances for the Black Player
    # 3. Null NullPiece Instances for empty positions
    (0...@board.length).each do |row_idx|
      (0...@board.length).each do |col_idx|
        position = [row_idx, col_idx]
        if row_idx == 1
          self[position] = Pawn.new(:red, self, position)
        elsif row_idx == 6
          self[position] = Pawn.new(:black, self, position)
        elsif row_idx.between?(2, 5)
          self[position] = sentinel
        elsif row_idx == 0
          if col_idx == 0 || col_idx == 7
            self[position] = Rook.new(:red, self, position)
          elsif col_idx == 1 || col_idx == 6
            self[position] = Knight.new(:red, self, position)
          elsif col_idx == 2 || col_idx == 5
            self[position] = Bishop.new(:red, self, position)
          elsif col_idx == 3
            self[position] = King.new(:red, self, position)
          else
            self[position] = Queen.new(:red, self, position)
          end
        else
          if col_idx == 0 || col_idx == 7
            self[position] = Rook.new(:black, self, position)
          elsif col_idx == 1 || col_idx == 6
            self[position] = Knight.new(:black, self, position)
          elsif col_idx == 2 || col_idx == 5
            self[position] = Bishop.new(:black, self, position)
          elsif col_idx == 3
            self[position] = Queen.new(:black, self, position)
          else
            self[position] = King.new(:black, self, position)
          end
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

  def empty?(position)
    self[position].is_a?(NullPiece)
  end

  # Moves a piece from start_pos to end_pos according to the following constraints:
  # 1. The start position must be between [0, 0] and [7, 7]
  # 2. The end position must be between [0, 0] and [7, 7]
  # 3. Moves the Piece from start position to end position if not occupied (?)
  #    Might need to include logic for moving onto Pieces of the opposite color
  def move_piece(start_pos, end_pos)
    
    unless self.valid_position?(start_pos) && !self[start_pos].is_a?(NullPiece)
      raise ArgumentError.new("Invalid start position, must be non-empty and be between '[0, 0]' and '[7, 7]'") 
    end

    unless self.valid_position?(end_pos)
      raise ArgumentError.new("Invalid end position, must be between '[0, 0]' and '[7, 7]'") 
    end
    
    current_piece = self[start_pos]
    current_piece_moves = current_piece.moves

    unless current_piece_moves.include?(end_pos)
      raise ArgumentError.new("Invalid end position, piece cannot move here")
    end

    if self[end_pos].is_a?(NullPiece)
      self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    else
      self[start_pos], self[end_pos] = sentinel, self[start_pos]
    end

    # Update position
    self[end_pos].position = end_pos
  end

  private
  attr_reader :sentinel
end