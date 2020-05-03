class Menu extends Phaser.Scene {
    
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("menuScene");
    }

    preload() {
        //load audio
        this.load.path = "./assets/";
        this.load.audio('sfx_select', 'boop.wav');
        this.load.audio('sfx_jet', 'jet.wav');
        this.load.audio('sfx_siren', 'siren.wav');
        
        // this.load.image('backDrop', './assets/backDrop.png');
        // //image for menue background **PLACEHOLDER FOR NOW
        // this.load.image('menu', './assets/infMenu.png');
    }
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //place holder title
        let menuConfig= {
            frontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor:'#1F46EB',
            colo:'#FFFFFF',
            align:'right',
            padding:{
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }

        //creating a menu button to move to the play scene
        this.menuButton = this.add.text(centerX,centerY,'InfRunner-PlaceHolderName',
                                        menuConfig).setOrigin(0.5);
        this.menuButton.setInteractive({
            useHandCursor: true,
        });
      
       
    }
      
    update() {
          // start play scene when menu button is being pressed/clicked
          this.input.on('gameobjectdown', (pointer, gameObject, event) => {
            //this.scene.start("testingScene");
            this.scene.start("playScene");
         });
    }
}