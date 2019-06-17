class Snake {
  constructor() {
    this.x = 15;
    this.y = 15;
    this.body = [];
    this.position = "";
  }

  draw() {
    this.snakeObj = ellipse(this.x, this.y, 30, 30);
    fill(243, 160, 184);
  }
}
