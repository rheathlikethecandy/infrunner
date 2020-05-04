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
        this.load.audio('bgm_1','bgm_1.wav');
        this.load.audio('bgm_2','bgm_2.wav');
        this.load.audio('bgm_3','bgm_3.wav');
        this.load.image('playButton','playbutton.png');
        this.load.image('menuBackground','neonrunner-menu-drawn-ui.png');
        this.load.image('howButton','howtoplaybutton.png');
        this.load.image('creditButton','creditsbutton.png');
        
        // this.load.image('backDrop', './assets/backDrop.png');
        // //image for menue background **PLACEHOLDER FOR NOW
        // this.load.image('menu', './assets/infMenu.png');
   
    }
    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let loop = true;

        //background
        this.menuBack = this.add.tileSprite(0,0,900,600,'menuBackground').setOrigin(0,0);
        //play bgm
        var bgmNum = Math.floor(Math.random() * Math.floor(3));

       if(bgmNum == 0){
        this.bgm = game.sound.add('bgm_1');
        this.bgm.setLoop(loop);
        this.bgm.play();
       }else if(bgmNum == 1){
        this.bgm = game.sound.add('bgm_2');
        this.bgm.setLoop(loop);
        this.bgm.play();
       }
       else if(bgmNum == 2){
        this.bgm = game.sound.add('bgm_3');
        this.bgm.setLoop(loop);
        this.bgm.play();
       }
       

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
        this.pButton = this.add.image(centerX+215,centerY-50,'playButton').setOrigin(0.5,0.5);
        this.pButton.setInteractive({
            useHandCursor: true,
        });
        this.htpButton = this.add.image(centerX+215,centerY+50,'howButton').setOrigin(0.5,0.5);
        this.htpButton.setInteractive({
            useHandCursor: true,
        });
        this.cButton = this.add.image(centerX+215,centerY+150,'creditButton').setOrigin(0.5,0.5);
        this.cButton.setInteractive({
            useHandCursor: true,
        });
      
       
    }
      
    update() {
          // start play scene when menu button is being pressed/clicked
          this.pButton.on('pointerdown', (pointer, gameObject, event) => {
             this.scene.start("playScene");
            
            //this.scene.start("endScene");
         });
         this.cButton.on('pointerdown', (pointer, gameObject, event) => {
            this.scene.start("creditScene");
           // this.scene.start("playScene");
        });
        this.htpButton.on('pointerdown', (pointer, gameObject, event) => {
            this.scene.start("howScene");
           // this.scene.start("playScene");
        });

    }
}