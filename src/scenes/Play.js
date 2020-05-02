var obstacles;
var buildings;
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
        this.load.audio('sfx_boop','boop.wav');

    }
    
    create() {
<<<<<<< HEAD
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
=======
        //place tile sprite
        this.backDrop = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
>>>>>>> 432716a22ffb527d16941e6723dc34c9d7b23067

        this.obstacles = this.physics.add.group();
        this.buildings = this.physics.add.staticGroup();
        
        // variables
        this.timer = Phaser.Time.TimerEvent;
        this.score = 0;
        this.scoreText = this.add.text(0, 0, '0', {
            fontFamily: 'Arial Black',
            fontSize: 10,
            color: '#fff',
            stroke: '#da0050',
            strokeThickness: 4,
        });

        for (var i = 0; i < 2; i += 1) {
            this.buildings.create(i * 380, 590, 'building');
        }
        this.addWorld();

        this.player = new Player({
            scene: this, 
            x: 20, 
            y: 275, 
            key: "playerSprite", 
        });
<<<<<<< HEAD
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
=======
>>>>>>> 432716a22ffb527d16941e6723dc34c9d7b23067

        this.player.play('run');
        
        this.physics.add.collider(this.player, this.buildings);
        this.physics.add.overlap(this.player, this.obstacles, this.onHit, null, this);

<<<<<<< HEAD
         //play run animation
        this.player.play('run');   
        text = game.add.text(game.world.centerX, game.world.centerY, 'Score: 0', {
            font: "64px Arial", fill: "#ffffff", align: "center" });
        text.anchor.setTo(0.5, 0.5);
        game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
=======
        this.timer = this.time.addEvent({
            delay: 2500,
            callback: this.addWorld,
            callbackScope: this,
            loop: true
        });
>>>>>>> 432716a22ffb527d16941e6723dc34c9d7b23067
    }


    update() {
        //create a scrolling background
        this.backDrop.tilePositionX -=4;

    }
    addWorld() {

    }
    onHit() {
        this.player.setDead(true);
    }
    reset(jumpObj, building) {
        building.x = 640;
        jumpObj.x = 640 + (Math.random() * 50);
        var height = 50 + (Math.random() * 300);
        building.y = height;
        jumpObj.y = height;
    }
    updateScore() {
        this.score++;
        text.setText('Score: ' + score);
    }
}