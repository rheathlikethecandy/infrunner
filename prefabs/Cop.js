//cop prefab
class Cop extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      //add object to existing scene
      this.setScale(0.5);
      this.setOrigin(0,0);
  
      this.scene.physics.world.enable(this);
      this.body.allowGravity = false;
      this.body.setVelocityX(-100);
      this.body.setSize(this.width, this.height);
  
      scene.physics.add.existing(this);
    }
  }