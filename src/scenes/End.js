class End extends Phaser.Scene {
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("endScene");
    }
  
    preload() {
        //load audio
        this.load.audio('sfx_caught', './assets/endBlip.wav');
    }
    create() {
        
    }

    update() {
        if(this.startKey.isDown) {
            this.scene.start("playScene");
        }
    }
}