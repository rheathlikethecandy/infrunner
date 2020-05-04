class End extends Phaser.Scene {
    constructor(scoreVar) {
        var restartKey = Phaser.Input.Keyboard.Key;
        super("endScene");
    }
    init(data){
        this.score = data;
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('endBackground', 'neonrunner-gameover-drawn-ui.png');
        this.load.image('menuButton','menubutton.png');    
        this.load.image('restartButton','restartbutton.png');
    }
    create() {
        this.endM = this.sound.add('bgm_3', {volume: 0.1});
        this.endM.play();
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
        // start play scene when restart button is being pressed/clicked
        this.eButton.on('pointerdown', (pointer, gameObject, event) => {
            this.endM.volume = 0;
            this.scene.start("playScene");
        });
          // start menu scene when menu button is being pressed/clicked
        this.mButton.on('pointerdown', (pointer, gameObject, event) => {
            this.endM.volume = 0;
            this.scene.start("menuScene");
        });
        this.scoreDisplay = this.add.text(300, 260, '0', {
            fontFamily: 'Arial Black',
            fontSize: 40,
            color: '#ff6ec7',
            stroke: '#000000',
            strokeThickness: 4,
        });
        this.scoreDisplay.setText("" + this.score);
        console.log(this.score);
    }
      
    update() {
          
    }
}