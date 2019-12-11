const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require('./game.js');
const GameView = require('./game_view.js');
const Ship = require('./ship.js');

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  window.ctx = ctx; // Set window ctx here because ctx is block scoped
  const gameView = new GameView(ctx);
  gameView.start(ctx);
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;