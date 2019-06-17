let snakeObj;
const WIDTH = 600;
const HEIGHT = WIDTH;
let canvas;
let foodObj;
let foodArr;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas-center");
  background(148, 186, 209);

  foodArr = Array.from({ length: 10 }).map(() => new Food());

  snakeObj = new Snake();
  frameRate(15);
  foodObj = new Food();
}

function draw() {
  clear();
  background(148, 186, 209);
  snakeObj.draw();

  foodArr.forEach(element => {
    element.draw();
  });

  if (snakeObj.position === "N") snakeObj.y -= 15;
  if (snakeObj.position === "S") snakeObj.y += 15;
  if (snakeObj.position === "E") snakeObj.x += 15;
  if (snakeObj.position === "W") snakeObj.x -= 15;
  //foodObj.move();

  if (snakeObj.y <= 0) snakeObj.y = 15;
  if (snakeObj.y >= 600) snakeObj.y = 585;
  if (snakeObj.x >= 600) snakeObj.x = 585;
  if (snakeObj.x <= 0) snakeObj.x = 15;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snakeObj.position = "N";
  }
  if (keyCode === DOWN_ARROW) {
    snakeObj.position = "S";
  }
  if (keyCode === RIGHT_ARROW) {
    snakeObj.position = "E";
  }
  if (keyCode === LEFT_ARROW) {
    snakeObj.position = "W";
  }
  /*function eat (){
    if (snakeObj.)
  }*/
}
