//Spaceship prefab
class Building extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    this.setScale(0.5, 0.5);
    this.setOrigin(0, 0);
    this.scene.physics.world.enable(this);
    this.body.allowGravity = false;
    this.body.setVelocityX(-100);
    this.body.setSize(934, 607);
    this.body.setImmovable();
//add object 
scene.add.existing(this);
    //add object to existing scene
    scene.physics.add.existing(this);
  }
}