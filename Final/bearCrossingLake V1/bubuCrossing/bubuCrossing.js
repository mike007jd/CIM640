var bubu;
function setup() {
  createCanvas(400, 400);
  bubu = createSprite(
    width/2, height/2, 40, 40);
  bubu.shapeColor = color(255);
  bubu.rotateToDirection = true;
  bubu.maxSpeed = 2;
  bubu.friction = 0.99;
}
function draw() {
  background(50);
  if (mouseIsPressed) {
    bubu.attractionPoint(0.5, mouseX, mouseY);
  }
  drawSprites();
}
