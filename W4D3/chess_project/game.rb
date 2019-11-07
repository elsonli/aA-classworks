require_relative "./board.rb"
require_relative "./display.rb"

class Game
  attr_reader :board, :display

  def initialize
    @board = Board.new
    @display = Display.new(@board)
  end

  def play
    while true
      system("clear")
      self.display.render
      self.display.cursor.get_input
    end
  end
end