const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../../jquery_tic_tac_toe_solution/game.js"); // require appropriate file

  $(() => {
    // Your code here
    const game = new Game();
    let $el = $(".ttt");
    const view = new View(game, $el);
    window.view = view;
  });
