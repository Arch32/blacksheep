var raftaar, invisibleGround;
var blackSheepImg, raftaarImg;

function preload(){
  raftaarImg =  loadImage("images/ninja.gif");
  blackSheepImg = loadImage("images/blacksheeps.gif");
}

function setup(){
  createCanvas(displayWidth-20, displayHeight-20);
  invisibleGround =  createSprite(displayWidth/2, displayHeight-20,displayWidth,20);
  raftaar = new Raftaar();

}


function draw(){
  background(255);
  raftaar.jump();
  spawnBlackSheep();
  raftaar.raftaarSprite.collide(invisibleGround);
  drawSprites();
}
