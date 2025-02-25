
let balls = [];


function setup() {
  createCanvas(700, 400);

}

function draw() {
  background(220);

  for (let ball of balls) {
    ball.move();
    drawBall(ball);
  }
}

