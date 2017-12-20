var bubu;
var bubuImage;
var aligator;
var aligatorImage;

function setup() {
    createCanvas(800, 600);
    
    bubuImage=loadImage("assets/bubu.png");
    aligatorImage=loadImage("assets/aligator.png");
    aligator= createSprite(300,200,40,40);
    
    bubu = createSprite( width / 2, height / 2,40,40);
    bubu.shapeColor = color(255);
    bubu.rotateToDirection = true;
    bubu.maxSpeed = 2;

    bubu.addImage("swim", bubuImage);
    aligator.addImage("normal",aligatorImage);
}

function draw() {
    background("green");
    if (mouseIsPressed) {
        bubu.attractionPoint(0.5, mouseX, mouseY);
    }
      textAlign(CENTER);
    textSize(40);
    text("Click to move", width/2, 60);
    drawSprites();
}
