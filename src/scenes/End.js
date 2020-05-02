class End extends Phaser.Scene {
    constructor() {
        super({key: "endScene"});
    }
  
    preload() {
        //load audio
        this.load.audio('sfx_caught', './assets/endBlip.wav');
    }
    create() {
        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2 - 180,
                this.sys.canvas.height / 2 - 80,
                "pixelFont",
                "Caught",
                40
            )
        );
        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2 - 180,
                this.sys.canvas.height / 2 - 10,
                "pixelFont",
                "Press SPACE to restart",
                30
            )
        );
    }

    update() {
        if (this.startKey.isDown) {
            this.scene.start("playScene");
        }
    }
}