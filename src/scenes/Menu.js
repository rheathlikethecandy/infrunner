class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        //load audio
        this.load.audio('sfx_select', './assets/boop.wav');
        this.load.audio('sfx_land', './assets/land.wav');
        this.load.audio('sfx_jump', './assets/jump.wav');
        this.load.audio('sfx_slide', './assets/slide.wav');
        this.load.audio('sfx_siren', './assets/siren.wav');
        
        this.load.image('backDrop', './assets/backDrop.png');
        this.load.image('menu', './assets/infMenu.png');
    }
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
    }
}