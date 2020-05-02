class Testing extends Phaser.Scene {
    constructor() {
        super("testingScene");
    }
    preload() {
        // //load images/tile sprites
        // this.load.image('backDrop', './assets/backDrop.png');
        // // load spritesheet
        // this.load.spritesheet('dieAnim', './assets/deathAnim.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.path = "assets/";
        this.load.image('background_Cloud','skyline-endlessrunner_cloud.png');
        this.load.image('background_groundTile','runline-endlessrunner.png');
        this.load.image('background_buildings','cityline-endlessrunner_backgroundBuildings.png');
        this.load.spritesheet('spriteSheet','runnerspritesheetfitted.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 9});
        this.load.audio('sfx_jet','jet.wav');
        this.load.audio('sfx_siren','siren.wav');
        this.load.audio('sfx_slide','slide.wav');
        this.load.audio('sfx_boop','boop.wav');

    }
   create(){
        //create scrolling tile
        this.backgroundCloud = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_Cloud').setOrigin(0,0);
        //this.backgroundCloud.depth = 4
       
        //creat background building tiles
        this.backgroundBuidling  = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_buildings').setOrigin(0,0);
        //ground tile
        this.backgroundGround = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_groundTile').setOrigin(0,0);

        //creata player obj

        this.playerObj = new Player(this,game.config.width/3,game.config.height/3,'spriteSheet',0).setOrigin(0.5,0.5).setScale(0.5);
        //this.runing = this.add.sprite(game.config.width/2,game.config.height/2,'spriteSheet',0).setOrigin(0.5,0.5).setScale(0.5);
        
        //  //animation config
         this.anims.create(
            {
                key: 'run',
                frames: this.anims.generateFrameNumbers('spriteSheet',{start: 0, end: 9, first: 0}),
                frameRate: 10,
                repeat: -1,
            }
        );
        
        this.playerObj.play('run');
   }
   update(){
    
    this.backgroundCloud.tilePositionX += 1;
    
    this.backgroundBuidling.tilePositionX += 2;
    
    
   }
   
  
}