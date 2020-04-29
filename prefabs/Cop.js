//Spaceship prefab
class Cop extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      //add object to existing scene
      scene.add.existing(this);
      this.up = false;
      this.out = false;
    }
    update() {
        if(this.out == true && this.x < 50) {
            this.x++;
        }
        else if(this.out == false && this.x > 0) {
            this.x--;
        }
        //cop car bob
        if(this.up == false) {
            this.y--;
        }
        if(this.up == true) {
            this.y++;
        }
        if(this.y > 210) {
            this.up = true;
        }
        if(this.y < 190) {
            this.up = false;
        }
    }
    reset() {
        this.x = game.config.width;
    }
}