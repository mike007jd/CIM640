var centerX = 0;
var centerY = 0;

var bgColor;

var hRedColor, hGreenColor, hBlueColor,

var bgImage,bgImage2;
var bgChange, bgChange2;

var currentBgImage;

var hitZoneX=100;
var hitZoneY=100;

var ballons;

function preload(){
    bgImage = loadImage("assets/canival.jpg");
    bgImage2= loadImage("assets/party.jpg");
    ballons = loadImage("assets/ballons.png");
}


function setup(){   
    createCanvas(400,400);
    centerX = width/2;
    centerY = height/2;
    
    bgColor = color(255,0,0);
    
    hRedColor = createSlider(0,255,0);
    hGreenColor = createSlider(0, 255, 0);
    hBlueColor = createSlider(0, 255, 0);
    
    bgChange = createButton("party");
    bgChange.position(100, 500);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("Carnival");
    bgChange2.position(0, 500);
    bgChange2.mousePressed(changeBgFunction2);

    currentBgImage = bgImage;
               
}


function draw(){
    background(bgColor);
    
    image(currentBgImage,0,0,400,400);
    
    centerX = mouseX;
    centerY = mouseY;
    fill(255);
    strokeWeight(1);
    
    //布布总脸
    fill("#B97D36");
    ellipse(posX,posY,300,290);
    
    var wiggleX = map(mouseX,0,width)
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
