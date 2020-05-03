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
        this.load.image('building','building.png');
        this.load.image('jumpObs','neonobstacle.png');
        this.load.spritesheet('spriteSheet','runnerspritesheetfitted.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 9});
        this.load.spritesheet('jetSprite','jetpackspritesheet.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 1});

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

        /*this.obstacles = this.physics.add.group();
        this.buildings = this.physics.add.staticGroup();*/
        this.building1 = new Building(this, 0, 200, 'building', 1);
        this.building2 = new Building(this, 500, 300, 'building', 1);
        this.building3 = new Building(this, 1000, 100, 'building', 1);
        this.buildings = [
            this.building1,
            this.building2,
            this.building3
        ];

        this.box1 = new JumpObstacle(this, 100, 200, 'jumpObs', 1);
        this.box2 = new JumpObstacle(this, 575, 300, 'jumpObs', 1);
        this.box3 = new JumpObstacle(this, 1150, 100, 'jumpObs', 1);
        this.boxes = [
            this.box1,
            this.box2,
            this.box3
        ]

        // variables
        this.timer = Phaser.Time.TimerEvent;
        this.score = 0;
        this.scoreText = this.add.text(0, 0, '0', {
            fontFamily: 'Arial Black',
            fontSize: 20,
            color: '#fff',
            stroke: '#ff6ec7',
            strokeThickness: 4,
        });

        //game over flag
        this.gameOver = false;

        game.anims.create({
            key: 'run',
            frameRate: 3,
            repeat: -1,
            frames: this.game.anims.generateFrameNumbers('spriteSheet',
            {
              start: 0,
              end: 9
            }),
        });

        this.player.play('run');
        
        this.physics.add.collider(this.player, this.buildings);
        this.physics.add.overlap(this.player, this.obstacles, this.onHit, null, this);

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
        this.updateScore();
        for(var i = 0; i < 2; i++) {
            var randY = (Math.random() * 225) + 50;
            if((this.buildings[i].x + 468) < 0) {
                this.buildings[i].setX(900);
                this.buildings[i].setY(randY);
                this.boxes[i].setY(randY);
                this.boxes[i].setX(900 + (Math.random() * 200));
            }
        }
    }
    onHit() {
        this.player.setDead(true);
    }
    updateScore() {
        this.score++;
        this.scoreText.setText("Score: " + Math.floor(this.score / 100));
    }
}