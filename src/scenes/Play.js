class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        //load images/tile sprites
        this.load.path = "assets/";
        tthis.load.path = "assets/";
        this.load.image('background_Cloud','skyline-endlessrunner_cloud.png');
        this.load.image('background_groundTile','runline-endlessrunner.png');
        this.load.image('background_buildings','cityline-endlessrunner_backgroundBuildings.png');
        this.load.spritesheet('spriteSheet','runnerspritesheetfitted.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 9});
        this.load.audio('sfx_jet','jet.wav');
        this.load.audio('sfx_siren','siren.wav');
        this.load.audio('sfx_slide','slide.wav');
        this.load.audio('sfx_boop','boop.wav');

    }
    
    create() {
         //create scrolling tile
         this.backgroundCloud = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_Cloud').setOrigin(0,0);
         //this.backgroundCloud.depth = 4
        
         //creat background building tiles
         this.backgroundBuidling  = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_buildings').setOrigin(0,0);
         //ground tile
         this.backgroundGround = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_groundTile').setOrigin(0,0);
 
         //creata player obj
 
         this.player = new Player(this,game.config.width/3,game.config.height/3,'spriteSheet',0).setOrigin(0.5,0.5).setScale(0.5);
         //this.runing = this.add.sprite(game.config.width/2,game.config.height/2,'spriteSheet',0).setOrigin(0.5,0.5).setScale(0.5);
         
        
         
        this.player.setGravityY(50);
        //add death pit at bottom
        //this.pit = new Pit();
        // add buildings (x3)
        this.build1 = new Building(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        this.build2 = new Building(this, 0, 0, 'building', 0, 20).setOrigin(0,0);
        this.build3 = new Building(this, 0, 0, 'building', 0, 10).setOrigin(0,0);
        var buildings = [
            this.build1,
            this.build2,
            this.build3
        ]
        // add jumps (x3)
        this.jump1 = new JumpObstacle(this, 0, 0, 'jumpObs', 0, 30).setOrigin(0,0);
        this.jump2 = new JumpObstacle(this, 0, 0, 'jumpObs', 0, 20).setOrigin(0,0);
        this.jump3 = new JumpObstacle(this, 0, 0, 'jumpObs', 0, 10).setOrigin(0,0);
        var jumps = [
            this.jump1,
            this.jump2,
            this.jump3
        ]
        
        //define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        // animation config
        this.anims.create({
            key: 'jet',
            frames: this.anims.generateFrameNumbers('jetAnim', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('dieAnim', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
         this.anims.create(
            {
                key: 'run',
                frames: this.anims.generateFrameNumbers('spriteSheet',{start: 0, end: 9, first: 0}),
                frameRate: 10,
                repeat: -1,
            }
        );

        //game over flag
        this.gameOver = false;
        //vector variable
        this.ACCELERATION = 1500;
        this.MAX_Y_VEL = 5000;
        this.JUMP_VELOCITY = -700;

        //create a physics collider  with buildings
        this.physics.add.collider(this.player, this.buildings);

         //play run animation
        this.player.play('run');   
    }


    update() {
        //create a scrolling background
        this.backDrop.tilePositionX -=4;

        //check key input for restart
        if (this.gameOver) {
            this.scene.start("endScene");
        }
        if(!this.gameOver) {
            this.backDrop.tilePositionX -= 4;
        }
        if(!this.gameOver) {
            //update rocket
            this.player.update();
            for(var i = 0; i < 3; i++) {
                this.jumps[i].update();
                this.buildings[i].update();
            }
            //check collision
            for(var j = 0; j < 3; j++) {
                if(this.checkCollision(this.player, jumps[j])) {
                    this.gameOver = true;
                }
                if(this.checkCollision(this.player, pit)) {
                    this.gameOver = true;
                }
            }
        }
        for(var x = 0; x < 3; x++) {
            
            if(this.buildings[x] < 0) {
                reset(this.jumps[x], this.buildings[x]);
            }
        }
    }
    checkCollision(player, collide) {
        //simple AABB checking
        if (player.x < collide.x + collide.width && 
            player.x + player.width > collide.x && 
            player.y < collide.y + collide.height &&
            player.height + player.y > collide. y) {
                return true;
        } else {
            return false;
        }
    }
    reset(jumpObj, building) {
        building.x = 640;
        jumpObj.x = 640 + (Math.random() * 50);
        var height = 50 + (Math.random() * 300);
        building.y = height;
        jumpObj.y = height;
    }
}