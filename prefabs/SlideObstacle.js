//SlideObstacle prefab
class SlideObstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      //add object to existing scene
      scene.add.existing(this);
    }
    update() {
    }
    reset(x, y) {
        this.x = x;
        this.y = y;
    }
}