//var obstacles;
//var buildings;
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        //load images/tile sprites
        

        this.load.image('background_Cloud','./assets/linedbackdrop.png');
        this.load.image('background_groundTile','./assets/runline-endlessrunner.png');
        this.load.image('background_buildings','./assets/cityline-endlessrunner_backgroundBuildings.png');
        this.load.image('building','./assets/building.png');
        this.load.image('jumpObs','./assets/neonobstacle.png');
        this.load.spritesheet('copSprite','./assets/copsprite.png',{frameWidth: 170, frameHeight: 166, startFrame: 0, endFrame: 1});
        this.load.spritesheet('spriteSheet','./assets/runnerspritesheetfitted.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 9});
        this.load.spritesheet('jetSprite','./assets/jetpackspritesheet.png',{frameWidth: 148.1, frameHeight: 200, startFrame: 0, endFrame: 1});

    }
    create() {
        
        this.playM = this.sound.add('bgm_2', {volume: 0.1});
        this.playM.play();
      
        this.playM.loop = true;

        //create scrolling tile
        this.backgroundCloud = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_Cloud').setOrigin(0,0);
        //creat background building tile
        this.backgroundBuilding  = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_buildings').setOrigin(0,0);
        //ground tile
        this.backgroundGround = this.add.tileSprite(0,0,game.config.width,game.config.height,'background_groundTile').setOrigin(0,0);
        //player
        this.player = new Player(this, 50, 300, 'spriteSheet',0).setOrigin(0.5,0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.building1 = new Building(this, 0, 400, 'building',0);
        this.building2 = new Building(this, 600, 300, 'building',0);
        this.building3 = new Building(this, -500, 500, 'building',0);
        this.buildings = [
            this.building1,
            this.building2,
            this.building3
        ];

        this.box1 = new JumpObstacle(this, 300, 345, 'jumpObs');
        this.box2 = new JumpObstacle(this, 850, 245, 'jumpObs');
        this.box3 = new JumpObstacle(this, -500, 445, 'jumpObs');
        this.boxes = [
            this.box1,
            this.box2,
            this.box3
        ];
        game.anims.create({
            key: 'copjet',
            frameRate: 10,
            repeat: 1,
            frames: this.game.anims.generateFrameNumbers('copSprite',
            {
                start: 0,
                end: 1
            }),
        });

        this.cop1 = new Cop(this, 900, 200, 'copsprite');
        this.cop2 = new Cop(this, 1000, 300, 'copsprite');
        this.cop3 = new Cop(this, 1300, 250, 'copsprite');
        this.cops = [
            this.cop1,
            this.cop2,
            this.cop3
        ];

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
            frameRate: 10,
            repeat: -1,
            frames: this.game.anims.generateFrameNumbers('spriteSheet',
            {
              start: 0,
              end: 9
            }),
        });
        game.anims.create({
            key: 'jump',
            frameRate: 1,
            repeat: -1,
            frames: this.game.anims.generateFrameNumbers('jetSprite',
            {
              start: 0,
              end: 1
            }),
        });
    
        
        
        
        this.physics.add.collider(this.player, this.buildings);
        this.physics.add.collider(this.player, this.boxes);
        this.physics.add.collider(this.player, this.cops);
        this.physics.add.overlap(this.player, this.obstacles, this.onHit, null, this);

        this.timer = this.time.addEvent({
            delay: 500,
            callback: this.spawnBuildings,
            callbackScope: this,
            loop: true
        });
    }

    update() {
      
        this.player.anims.play('run',true);
        
        //create a scrolling background
        this.updateScore();
        if(!this.player.getDead()) {
            this.backgroundCloud.tilePositionX += 1;
            this.backgroundBuilding.tilePositionX += 3;
            this.player.update();
        }

        if(this.player.getDead()) {
            this.playM.volume = 0;
            this.score = Math.floor(this.score / 100);
            this.scene.start("endScene", this.score);
        }
    }
    updateScore() {
        this.score++;
        this.scoreText.setText("Score: " + Math.floor(this.score / 100));
    }
    spawnBuildings() {
        for(var i = 0; i < 2; i++) {
            var randY = (Math.random() * 100) + 400;
            if((this.buildings[i].x + 468) < 0) {
                this.buildings[i].setX(900);
                this.buildings[i].setY(randY);
                this.boxes[i].setY(randY - 55);
                this.boxes[i].setX(900 + (Math.random() * 200));
            }
            if(this.cops[i].x + 34 < 0) {
                this.cops[i].x = 900 + (Math.random() * 70);
                this.cops[i].y = (Math.random() * 300);
            }
        }
    }
}