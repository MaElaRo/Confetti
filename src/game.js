class Food {
  constructor() {
    this.x = random(0, 600);
    this.y = random(0, 600);
    //this.speed = 3;
  }
  
  draw() {
    this.foodObj = ellipse(this.x, this.y, 30, 30);
  }
}
