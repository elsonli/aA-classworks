import React from "react";
import Tile from "./tile.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.board;
    return (
      <div>
        {
          board.grid.map((row, rowIdx) => {
            const tileRow = row.map((tile, tileIdx) => {
              return (
                <Tile
                  key={ (board.gridSize * rowIdx) + tileIdx }
                  tile={ tile }
                  updateGame={ this.props.updateGame } />
              )
            })

            return (
              <div key={ rowIdx }>
                { tileRow }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Board;