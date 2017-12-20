var posX = 0;
var posY = 0;


function setup(){   
    createCanvas(500,500);
    posX = width/2;
    posY = height/2;
    
               
}


function draw(){
   
    background(255);

    
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
    
   