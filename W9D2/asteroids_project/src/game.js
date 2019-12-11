const Asteroid = require("./asteroid.js");

const DIM_X = 800;
const DIM_Y = 600;
const NUM_ASTEROIDS = 8;


function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({pos: this.randomPosition()});
}

Game.prototype.addAsteroids = function() {
  let count = 0;
  while (count < NUM_ASTEROIDS) {
    let asteroid = new Asteroid({
      pos: this.randomPosition(),
      game: this
    });
    this.asteroids.push(asteroid);
    count++;
  }
};

Game.prototype.randomPosition = function() {
  const x = Math.random() * DIM_X;
  const y = Math.random() * DIM_Y;
  return [x, y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,DIM_X,DIM_Y);
  let allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    allObjects[i].draw(ctx); 
  }
};

Game.prototype.moveObjects = function() {
  let allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    allObjects[i].move();
  }
};

Game.prototype.wrap = function(pos) {
  return [(DIM_X + pos[0]) % DIM_X, (DIM_Y + pos[1]) % DIM_Y];
};

Game.prototype.checkCollisions = function() {
  let allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    let asteroid1 = allObjects[i];
    for (let j = 0; j < allObjects.length; j++) {
      let asteroid2 = allObjects[j];
      if (i !== j) {
        if (asteroid1.isCollidedWith(asteroid2)) {
          asteroid1.collideWith(asteroid2);
        }
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  let index = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(index,1);
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]);
}

module.exports = Game;