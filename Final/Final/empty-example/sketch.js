var bubuBear;


function preload(){
    bubu_sheet
}
function setup() {
createCanvas(800,600);



bubuBear = createSprite(width/2, height/2);
bubuBear.maxSpeed = 6;
bearBear.friction = .98;

bear.addImage("normal", bearImage);
bear.addImage("thrust", bearImage);



}

function draw() {
  background(0);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: a rotate left d rotate right w swim forward", width/2, 20);
  
  
  if(keyDown("a"))
    bear.rotation -= 4;
  if(keyDown("d"))
    bear.rotation += 4;
  if(keyDown("w"))
    {
    bear.addSpeed(.2, bear.rotation);
    bear.changeAnimation("thrust");
    }
  else
    bear.changeAnimation("normal");
    

  
  drawSprites();
  
}



