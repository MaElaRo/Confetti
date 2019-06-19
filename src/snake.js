class Snake {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.body = [];
    this.position = "";
    this.speed = 1;
  }

  draw() {
    push();
    fill(243, 160, 184);
    ellipse(this.col * 30 + 15, this.row * 30 + 15, 30, 30);
    pop();

    if (this.position === "N") this.row -= this.speed;
    if (this.position === "S") this.row += this.speed;
    if (this.position === "E") this.col += this.speed;
    if (this.position === "W") this.col -= this.speed;

    if (this.row > 19) {
      noLoop();
      print("Game Over");
    }
    if (this.col > 19) {
      noLoop();
      print("Game Over");
    }
    if (this.col < 0) {
      noLoop();
      print("Game Over");
    }
    if (this.row < 0) {
      noLoop();
      print("Game Over");
    }

    if (keyCode === UP_ARROW) {
      this.position = "N";
    }
    if (keyCode === DOWN_ARROW) {
      this.position = "S";
    }
    if (keyCode === RIGHT_ARROW) {
      this.position = "E";
    }
    if (keyCode === LEFT_ARROW) {
      this.position = "W";
    }
  }
}
