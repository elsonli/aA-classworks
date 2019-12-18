import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const tile = this.props.tile;
    const flagTile = event.altKey ? true : false;
    return this.props.updateGame(tile, flagTile);
  }

  render() {
    const tile = this.props.tile;
    let tileText, tileStatus;
    if (tile.explored) {
      if (tile.bombed) {
        tileText = "\u{1F4A3}";
        tileStatus = "bombed";
      } else {
        const bombCount = tile.adjacentBombCount();
        tileText = (bombCount > 1) ? `${bombCount}` : "";
        tileStatus = "explored";
      }
    } else if (tile.flagged) {
      tileText = "\u2690";
      tileStatus = "flagged";
    } else {
      tileText = "";
      tileStatus = "unexplored";
    }

    return (
      <div className={`tile ${tileStatus}`} onClick={this.handleClick}>
        { tileText }
      </div>
    )
  }
}

export default Tile;