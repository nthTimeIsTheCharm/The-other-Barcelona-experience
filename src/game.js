class Game {
  constructor() {
    this.gameArea = document.getElementById("game-area");
    this.gameAreaWidth = this.gameArea.getBoundingClientRect().width;
    this.gameAreaHeight = this.gameArea.getBoundingClientRect().height;
    this.frame = 0;
  }

  gameOver() {
    showGameOver();
    cancelAnimationFrame(internalGameLoop);
    cancelAnimationFrame(externalGameLoop);
  }
}
