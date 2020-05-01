//Player prefab
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        //action state
        this.isSlide = false;
        this.hasDjump = true;
        this.yVel = 0;
        this.sfxJet = new Phaser.Sound(game, 'sfx_jet', 1, true);
        this.sfxJet.play();
        
    }
    update() {
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