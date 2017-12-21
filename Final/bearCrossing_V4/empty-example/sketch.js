var bubu;
var aligator;
var fish;
var river;
var riverAnimation;
var bubuAnimation;
var bubuX, bubuY;
var aligatorNum = 15;
var aligatorX = [];
var aligatorY = [];
var vy = [];
var aligatorSize = [];
var fishNum = 5;
var fNum;
var alpha, fishX, fishY;
var aimX, aimY;
var gameOver, win;


function preload(){
   riverAnimation = loadAnimation("assets/river1.png","assets/river2.png","assets/river3.png","assets/river4.png");
    bubuAnimation = loadAnimation("assets/bubu1.png","assets/bubu1.png","assets/bubu2.png","assets/bubu3.png","assets/bubu4.png","assets/bubu5.png");
}
function setup() {
    createCanvas(800, 600);
    rectMode(CENTER);
    initialization();
    
    //could not move sprites, save for later
    
    bubu = createSprite(bubuX,bubuY); bubu.addAnimation("swim",bubuAnimation);
    
    river= createSprite(width/2,height/2);
    river.addAnimation("normal",riverAnimation);

}

function draw() {
    noStroke();

    background("orange");
    fill("green");
    rect(width * 0.5, height/2, width * 0.9, height);

    fill(255);
    textSize(40);
    text("Lake Osceola", width /2 - textWidth("Lake Oceola") / 2, height * 0.4);
    
    textSize(15);
    text("Help bubu across the river to the right orange shore",width /2 - textWidth("Help bubu across the river to the right orange shore")/2 ,40);
    text("Click to drop the triangle fish to attract bubu",width /2 - textWidth("Click to drop the triangle fish to attract bubu")/2 ,60);
    text("Avoid the dangerous white circle",width /2 - textWidth("Avoid the dangerous white circle")/2 ,80);

    if (gameOver || win) {
        for (var i = 0; i < aligatorNum; i++) {
            noStroke();
            fill(255);
            ellipse(aligatorX[i], aligatorY[i], aligatorSize[i] * 2, aligatorSize[i] * 2);
        }

        fill("brown");
        rect(bubuX, bubuY, 30, 30);

        fill(255);
        textSize(25);
        if (gameOver) {
            text("Bubu dead!", width * 0.5 - textWidth("Bubu dead!") / 2, height / 2);
            text("PRESS ENTER TO Revive", width * 0.5 - textWidth("PRESS ENTER TO Revive") / 2, height * 0.6);
        }

        if (win) {
            text("You save Bubu!Hero!", width * 0.5 - textWidth("You save Bubu!Hero!") / 2, height * 0.5);
            text("PRESS ENTER TO DO IT AGAIN", width * 0.5 - textWidth("PRESS ENTER TO DO IT AGAIN") / 2, height * 0.6);
        }
    } else {
        for (var i = 0; i < aligatorNum; i++) {
            aligatorY[i] += vy[i];
            noStroke();
            fill(255);
            ellipse(aligatorX[i], aligatorY[i], aligatorSize[i] * 2, aligatorSize[i] * 2);

            if (aligatorY[i] - aligatorSize[i] > height) {
                aligatorY[i] = -aligatorSize[i];
                aligatorX[i] = random(width * 0.05 + aligatorSize[i], width * 0.95 - aligatorSize[i]);
            }
            if (aligatorY[i] + aligatorSize[i] < 0) {
                aligatorY[i] = height + aligatorSize[i];
                aligatorX[i] = random(width * 0.05 + aligatorSize[i], width * 0.95 - aligatorSize[i]);
            }
            if (dist(bubuX, bubuY, aligatorX[i], aligatorY[i]) < 15 + aligatorSize[i] & !gameOver) gameOver = true;
        }

        for (i = 0; i < fishNum; i++) {
            fill(200, 0, 0, alpha[i]);
            noStroke();
            triangle(fishX[i], fishY[i] - 14, fishX[i] - 30 / 2, fishY[i] + 14, fishX[i] + 30 / 2, fishY[i] + 14);
            if (dist(bubuX, bubuY, fishX[i], fishY[i]) < 30) alpha[i] = 0;
        }

        fill("brown");
        rect(bubuX, bubuY, 30, 30);

        if (fNum > 0) {
            bubuX += (aimX - bubuX) / 30;
            bubuY += (aimY - bubuY) / 30;
        }
        if (bubuX > width * 0.95 + 30 / 2 & !win) win = true;
    }
    drawSprites();
}

function initialization() {
    bubuX = width * 0.025;
    bubuY = random(30, height - 30);
    fNum = 0;
    gameOver = false;
    win = false;
    alpha = [];
    fishX = [];
    fishY = [];
    for (var i = 0; i < aligatorNum; i++) {
        aligatorSize[i] = random(10, 15);
        aligatorX[i] = random(width * 0.05 + aligatorSize[i], width * 0.95 - aligatorSize[i]);
        aligatorY[i] = height * random(-0.2, 1.2);
        if (random(1) < 0.5) {
            vy[i] = random(0.8, 2)
        } else {
            vy[i] = random(-2, -0.8);
        }
    }
    for (i = 0; i < fishNum; i++) {
        alpha[i] = 255;
    }
}

function mousePressed() {
    if (!gameOver & mouseX > width * 0.05 & mouseY < width & mouseY > 0 & mouseY < height & fNum < 5) {
        fishX[fNum] = mouseX;
        fishY[fNum] = mouseY;
        aimX = mouseX;
        aimY = mouseY;
        fNum++;
    }
}

function keyPressed() {
    if ((gameOver || win) & keyCode == ENTER) {
        initialization();
    }
}
