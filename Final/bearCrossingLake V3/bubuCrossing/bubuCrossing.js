var bubu;
var aligator;
var fish;
var bubuX, bubuY;
var aligatorNum = 15;
var aligatorX = [];
var aligatorY = [];
var vy = [];
var aligatorSize = [];
var fishNum = 5;
var cNum;
var alpha, fishX, fishY;
var aimX, aimY;
var gameOver, win;



function setup() {
    createCanvas(800, 600);
    rectMode(CENTER);
    initialization();


}

function draw() {
    noStroke();

    background("orange");
    fill("green");
    rect(width * 0.5, height * 0.5, width * 0.9, height);

    fill(255);
    textSize(40);
    text("Lake Osceola", width * 0.5 - textWidth("Lake Oceola") / 2, height * 0.4);


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

        if (cNum > 0) {
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
    cNum = 0;
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
    if (!gameOver & mouseX > width * 0.05 & mouseY < width & mouseY > 0 & mouseY < height & cNum < 5) {
        fishX[cNum] = mouseX;
        fishY[cNum] = mouseY;
        aimX = mouseX;
        aimY = mouseY;
        cNum++;
    }
}

function keyPressed() {
    if ((gameOver || win) & keyCode == ENTER) {
        initialization();
    }
}
