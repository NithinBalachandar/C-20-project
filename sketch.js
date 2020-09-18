var car, wall;
var speed, weight;

function setup() {
  createCanvas(500, 500);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 20);
  wall = createSprite(500, 200, 60, 300);
  car.velocityX = speed;
}

function draw() {
  background("black");
  drawSprites();
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deforamtion = (0.5 * weight * speed * speed) / 22509;
    if (deformation > 180) {
      car.shapeColor = color("green");
    }
    if (deforamtion < 180 && deforamtion > 100) {
      car.shapeColor = color("yellow");
    }
    if (deforamtion < 100) {
      car.shapeColor = color("red");
    }
  }
}
