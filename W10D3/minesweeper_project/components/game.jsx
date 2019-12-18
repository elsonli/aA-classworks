import React from "react";
import Board from "./board";
import * as Minesweeper from "../javascript/minesweeper"

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Minesweeper.Board(8, 10)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    flagged ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  restartGame() {
    const newBoard = new Minesweeper.Board(8, 10);
    this.setState({ board: newBoard });
  }

  render() {
    if (this.state.board.won() || this.state.board.lost()) {
      alert("Game Over!");
      this.restartGame();
    }
    return (
      <div>
        <Board
          board={ this.state.board }
          updateGame={ this.updateGame }
        />
      </div>
    )
  }
}

export default Game;