class Food {
  constructor() {
    this.x = random(0, 600);
    this.y = random(0, 600);
    //this.speed = 3;
  }
  /*move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }*/
  draw() {
    this.foodObj = ellipse(this.x, this.y, 30, 30);
  }
}
