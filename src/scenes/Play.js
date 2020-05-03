var obstacles;
var buildings;
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        //load images/tile sprites
        this.load.path = "assets/";
        this.load.image('background_Cloud','linedbackdrop.png');
        this.load.image('background_groundTile','runline-endlessrunner.png');
        this.load.image('background_buildings','cityline-endlessrunner_backgroundBuildings.png');
        this.load.spritesheet('spriteSheet','runnerspritesheetfitted.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 9});
        this.load.audio('sfx_jet','jet.wav');
        this.load.audio('sfx_siren','siren.wav');
        this.load.audio('sfx_boop','boop.wav');

    }
    
    create() {
        //create scrolling tile
        this.backgroundCloud = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_Cloud').setOrigin(0,0);
        //creat background building tile
        this.backgroundBuilding  = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_buildings').setOrigin(0,0);
        //ground tile
        this.backgroundGround = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_groundTile').setOrigin(0,0);
        //player
        this.player = new Player(this, 0, 0, 'spriteSheet');
        //define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

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

        //game over flag
        this.gameOver = false;

        game.anims.create({
            key: 'run',
            frameRate: 3,
            repeat: -1,
            frames: this.game.anims.generateFrameNumbers('spriteSheet',
            {
              start: 1,
              end: 10
            }),
        });

        this.player.play('run');
        
        this.physics.add.collider(this.player, this.buildings);
        this.physics.add.overlap(this.player, this.obstacles, this.onHit, null, this);

        /*//play run animation
        this.player.play('run');   
        text = game.add.text(game.world.centerX, game.world.centerY, 'Score: 0', {
            font: "64px Arial", fill: "#ffffff", align: "center" });
        text.anchor.setTo(0.5, 0.5);
        game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);*/

        this.timer = this.time.addEvent({
            delay: 2500,
            callback: this.addWorld,
            callbackScope: this,
            loop: true
        });
    }


    update() {
        //create a scrolling background
        this.backgroundCloud.tilePositionX += 1;
        this.backgroundBuilding.tilePositionX += 3;
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