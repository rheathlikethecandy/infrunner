//Spaceship prefab
class Building extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);

      this.setScale(1);
      this.setOrigin(0, 0);

      phaserSprite.scene.physics.world.enable(this);
      this.body.allowGravity = false;
      this.body.setVelocityX(-50);
      //this.body.setSize(**INSERT RES OF BUILDING PNG**);

      //add object to existing scene
      phaserSprite.scene.add.existing(this);
    }
}