//Player prefab
class Player extends Phaser.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        //action state
        this.isSlide = false;
        this.hasDjump = true;
        this.yVel = 0;
<<<<<<< HEAD
        //jet sound
        this.sfxJet = scene.sound.add('sfx_jet');
        this.sfxJet.play();
        
=======
        this.sfxJet = new Sound(game, 'sfx_jet', 0, true);
>>>>>>> 226ac2e8a7561163eb6dbbdef89855b9efe10372
    }
    update() {
        console.log('player created')
        if(keyUP.isDown || keyW.isDown) {
            this.y += 10;
            this.sfxJet.volume(1);
        }
        else if(!keyUP.isDown && !keyW.isDown) {
            this.y -= 10;
            this.sfxJet.volume(0);
        }
    }
}