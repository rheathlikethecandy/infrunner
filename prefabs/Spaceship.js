//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
      //add object to existing scene
      scene.add.existing(this);
      //stores pointValue
      this.points = pointValue;
    }
    update() {
        //move spaceship left
        this.x -= game.settings.spaceshipSpeed * Math.random((1.5 - 0.5) + (0.5));
        //wrap from left to right
        if(this.x <= 0-this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}