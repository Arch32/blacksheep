var raftaar, invisibleGround;
var blackSheepImg, raftaarImg;
var bombsGroup, blackSheepsGroup;
var score = 0;
var count = 0;

function preload(){
  raftaarImg =  loadImage("images/ninja.gif");
  blackSheepImg = loadImage("images/blacksheeps.gif");
}

function setup(){
  createCanvas(displayWidth-20, displayHeight-20);
  invisibleGround =  createSprite(displayWidth/2, displayHeight-20,displayWidth,20);
  invisibleGround.visible = false;
  raftaar = new Raftaar();
  bombsGroup = new Group();
  blackSheepsGroup = new Group();
}


function draw(){
  background(255);
  raftaar.jump();
  spawnBlackSheep();
  raftaar.raftaarSprite.collide(invisibleGround);
  destroySheep();
  
     

  
 
  drawSprites();
}
  
function keyPressed(){
  if(keyCode === 66){
    shootTheSheep();
  }
}
