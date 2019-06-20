let snakeObj;
const WIDTH = 600;
const HEIGHT = WIDTH;
let canvas;
let foodObj;
let foodArr;
let gameScore = 0;
let rate = 4;

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas-center");
  background(148, 186, 209);

  foodArr = Array.from({ length: 25 }).map(() => new Food(true));
  for (let i = 0; i < 10; i++) {
    foodArr.push(new Food(false));
  }
  /*  foodArr.forEach(food=>food.setup()) */
  foodArr.forEach(function(food) {
    food.setup();
  });
  snakeObj = new Snake();
  mySound = loadSound("assets/NFF-steal-02.wav");
  myDeathSound = loadSound("assets/NFF-shut-down.wav");
  myPointSound = loadSound("assets/NFF-coin-04.wav");
}

function draw() {
  frameRate(rate);
  clear();
  background(148, 186, 209);
  fill("black");
  document.getElementById("points").innerText = `Points:  ${gameScore}`;

  for (let i = 0; i <= WIDTH; i += WIDTH / 20) {
    stroke(148, 186, 209);
    //stroke("black");
    line(0, i, 600, i);
    line(i, 0, i, 600);
  }
  //snakeObj.draw();

  foodArr.forEach((element, i) => {
    element.draw();
    if (element.checkCollision()) {
      foodArr.splice(i, 1);
    }
  });
  snakeObj.draw();
}

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
