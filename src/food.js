class Food {
  constructor() {
    this.col = Math.round(random(0, 19));
    this.row = Math.round(random(0, 19));
    //this.speed = 3;
  }
  /*move() {
    this.col += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }*/
  draw() {
    ellipse(this.col * 30 + 15, this.row * 30 + 15, 30);
    fill(104, 174, 149);
  }

  checkCollision() {
    let d = dist(this.col, this.row, snakeObj.col, snakeObj.row);
    if (d == 0) {
      return true;
    }
    //check if player and i from array is on the same spot
    //if it is on the same spot, remove the object (i)
    //if it is not on the same spot, leave it on the grid
  }
}
