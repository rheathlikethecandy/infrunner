class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        //load images/tile sprites
        this.load.image('backDrop', './assets/backDrop.png');
        // load spritesheet
        this.load.spritesheet('dieAnim', './assets/deathAnim.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }
    create() {
        //place tile sprite
        this.backDrop = this.add.tileSprite(0, 0, 640, 480, 'backDrop').setOrigin(0, 0);
        //add player
        this.player = new Player(this, game.config.width/2 - 8, 431, 'player').setScale(0.5, 0.5).setOrigin(0, 0);
        //add death pit at bottom
        this.pit = new Pit();
        // add buildings (x3)
        this.build1 = new Building(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        this.build2 = new Building(this, 0, 0, 'building2', 0, 20).setOrigin(0,0);
        this.build3 = new Building(this, 0, 0, 'building3', 0, 10).setOrigin(0,0);
        var buildings = [
            this.build1,
            this.build2,
            this.build3
        ]
        // add jumps (x3)
        this.jump1 = new JumpObstacle(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        this.jump2 = new JumpObstacle(this, 0, 0, 'building2', 0, 20).setOrigin(0,0);
        this.jump3 = new JumpObstacle(this, 0, 0, 'building3', 0, 10).setOrigin(0,0);
        var jumps = [
            this.jump1,
            this.jump2,
            this.jump3
        ]
        // add slides (x3)
        this.slide1 = new SlideObstacle(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        this.slide2 = new SlideObstacle(this, 0, 0, 'building2', 0, 20).setOrigin(0,0);
        this.slide3 = new SlideObstacle(this, 0, 0, 'building3', 0, 10).setOrigin(0,0);
        var slides = [
            this.slide1,
            this.slide2,
            this.slide3
        ]
        
        //define keys
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // animation config
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jumpAnim', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        this.anims.create({
            key: 'land',
            frames: this.anims.generateFrameNumbers('landAnim', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        this.anims.create({
            key: 'slide',
            frames: this.anims.generateFrameNumbers('slideAnim', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('dieAnim', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        //score var
        this.score = 0;
        //score display
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(69, 54, this.score, scoreConfig);
        //game over flag
        this.gameOver = false;
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
            for(var i = 0; i < 0; i++) {
                this.slides[i].update();
                this.jumps[i].update();
                this.buildings[i].update();
            }

            //check collision
            for(var i = 0; i < 0; i++) {
                this.checkCollision(this.player, jumps[i]);
                this.checkCollision(this.player, slides[i]);
                this.checkCollision(this.player, pit);
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
}