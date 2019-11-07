require "colorize"
require_relative "./cursor.rb"

class Display
  attr_reader :cursor

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], @board)
  end

  def render
    @board.board.each do |row|
      p row
    end
  end
end