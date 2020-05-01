//Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        //action state
        this.isSlide = false;
        this.hasDjump = true;
        this.yVel = 0;
        this.sfxJump = scene.sound.add('sfx_jet'); //add landing sfx
    }
    update() {
        if(keyUP.isDown || keyW.isDown) {
            this.y += 10;
            this.sfxJet.play();
        }
    }
}