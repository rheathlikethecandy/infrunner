class End extends Phaser.Scene {
    private startKey: Phaser.Input.Keyboard.Key;
    private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

    constructor() {
        super({key: "endScene"});
    }
    init(): void {
        // input tracking is handled by the Scene
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE;
        );
        this.startKey.isDown = false;
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