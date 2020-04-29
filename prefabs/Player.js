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
        this.sfxJump = scene.sound.add('sfx_jump'); //add landing sfx
        this.sfxLand = scene.sound.add('sfx_land'); //add landing sfx
        this.sfxSlide = scene.sound.add('sfx_slide'); //add landing sfx
    }
    update() {
        if(keyUP.isDown || keyW.isDown) {
            yVel = 50;
            this.sfxJump.play();
        }
        if(keyDOWN.isDown || keyS.isDown) {
            this.isSlide = true;
            this.sfxSlide.play();
        }
        if(yVel > 0) {
            yVel--;
        }
        this.y = this.y + this.yVel;
    }
}