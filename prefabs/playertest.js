class PlayerT extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame);

        //add object to existing scene
        scene.add.existing(this);
        
        
      
      
    }

    update(){
        if(keyUP.isDown&& this.y!= 0){
            this.alpha = 0;
            // this.anims.play('jetPack');
            this.y -=4;
            

        }
        else if(!keyUP.isDown&&this.y < game.config.height*2/3){
            this.y += 4;
            // this.anims.play('jetPack');
            this.alpha = 0;
        } else{
            this.alpha = 1;
        }
      
    }
  
      

    
    
    reset(){}

}