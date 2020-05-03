class HTP extends Phaser.Scene {
    
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("howScene");
    }

    preload() {
        //load audio
        this.load.path = "assets/";
        this.load.audio('sfx_select', './assets/boop.wav');
        this.load.audio('sfx_jet', './assets/jet.wav');
        this.load.audio('sfx_siren', './assets/siren.wav');
        this.load.image('playButton','playbutton.png');
        this.load.image('htpBackground','Neon_Runner_-_How_to_Play.png');
        this.load.image('howButton','howtoplaybutton.png');
        this.load.image('creditButton','creditsbutton.png');
        this.load.image('menuButton','menubutton.png');
        // this.load.image('backDrop', './assets/backDrop.png');
        // //image for menue background **PLACEHOLDER FOR NOW
        // this.load.image('menu', './assets/infMenu.png');
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.startKey.isDown = false;
        
    }
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //background
        this.htpBack = this.add.tileSprite(0,0,900,600,'htpBackground').setOrigin(0,0);


        // //creating a menu button to move to the play scene
        this.mButton = this.add.image(centerX,centerY+220,'menuButton').setOrigin(0.5,0.5);
        this.mButton.setInteractive({
            useHandCursor: true,
        });
        // this.htpButton = this.add.image(centerX+215,centerY+50,'howButton').setOrigin(0.5,0.5);
        // this.htpButton.setInteractive({
        //     useHandCursor: true,
        // });
        // this.cButton = this.add.image(centerX+215,centerY+150,'creditButton').setOrigin(0.5,0.5);
        // this.cButton.setInteractive({
        //     useHandCursor: true,
        // });
      
       
    }
      
    update() {
        //   // start play scene when menu button is being pressed/clicked
          this.mButton.on('pointerdown', (pointer, gameObject, event) => {
             this.scene.start("menuScene");
            // this.scene.start("playScene");
         });
        //  this.pButton.on('gameobjectdown', (pointer, gameObject, event) => {
        //     this.scene.start("testingScene");
        //    // this.scene.start("playScene");
        // });
        // this.pButton.on('gameobjectdown', (pointer, gameObject, event) => {
        //     this.scene.start("testingScene");
        //    // this.scene.start("playScene");
        // });
        
    }
}