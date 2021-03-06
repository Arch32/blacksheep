function  spawnBlackSheep(){
    if (frameCount % 300 === 0  ){
        var blackSheep  = createSprite(displayWidth, displayHeight-100, 40,20);
        blackSheep.addImage(blackSheepImg);
        blackSheep.scale = 0.8;
        blackSheep.velocityX = -4;
        blackSheep.lifeTime = 200;
        blackSheepsGroup.add(blackSheep);
        count = count+1;
    }
}

function shootTheSheep(){
    console.log("*************");
    var bomb = createSprite(displayWidth/4+50,displayHeight-75, 10,10);
    bomb.y = raftaar.raftaarSprite.y;
    bomb.velocityX = 3;  
    bomb.velocityY = random(0,5); 
    console.log(bomb.velocityY);
    bombsGroup.add(bomb); 
}

function destroySheep(){
    if(count > 0){
        for(var i=0; i<count; i++){
          //console.log(blackSheepsGroup.get(i));
          if(blackSheepsGroup.get(i) !== undefined  ){
            if(bombsGroup.isTouching(blackSheepsGroup.get(i))){
              blackSheepsGroup.get(i).destroy();
              bombsGroup.destroyEach();             
            }
          }         
        }
      }
  
}