class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }
    preload() {
        //load audio
        this.load.audio('sfx_caught', './assets/endBlip.wav');
    }
    create() {
    }

    update() {
    }
}