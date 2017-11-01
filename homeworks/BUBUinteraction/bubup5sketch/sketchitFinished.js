var centerX = 0;
var centerY = 0;
var posY = 0;
var bgColor;


var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var hitZoneX = 200;
var hitZoneY = 200;

var hitZone1X = 400;
var hitZone1Y = 200;

var hitZone2X = 600;
var hitZone2Y = 300;

var hand;
var hand2;

var apple;
var rock;

var counter = 0;

var directionY = false;

function preload() {
    bgImage = loadImage("assets/daytime.jpg");
    bgImage2 = loadImage("assets/bedtime.jpg");
    hand = loadImage("assets/hands.png");
    hand2 = loadImage("assets/hand2.png");
    apple = loadImage("assets/apple.png");
    rock = loadImage("assets/Rock.png");
}

function setup() {
    createCanvas(800, 400);
    centerX = width / 2;
    centerY = height / 2;

    bgColor = color(255, 0, 0);


    bgChange = createButton("bedtime");
    bgChange.position(400, 500);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("daytime");
    bgChange2.position(300, 500);
    bgChange2.mousePressed(changeBgFunction2);

    currentBgImage = bgImage;
}

function draw() {
    background(bgColor);

    image(currentBgImage, 0, 0, 800, 400);

    //console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    centerX = mouseX;
    centerY = mouseY;
    fill(255)
    strokeWeight(1);

    //face
    noStroke();
    fill("#B97D36");
    ellipse(centerX, centerY, 150, 145);

    var wiggleX = map(mouseX, 0, width, -5, 5);
    //nose
    noStroke();
    strokeWeight
    fill("black");
    ellipse(centerX + wiggleX,centerY+17,15,15);
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX + wiggleX,centerY+20,60,60,QUARTER_PI,HALF_PI+QUARTER_PI);
    arc(centerX + wiggleX,centerY+30,10,10,QUARTER_PI,HALF_PI+QUARTER_PI);
    //eyse
    
    stroke(0);
    strokeWeight(2);
    fill("white");
    ellipse(centerX-7, centerY-30, 13, 30);
    ellipse(centerX+7, centerY-30, 13, 30);
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX,centerY+10,50,50,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
    noStroke();
    fill("grey");
    ellipse(centerX-7 + wiggleX,centerY-40,10,10);
    ellipse(centerX+7 + wiggleX,centerY-40,10,10);
    
    //ear
    
     fill("#B97D36");
    arc(centerX+45,centerY-40,50,100,PI+QUARTER_PI,PI+QUARTER_PI);
    arc(centerX-45,centerY-40,50,100,HALF_PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
     stroke(0);
    strokeWeight(2);
    arc(centerX+45,centerY-50,25,50,PI+QUARTER_PI,TWO_PI);
    arc(centerX-45,centerY-50,25,50,PI,PI+HALF_PI+QUARTER_PI);
    
    //inner face
    
     noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX+45 + wiggleX,centerY+15,50,50,HALF_PI,PI+HALF_PI);
    arc(centerX-45 + wiggleX,centerY+15,50,50,PI+HALF_PI,HALF_PI);
    
    //out face
    
    fill("#B97D36");
    arc(centerX-35,centerY+10,100,100,HALF_PI,PI+QUARTER_PI);
    arc(centerX+35,centerY+10,100,100,PI+HALF_PI+QUARTER_PI,HALF_PI);
    //red face
    
    noStroke();
    fill("red");
    ellipse(centerX-50,centerY+17,25,25);
    ellipse(centerX+50,centerY+17,25,25);

//    if (mouseX == hitZoneX && mouseY == hitZoneY) {
//        console.log("I am in the zone!!");
//    }

    var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);
    
    var hitZoneDist1 = dist(hitZone1X,hitZone1Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);
    
    var hitZoneDist2 = dist(hitZone2X,hitZone2Y,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist <= 10 && currentBgImage == bgImage){
       console.log("We are totally in the zone!");
        image(hand,25,125);
       }
     if(hitZoneDist <= 10 && currentBgImage == bgImage2){
       console.log("We are totally in the zone!");
        image(hand2,-50,-50);
       }

    stroke(0);
    strokeWeight(1);
    noFill();
    ellipse(hitZoneX,hitZoneY, 20,20);
    
     if(hitZoneDist1 <= 10){
       console.log("We are totally in the zone!");
          frameRate(5);

    push();

    scale(random(5.0));
    //face
    noStroke();
    fill("#B97D36");
    ellipse(centerX, centerY, 150, 145);
    //nose
    noStroke();
    strokeWeight
    fill("black");
    ellipse(centerX,centerY+17,15,15);
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX,centerY+20,60,60,QUARTER_PI,HALF_PI+QUARTER_PI);
    arc(centerX,centerY+30,10,10,QUARTER_PI,HALF_PI+QUARTER_PI);
    //eyse
    
    stroke(0);
    strokeWeight(2);
    fill("white");
    ellipse(centerX-7, centerY-30, 13, 30);
    ellipse(centerX+7, centerY-30, 13, 30);
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX,centerY+10,50,50,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
    noStroke();
    fill("grey");
    ellipse(centerX-7,centerY-40,10,10);
    ellipse(centerX+7,centerY-40,10,10);
    
    //ear
    
     fill("#B97D36");
    arc(centerX+45,centerY-40,50,100,PI+QUARTER_PI,PI+QUARTER_PI);
    arc(centerX-45,centerY-40,50,100,HALF_PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
     stroke(0);
    strokeWeight(2);
    arc(centerX+45,centerY-50,25,50,PI+QUARTER_PI,TWO_PI);
    arc(centerX-45,centerY-50,25,50,PI,PI+HALF_PI+QUARTER_PI);
    
    //inner face
    
     noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX+45,centerY+15,50,50,HALF_PI,PI+HALF_PI);
    arc(centerX-45,centerY+15,50,50,PI+HALF_PI,HALF_PI);
    
    //out face
    
    fill("#B97D36");
    arc(centerX-35,centerY+10,100,100,HALF_PI,PI+QUARTER_PI);
    arc(centerX+35,centerY+10,100,100,PI+HALF_PI+QUARTER_PI,HALF_PI);
    //red face
    
    noStroke();
    fill("red");
    ellipse(centerX-50,centerY+17,25,25);
    ellipse(centerX+50,centerY+17,25,25);
    pop();


       }

    stroke(0);
    strokeWeight(1);
    noFill();
    ellipse(hitZone1X,hitZone1Y, 20,20);
    
     if(hitZoneDist2 <= 10 && currentBgImage == bgImage){
       console.log("We are totally in the zone!");
        
         frameRate(60);

        image(apple,575, posY);
        
        if (directionY == false) {
            posY++;
        } else {
            posY--;
        }

        if (posY >= height/2) {
            directionY = true;
        }

        if (posY <= 0) {
            directionY = false;
        }
       }
    
       if(hitZoneDist2 <= 10 && currentBgImage == bgImage2){
       console.log("We are totally in the zone!");
        
         frameRate(60);

        image(rock,575, posY);
        
        if (directionY == false) {
            posY++;
        } else {
            posY--;
        }

        if (posY >= height/2) {
            directionY = true;
        }

        if (posY <= 0) {
            directionY = false;
        }
       }

    stroke(0);
    strokeWeight(1);
    noFill();
    ellipse(hitZone2X,hitZone2Y, 20,20);

}

function mousePressed() {
    bgColor = color(0, 255, 0);
}

function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}
