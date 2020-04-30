//JumpObstacle prefab
class JumpObstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      //add object to existing scene
      scene.add.existing(this);
    }
    update() {
         //moving from left to right by john 4/29/2020
         this.x -= game.settings.objSpeed; 
      
         //reset position to og position by john 4/29/2020
         if(this.x <= 0 - this.width){
           this.reset(); 
        }
    }
    reset(x, y) {
        this.x = x;
        this.y = y;
    }
}