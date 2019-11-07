require "byebug"
require_relative "./piece.rb"

class Pawn < Piece
  attr_reader :symbol

  def initialize(color, board, position)
    super
    @symbol = :pawn
  end
  
  def moves
    moves = []
    test_pos_1 = [self.position.first + forward_dir, self.position.last] 
    test_pos_2 = [self.position.first + forward_steps, self.position.last] 
    return moves unless self.board.valid_position?(test_pos_1)
    
    # Checks if the Pawn can move forward two spaces
    if at_start_row?
      if self.board.empty?(test_pos_1) && self.board.empty?(test_pos_2)
        moves << test_pos_2
      end
    end
    
    # Checks if the Pawn can move forward one space
    if self.board.empty?(test_pos_1)
      moves << test_pos_1
    end

    # Appends to move the side attacks if there are Pieces of the opposite color
    moves += side_attacks

    moves
  end

  private
  def at_start_row?
    return true if (self.color == :red) && (self.position.first == 1)
    return true if (self.color == :black) && (self.position.first == 6)
    false
  end

  def forward_dir
    self.color == :red ? 1 : -1
  end

  def forward_steps
    self.color == :red ? 2 : -2
  end

  def side_attacks
    moves = []

    if self.color == :red
      left = [self.position.first + forward_dir, self.position.last + 1]
      right = [self.position.first + forward_dir, self.position.last - 1]
    else
      left = [self.position.first + forward_dir, self.position.last - 1]
      right = [self.position.first + forward_dir, self.position.last + 1]
    end
      
    if self.board.valid_position?(left) && !self.board.empty?(left)
      left_color = self.board[left].color
      moves << left unless (left_color == self.color) || (left_color == :null)
    end

    if self.board.valid_position?(right) && !self.board.empty?(right)
      right_color = self.board[right].color
      moves << right unless (right_color == self.color) || (right_color == :null)
    end

    moves
  end
end