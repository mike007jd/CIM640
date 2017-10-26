var centerX = 0;
var centerY = 0;

var bgChange, bgChange1, hitImage;


var bgImage,bgImage2, currentBgImage;


var hitZoneX=100;
var hitZoneY=100;

var changeColor = false;

var randomColor = [255,255,255];

var showHide = true;

var showHideButton;

function preload(){
    bgImage = loadImage("assets/canival.jpg");
    bgImage2= loadImage("assets/party.jpg");
    hitImage = loadImage("assets/ballons.png");
}


function setup(){   
    createCanvas(500,500);
    centerX = width/2;
    centerY = height/2;
    
    bgChange = createButton("carnival");
    bgChange.position(10,500);
    bgChange.mousePressed(bgFunction);
    
    bgChange1 = createButton('party');
    bgChange1.position(100, 500);
    bgChange1.mousePressed(bgFunction1);

    showHideButton = createButton('show hide');
    showHideButton.position(200, 500);
    showHideButton.mousePressed(showHideFunction);

    currentBgImage = bgImage;
    
  
               
}


function draw(){
   
    image(currentBgImage, 0, 0);

    if (changeColor == true) {
        randomColor[0] = random(256);
        randomColor[1] = random(256);
        randomColor[2] = random(256);

    }


    if (showHide == true) {
        fill(randomColor[0], randomColor[1], randomColor[2]);
    
    strokeWeight(1);
    //布布总脸
    fill("#B97D36");
    ellipse(posX,posY,300,290);
    //布布的外肥脸
    fill("#B97D36");
    arc(posX-70,posY+20,200,200,HALF_PI,PI+QUARTER_PI);
    arc(posX+70,posY+20,200,200,PI+HALF_PI+QUARTER_PI,HALF_PI);
    //布布的内肥脸
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(posX+90,posY+30,100,100,HALF_PI,PI+HALF_PI);
    arc(posX-90,posY+30,100,100,PI+HALF_PI,HALF_PI);
    //布布的红脸蛋
    noStroke();
    fill("red");
    ellipse(posX-120,posY+35,50,50);
    ellipse(posX+120,posY+35,50,50);
    //布布的眼睛
    stroke(0);
    strokeWeight(4);
    fill("white");
    ellipse(posX-15,posY-60,25,60);
    ellipse(posX+15,posY-60,25,60);
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(posX,posY+20,100,100,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
    noStroke();
    fill("grey");
    ellipse(posX-15,posY-80,15,15);
    ellipse(posX+15,posY-80,15,15);
    //布布的鼻子
    noStroke();
    strokeWeight
    fill("black");
    ellipse(posX,posY+35,30,30);
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(posX,posY+40,120,120,QUARTER_PI,HALF_PI+QUARTER_PI);
    arc(posX,posY+60,20,20,QUARTER_PI,HALF_PI+QUARTER_PI);
    //布布的耳朵
     fill("#B97D36");
    arc(posX+105,posY-80,100,200,PI+QUARTER_PI,PI+QUARTER_PI);
    arc(posX-105,posY-80,100,200,HALF_PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
    arc(posX+105,posY-100,50,100,PI+QUARTER_PI,TWO_PI);
    arc(posX-105,posY-100,50,100,PI,PI+HALF_PI+QUARTER_PI);
    
     }
    
    strokeWeight(1);

    ellipse(hitZoneX, hitZoneY, 10, 10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);

    //console.log(hitZoneDist);

    if (hitZoneDist < 10) {
        image(hitImage, hitZoneX - 100, hitZoneY - 100);

    }

    ellipse(325, 325, 10, 10);
    if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
        changeColor = true;
    } else {
        changeColor = false;
    }

}
function bgFunction() {
    currentBgImage = bgImage;
}

function bgFunction1() {
    currentBgImage = bgImage2;
}

function showHideFunction() {
    if (showHide == true) {
        showHide = false;
    } else {
        showHide = true;
    }
}