let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8).fill(0).map(() => new Array(8));
  grid[3][4] = new Piece("black"); 
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let x = pos[0];
  let y = pos[1];
  return this.grid[x][y];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (!this.grid[i][j]) {
        return true; 
      }
    }
  }
  return false; 
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  if (piece === undefined) {
    return false;
  } else {
    return color === piece.color;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let piece = this.getPiece(pos); 
  return piece ? true : false;  
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (!this.grid[i][j]) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if ((x > 0 && x < 8 ) && (y > 0 && y < 8) ) {
    return true;
  } else {
    return false;
  }
};

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let row = pos[0];
  let col = pos[1];
  let newPos = [row + dir[0], col + dir[1]];
  if (!board.isValidPos(newPos) || !board.isOccupied(newPos)) {
    return null;
  } else {
    if (!board.isMine(newPos, color)) {
      piecesToFlip.push(board.getPiece(newPos));
      return _positionsToFlip(board, newPos, color, dir, piecesToFlip);
    } else {
      if (piecesToFlip.length === 0) {
        return null;
      } else {
        return piecesToFlip;
      }
    }
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
function searchForArray(haystack, needle) {
  var i, j, current;
  for (i = 0; i < haystack.length; ++i) {
    if (needle.length === haystack[i].length) {
      current = haystack[i];
      for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if (j === needle.length)
        return i;
    }
  }
  return -1;
}

Board.prototype.placePiece = function (pos, color) {
  // if (this.validMove(pos, color)) {
  if (searchForArray(this.validMoves(color), pos) !== -1) {
    // Places a Piece on the grid
    let x = pos[0];
    let y = pos[1];
    this.grid[x][y] = new Piece(color);

    // Flips pieces
    let posToFlip = [];
    for (let i = 0; i < Board.DIRS.length; i++) {
      let dir = Board.DIRS[i];
      let flips = _positionsToFlip(this, pos, color, dir, []);
      if (flips) {
        posToFlip = posToFlip.concat(flips);
      }
    }
    for (piece of posToFlip) {
      piece.flip();
    }

    // 
  } else {
    throw Error;
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */

Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }
  for (const dir of Board.DIRS) {
    let pieces = _positionsToFlip(this, pos, color, dir, []);
    if (pieces) {
      return true;
    }
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let moves = [];
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      let pos = [i, j];
      if (this.validMove(pos, color)) {
        moves.push(pos);
      }
    }
  }
  return moves;
};

module.exports = Board;