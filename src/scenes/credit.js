class Credit extends Phaser.Scene {
    
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("creditScene");
    }

    preload() {
        //load audio
        this.load.path = "./assets/";
        this.load.image('creditBackground','Neon_Runner_-_Credits_.png');
        this.load.image('menuButton','menubutton.png');
        
    }
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //background
        this.creditBack = this.add.tileSprite(0,0,900,600,'creditBackground').setOrigin(0,0);


        // //creating a menu button to move to the play scene
        this.mButton = this.add.image(centerX-15,centerY+200,'menuButton').setOrigin(0.5,0.5);
        this.mButton.setInteractive({
            useHandCursor: true,
        });
        // start play scene when menu button is being pressed/clicked
        this.mButton.on('pointerdown', (pointer, gameObject, event) => {
            this.scene.start("menuScene");
           // this.scene.start("playScene");
        });
       
    }
      
    update() {
        
    }
}