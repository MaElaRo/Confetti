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

  foodArr = Array.from({ length: 30 }).map(() => new Food());

  snakeObj = new Snake();
  frameRate(30);
}

function draw() {
  clear();
  background(148, 186, 209);

  for (let i = 0; i <= WIDTH; i += WIDTH / 20) {
    stroke("black");
    line(0, i, 600, i);
    line(i, 0, i, 600);
  }
  snakeObj.draw();

  foodArr.forEach((element, i) => {
    element.draw();
    if (element.checkCollision()) {
      foodArr.splice(i, 1);
    }
  });
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
