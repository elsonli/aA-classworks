require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    return false if @board.over? && (@board.winner.nil? || (@board.winner == evaluator))
    return true if @board.over?

    if next_mover_mark == evaluator 
      self.children.all? { |child| child.losing_node?(evaluator) }
    else
      self.children.any? { |child| child.losing_node?(evaluator) }
    end
  end

  def winning_node?(evaluator)
    return true if @board.over? && (@board.winner == evaluator)
    return false if @board.over? && (@board.winner.nil? || (@board.winner != evaluator))

    if next_mover_mark == evaluator 
      self.children.any? { |child| child.winning_node?(evaluator) }
    else
      self.children.all? { |child| child.winning_node?(evaluator) }
    end 
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    moves = []
    @board.rows.each_with_index do |row, idx_1|
      row.each_with_index do |ele, idx_2|
        pos = [idx_1, idx_2]
        if @board.empty?(pos)
          board = @board.dup
          board[pos] = next_mover_mark
          next_mark = (@next_mover_mark == :x ? :o : :x)
          moves << TicTacToeNode.new(board, next_mark, pos)
        end
      end
    end
    moves
  end
end
