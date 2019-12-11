const Game = require('./game.js');
const Asteroid = require("./asteroid.js");

function GameView(ctx) {
  this.game = new Game(); 
  this.ctx = ctx;
}
GameView.prototype.start = function(ctx) {
  let that = this;
  setInterval(function(){
    that.game.step();
    that.game.draw(ctx);
  }, 20);
};

module.exports = GameView;