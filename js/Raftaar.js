class Raftaar{
    constructor(){
        this.raftaarSprite =  createSprite(displayWidth/4,displayHeight-50, 10,30);
        this.raftaarSprite.addImage(raftaarImg);
        this.raftaarSprite.scale = 0.6;
    }

    jump(){
        if(keyDown("space")){
            this.raftaarSprite.velocityY = -3;
            //this.raftaarSprite.velocityX = 2;            

        }
        this.raftaarSprite.velocityY = this.raftaarSprite.velocityY + 0.05;
    }
}