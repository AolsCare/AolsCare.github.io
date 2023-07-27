class GameBody {
  constructor(GameManager) {
    this.GameManager = GameManager;
  }

  animate() {
    const gameWidth = this.GameManager.gameWidth;
    const gameHeight = this.GameManager.gameHeight;

    //Aninimate Background/ |Bottom Frame
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, gameWidth, gameHeight);

    //Animate Board
    ctx.fillStyle = "#eee";
    ctx.fillRect(5, 5, gameWidth - 10, gameHeight - 10);

    //Animate Top Frame
    ctx.fillStyle = "blue";
    ctx.fillRect(
      (gameWidth - 10) / 4 + 5,
      0,
      ((gameWidth - 10) / 4) * 3 + 5,
      (gameHeight - 10) / 7 + 5
    );
  }
}
