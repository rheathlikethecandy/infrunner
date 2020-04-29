//Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      //add object to existing scene
      scene.add.existing(this);
      //action state
      this.isJump = false;
      this.isSlide = false;

      this.sfxRocket = scene.sound.add('sfx_rocket'); //add rocket sfx
    }
    update() {
        if(keyUP.isDown || keyW.isDown) {
            this.isJump = true;
        }
        if(keyDOWN.isDown || keyS.isDown) {
            this.isSlide = true;
        }
    }
}