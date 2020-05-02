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
        this.load.image('background_Cloud','linedbackdrop.png');
        this.load.image('background_groundTile','runline-endlessrunner.png');
        this.load.image('background_buildings','cityline-endlessrunner_backgroundBuildings.png');
        this.load.image('buildingObst','building.png');
        this.load.image('jumpObs','neonobstacle.png');
        this.load.spritesheet('spriteSheet','runnerspritesheetfitted.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 9});
        this.load.spritesheet('jetpackSpriteSheet','jetpackspritesheet.png',{frameWidth: 148, frameHeight: 200, startFrame: 0, endFrame: 1});
        this.load.audio('sfx_jet','jet.wav');
        this.load.audio('sfx_siren','siren.wav');
        this.load.audio('sfx_slide','slide.wav');
        this.load.audio('sfx_boop','boop.wav');

    }
   create(){
        //define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.build = new Building(this,400,0,'jumpObs',0).setOrigin(0,0);
        //create scrolling tile
        this.backgroundCloud = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_Cloud').setOrigin(0,0);
        //this.backgroundCloud.depth = 4
       
        //creat background building tiles
        this.backgroundBuidling  = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_buildings').setOrigin(0,0);
        //ground tile
        this.backgroundGround = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_groundTile').setOrigin(0,0);

        //creata player obj

        this.playerObj = new PlayerT(this,game.config.width/4,game.config.height*2/3,'spriteSheet',0).setOrigin(0.5,0.5).setScale(0.5);
        this.playerObjjp = new Playerjp(this,game.config.width/4,game.config.height*2/3,'jetpackSpriteSheet',0).setOrigin(0.5,0.5).setScale(0.5);
        
        //create building obstacle
       
        
        //  //animation config
         this.anims.create(
            {
                key: 'run',
                frames: this.anims.generateFrameNumbers('spriteSheet',{start: 0, end: 9, first: 0}),
                frameRate: 10,
                repeat: -1,
            }
        );
        this.anims.create( {
            key: 'jetPack',
            frames: this.anims.generateFrameNumbers('jetpackSpriteSheet',{start: 0, end: 1, first: 0}),
            frameRate: 10,
            repeat: -1,
        }
    );
    this.playerObj.anims.play('run');
    this.playerObjjp.anims.play('jetPack');

    this.gameoverFlag = false;
     
   }
   update(){
    if(this.gameoverFlag == true){
        this.scene.start('endScene');
    }

    this.backgroundCloud.tilePositionX += 1;
    
    this.backgroundBuidling.tilePositionX += 2;   
    
    //player obj
    this.playerObj.update();
    this.playerObjjp.update();
   
   }

   checkCollision(hitbox,obstacle){
        //simple aabb checking
        if(hitbox.x < obstacle.x+ obstacle.width&&
            hitbox.x + hitbox.width>obstacle.x&&
            hitbox.y <obstacle.y+obstacle.height&&
            hitbox.height+hitbox.y >obstacle.y){
                return true;
        }else{
            return false;
        }

    }
  
  
}