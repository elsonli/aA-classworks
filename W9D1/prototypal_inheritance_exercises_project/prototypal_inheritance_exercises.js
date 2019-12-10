Function.prototype.inherits = function (Superclass) {
  // function Surrogate() {}
  // Surrogate.prototype = Superclass.prototype;
  // this.prototype = new Surrogate();
  this.prototype = Object.create(Superclass.prototype);
  this.prototype.constructor = this;
};


function MovingObject() {}
MovingObject.prototype.move = function() {
  console.log(`I am a moving object.`);
};

function Ship() {}
Ship.inherits(MovingObject);
Ship.prototype.movingShip = function() {
  console.log(`I am a moving ship.`);
};

function Asteroid() {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.movingAstr = function() {
  console.log(`I am a moving asteroid.`);
};

const mover = new MovingObject();
const ship = new Ship();
const ast = new Asteroid();

mover.move();
ship.movingShip();
ast.movingAstr();