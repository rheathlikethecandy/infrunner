class End extends Phaser.Scene {
    constructor() {
        var restartKey = Phaser.Input.Keyboard.Key;
        super("endScene");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('endBackground', 'neonrunner-gameover-drawn-ui.png');
        this.load.image('menuButton','menubutton.png');    
        this.load.image('restartButton','restartbutton.png');
    }
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //creating a menu button to move to the play scene
        this.endBack = this.add.tileSprite(0,0,game.config.width,game.config.height,'endBackground').setOrigin(0,0);
        this.eButton = this.add.image(centerX-158,centerY+183,'restartButton').setOrigin(0.5,0.5);
        this.eButton.setInteractive({
            useHandCursor: true,
        });
        this.mButton = this.add.image(centerX-158,centerY+83,'menuButton').setOrigin(0.5,0.5);
        this.mButton.setInteractive({
            useHandCursor: true,
        });
       
    }
      
    update() {
          // start play scene when restart button is being pressed/clicked
          this.eButton.on('pointerdown', (pointer, gameObject, event) => {
    
            this.scene.start("playScene");
         });
          // start menu scene when menu button is being pressed/clicked
          this.mButton.on('pointerdown', (pointer, gameObject, event) => {
            
            this.scene.start("menuScene");
         });
    }
}