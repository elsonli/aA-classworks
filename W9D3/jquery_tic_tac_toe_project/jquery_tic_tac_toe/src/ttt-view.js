class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li", (event) => {
      const $liEl = $(event.target);
      const pos = $liEl.data("pos");
      if (!this.game.board.isEmptyPos(pos)) {
        alert("Invalid Move! Try Again.");
      } else  {
        this.game.playMove(pos);
        this.makeMove($liEl);
        if (this.game.isOver() && this.game.board.winner() === null) {
          let $message = $(`<h1>Tie!!</h1>`)
          $message.css("display", "flex");
          $message.css("justify-content", "center");
          $("body").append($message);
        } else if (this.game.isOver()){
          let winner = $("ul").find(`.${this.game.currentPlayer}`);
          this.game.swapTurn();
          let loser = $("ul").find(`.${this.game.currentPlayer}`);
          for (let i = 0; i < winner.length; i++) {
            $(winner[i]).css("background-color", "green");
            $(winner[i]).css("color", "white");
          }
          for (let i = 0; i < loser.length; i++) {
            $(loser[i]).css("color", "red");
          }
          this.game.swapTurn();
          let $message = $(`<h1>You win, ${this.game.currentPlayer}!</h1>`)
          $message.css("display", "flex");
          $message.css("justify-content", "center");
          $("body").append($message);
          // $("body").unbind();
        }
      }
    });
  }

  makeMove($square) {
    $square.css("background-color", "white");
    $square.text(`${this.game.currentPlayer}`);
    $square.addClass(`${this.game.currentPlayer}`);
  }

  setupBoard() {
    // Appends a ul element to the .ttt class of index.html
    this.$el.append($("<ul></ul>"));

    // Adds the li elements to the ul
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let newLi = $("<li></li>").data("pos", [i, j]);
        $("ul").append(newLi);
      }
    }

    $("ul").css("margin", "0 auto");
    $("h1").css("display", "flex");
    $("h1").css("justify-content", "center");

    $("ul").css("width", "300px");
    $("ul").css("display", "flex");
    $("ul").css("flex-wrap", "wrap");
    $("ul").css("padding", "0");
    $("ul").css("border", "5px solid black");

    $("ul li").addClass("ttt-li");
  }
}

module.exports = View;
