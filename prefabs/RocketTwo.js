//Rocket prefab
class RocketTwo extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      //add object to existing scene
      scene.add.existing(this);
      //track rocket's firing status
      this.isFiring = false;

      this.sfxRocket = scene.sound.add('sfx_rocket'); //add rocket sfx
    }
    update() {
        //left/right movement
        if(!this.isFiring) {
            if(keyA.isDown && this.x >= 47) {
                this.x -= 2;
            }
            else if(keyD.isDown && this.x <= 578) {
                this.x += 2;
            }
        }
        //fire button
        if (Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  //play sfx
        }
        //if fired, move up
        if(this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        //reset on miss
        if(this.y <= 108) {
            this.reset();
        }
    }
    //reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}//test