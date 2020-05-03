//Spaceship prefab
class Building extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);

      
      phaserSprite.scene.physics.world.enable(this);
      this.body.allowGravity = false;
      this.body.setVelocityX(-50);
      //this.body.setSize(**INSERT RES OF BUILDING PNG**);

      //add object to existing scene
      phaserSprite.scene.add.existing(this);
    }
    update(){

    }
    reset(){
        
    }
}