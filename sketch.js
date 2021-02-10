var cat1, cat2, cat3, cat4;
var garden;
var mouse1, mouse2, mouse3, mouse4;



function preload() {
    //load the images here
cat1 = loadAnimation("images/cat1.png");
cat3 = loadAnimation("images/cat2.png", "images/cat3.png");
cat4 = loadAnimation("images/cat4.png");

garden = loadImage("images/garden.png");

mouse1 = loadAnimation("images/mouse1.png");
mouse3 = loadAnimation("images/mouse2.png", "images/mouse3.png");
mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat2 = createSprite(70,580,20,20);
    cat2.addAnimation("Tom", cat1);
    cat2.scale=0.08;

    mouse2 = createSprite(70,580,20,20);
    mouse2.addAnimation("Jerry", mouse1);
    mouse2.scale=0.08;
}

function draw() { 

    background(garden);

    if(cat1.x - mouse1.x < (cat1.width - mouse1.width/2)){
      
        cat1.velocityX = 0;

        cat1.addAnimation("lastCat", cat4);
        cat1.x = 300;
        cat1.scale = 0.3;
        cat1.changeAnimation("lastCat");

        mouse1.addAnimation("lastMouse", mouse4);
        mouse1.scale = 0.12;
        mouse1.changeAnimation("lastMouse");
    }
    //garden=createSprite(600,600);
    //garden.addImage("garden.png");

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){

  cat1.velocityX = -5;
  
  cat1.addAnimation("runningCat", cat3);
  cat1.changeAnimation("runningCat");

  mouse1.addAnimation("runningMouse", mouse3);

  mouse1.frameDelay = 20;

  mouse1.changeAnimation("runningMouse");
}

}
