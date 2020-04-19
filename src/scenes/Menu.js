class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        //load audio
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.audio('sfx_explosion', './assets/chomp.wav');
        this.load.audio('sfx_rocket', './assets/squirt.wav');
        //load background
        this.load.image('background', './assets/background.png');
    }
    create() {
      //menu display
      let menuConfig = {
          fontFamily: 'Impact',
          fontSize: '28px',
          backgroundColor: '#ff1c1c',
          color: '#fff700',
          align: 'right',
          padding: {
              top: 15,
              bottom: 15,
              left: 15,
              right: 15
          },
          fixedwidth: 0,
      }
      this.background = this.add.tileSprite(0,0,640,480, 'background').setOrigin(0,0);
      //show menu text
      let centerX = game.config.width/2;
      let centerY = game.config.height/2;
      let textSpacer = 64;
      this.add.text(centerX, centerY - textSpacer, 'HOTDOG HELL', menuConfig).setOrigin(0.5);
      this.add.text(centerX, centerY, 'P1 use ←→ to move & (↑) to fire\nP2 use A & D to move & W to fire', menuConfig).setOrigin(0.5);
      this.add.text(centerX, centerY + textSpacer, 'Press ← for EASY or → for HARD', menuConfig).setOrigin(0.5);
      
      //define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          //easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          //hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}