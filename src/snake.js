class Snake {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.body = [];
    this.position = "";
  }

  draw() {
    push();
    fill(243, 160, 184);
    ellipse(this.col * 30 + 15, this.row * 30 + 15, 30, 30);
    pop();

    if (this.position === "N") this.row -= 1;
    if (this.position === "S") this.row += 1;
    if (this.position === "E") this.col += 1;
    if (this.position === "W") this.col -= 1;
    //foodObj.move();

    if (this.row <= 0) this.row = 0;
    if (this.row >= 19) this.row = 19;
    if (this.col >= 19) this.col = 19;
    if (this.col <= 0) this.col = 0;

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
