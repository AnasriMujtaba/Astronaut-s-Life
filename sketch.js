var astronaut,bathImg;
var brushImg,drinkImg;
var eatImg,gymImg;
var airship;
var moveImg;
var sleepImg;


function preload(){
  bath=loadAnimation("images/bath1.png","images/bath2.png");
brushImg=loadAnimation("images/brush.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
airship=loadImage("images/iss.png");
move=loadAnimation("images/move.png");
move1=loadAnimation("images/move1.png");
sleep=loadAnimation("images/sleep.png");
}

function setup() {
 
createEdgeSprites();

  createCanvas(400, 400);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(airship);

if(keyDown("Up_ARROW")){
  astronaut.addAnimation("brushing",brushImg)
astronaut.changeAnimation("brushing",brushImg);
astronaut.scale=0.1
astronaut.y=350;
}


if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("Gmying",gym);
astronaut.changeAnimation("Gmying",gym);
astronaut.scale=0.1
astronaut.y=350;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
astronaut.changeAnimation("eating",eat);
astronaut.scale=0.1
astronaut.y=350;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("drinking",drink);
astronaut.changeAnimation("drinking",drink);
astronaut.scale=0.1
astronaut.y=350;
}

if(keyDown("I")){
  astronaut.x=astronaut.x-2;
  astronaut.addAnimation("moving_left",move);
astronaut.changeAnimation("moving_left",move);
}

if(keyDown("m")){
  astronaut.x=astronaut.x+2;
  astronaut.addAnimation("moving_right",move1);
astronaut.changeAnimation("moving_right",move1);
}
textSize(20);
fill("yellow");
text("Instructions:-",20,20);

textSize(20);
fill("yellow");
text("Up Arrow = brushing ",20,40);

textSize(20);
fill("yellow");
text("Down Arrow = gyming ",20,60);

textSize(20);
fill("yellow");
text("right Arrow = eating ",20,80);

textSize(20);
fill("yellow");
text("left Arrow = drinking ",20,100);

textSize(20);
fill("yellow");
text("l = moving left ",20,120);

textSize(20);
fill("yellow");
text("m = moving right ",20,140);

  drawSprites();

}