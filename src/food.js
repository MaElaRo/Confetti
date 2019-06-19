let randomColor;

class Food {
  constructor(standard) {
    this.col = Math.round(random(0, 19));
    this.row = Math.round(random(0, 19));
    this.colorArray = [[209, 129, 146], [190, 118, 133]];
    this.randIndex = Math.floor(random(0, this.colorArray.length));
    this.isStandard = standard;
  }
  setup() {
    /*  this.color = (154, 201, 184);
    this.color1 = (184, 154, 201);
    this.color2 = (189, 73, 98);
    fill(random(this.color1, this.color2, this.color)); */
    // randomColor = color(
    //   random(154, 201, 184),
    //   random(184, 154, 201),
    //   random(189, 73, 98)
    // );
  }
  draw() {
    //fill(random(this.color));
    push();
    if (this.isStandard) {
      fill(154, 201, 184);
    } else fill(this.colorArray[this.randIndex]);

    ellipse(this.col * 30 + 15, this.row * 30 + 15, 30);
    pop();
  }

  checkCollision() {
    let d = dist(this.col, this.row, snakeObj.col, snakeObj.row);
    if (d == 0) {
      // if(this.color == red) rate -5
      if (this.isStandard === true) {
        gameScore += 1;
        console.log(gameScore);
      } else if (this.isStandard === false) {
        rate += 2;
      }
      return true;
    }
  }
}
