let randomColor;
let mySound;
let myPointSound;
class Food {
  constructor(standard) {
    this.col = Math.round(random(0, 19));
    this.row = Math.round(random(0, 19));
    this.colorArray = [[209, 129, 146], [190, 118, 133]];
    this.randIndex = Math.floor(random(0, this.colorArray.length));
    this.isStandard = standard;
  }

  setup() {}
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
        myPointSound.play();
        gameScore += 1;
        if (gameScore === 25) {
          textSize(30);
          fill(209, 129, 146);
          textAlign(CENTER, CENTER);
          text("You won", WIDTH / 2, HEIGHT / 2);
          noLoop();
        }
        //console.log(gameScore);
      } else if (this.isStandard === false) {
        mySound.play();
        rate += 2;
      }
      return true;
    }
  }
}
