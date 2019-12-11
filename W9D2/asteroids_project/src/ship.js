const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

const RADIUS = 10;
const COLOR = "black";

Utils.inherits(Ship, MovingObject);

function Ship(posObj) {
  MovingObject.call(this, {
    color: COLOR,
    radius: RADIUS,
    pos: posObj.pos,
    vel: [0,0],
    game: posObj.game
  });
}

Ship.prototype.move = function() {}

Ship.prototype.relocate = function() {
  this.pos = Game.randomPosition();
}

module.exports = Ship;