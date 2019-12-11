function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  let wrappedPos = this.game.wrap(this.pos);
  this.pos[0] = wrappedPos[0];
  this.pos[1] = wrappedPos[1];
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let cp1 = this.pos;
  let cp2 = otherObject.pos;
  let sumRadii = this.radius + otherObject.radius;
  let distance = Math.sqrt(Math.pow((cp1[0] - cp2[0]), 2) + Math.pow((cp1[1] - cp2[1]), 2));
  return (distance < sumRadii) ? true : false;
};

MovingObject.prototype.collideWith = function(otherObject) {
  // this.game.remove(this);
  // this.game.remove(otherObject);
};

module.exports = MovingObject; 