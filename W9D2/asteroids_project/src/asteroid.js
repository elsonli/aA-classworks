const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

const COLOR = "green";
const RADIUS = 10;
Utils.inherits(Asteroid, MovingObject);

function Asteroid(posObj) {
  MovingObject.call(this, {
    color: COLOR,
    radius: RADIUS,
    pos: posObj.pos,
    vel: Utils.randomVec(4),
    game: posObj.game
  });
}
Asteroid.prototype.collideWith = function(otherObj) {
  if(otherObj instanceof Ship) {
    Ship.prototype.relocate();
  }
}
module.exports = Asteroid;