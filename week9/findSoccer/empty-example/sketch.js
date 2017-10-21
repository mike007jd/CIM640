var posX = 250;
var posY = 0;

var upDown = false;

function setup(){
    createCanvas(500,500);

}
function draw(){
    background(255);
    ellipse(posX,posY,50,50);
    //posY ++;
    //console.log(posY);
    
    if(posY <= 25){
        upDown = false;
    }
    
    if(posY >= 475){
        upDown = true;
    }
    
    if(upDown == true){
        
        posY = posY - 5;
    }
    
    if(upDown == false){
        
        posY = posY + 5;
    }
}


