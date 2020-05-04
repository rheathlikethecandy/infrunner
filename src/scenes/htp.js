class HTP extends Phaser.Scene {
    
    constructor() {
        var startKey = Phaser.Input.Keyboard.Key;
        super("howScene");
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image('htpBackground','Neon_Runner_-_How_to_Play.png');
        this.load.image('howButton','howtoplaybutton.png');
        this.load.image('menuButton','menubutton.png');
    }
    
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //background
        this.htpBack = this.add.tileSprite(0,0,900,600,'htpBackground').setOrigin(0,0);


        // //creating a menu button to move to the play scene
        this.mButton = this.add.image(centerX,centerY+210,'menuButton').setOrigin(0.5,0.5);
        this.mButton.setInteractive({
            useHandCursor: true,
        });
         // start menu scene when menu button is being pressed/clicked
        this.mButton.on('pointerdown', (pointer, gameObject, event) => {
            this.scene.start("menuScene");
           
        });
       
    }
      
    update() {
     
     
    }
}