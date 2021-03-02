function  spawnBlackSheep(){
    if (frameCount % 200 === 0  ){
        var blackSheep  = createSprite(displayWidth, displayHeight-100, 40,20);
        blackSheep.addImage(blackSheepImg);
        blackSheep.scale = 0.8;
        blackSheep.velocityX = -3;
        blackSheep.lifeTime = 200;
    }
}