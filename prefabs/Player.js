//Player prefab
class Player extends Phaser.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.setScale(1);
        this.setOrigin(0, 0);

        this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNames('walkSprite',
            {
              prefix: 'walk_cycle',
              start: 1,
              end: 10,
              zeroPad: 0
            }),
            frameRate: 25,
            repeat: -1
          });

        //add object to existing scene
        scene.add.existing(this);
        //action state
        this.isSlide = false;
        this.hasDjump = true;
        this.yVel = 0;
        this.sfxJet = new Sound(game, 'sfx_jet', 0, true);
    }
    update() {
        console.log('player created')
        if(keyUP.isDown || keyW.isDown) {
            this.y += 10;
            this.sfxJet.volume(1);
        }
        else if(!keyUP.isDown && !keyW.isDown && ) {
            this.y -= 10;
            this.sfxJet.volume(0);
        }
    }
}