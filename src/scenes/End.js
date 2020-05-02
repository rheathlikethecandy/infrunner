class End extends Phaser.Scene {
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("endScene");
    }
<<<<<<< HEAD
  
=======
    init() {
        // input tracking is handled by the Scene
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.startKey.isDown = false;
    }
>>>>>>> 432716a22ffb527d16941e6723dc34c9d7b23067
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