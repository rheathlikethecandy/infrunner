class End extends Phaser.Scene {
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("endScene");
    }
    init() {
        // input tracking is handled by the Scene
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.startKey.isDown = false;
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