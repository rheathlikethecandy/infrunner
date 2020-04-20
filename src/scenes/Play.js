class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        //music
        this.load.audio('music', './assets/looped_track.mp3');
        //load images/tile sprites
        this.load.image('rocket', './assets/ketchup.png');
        this.load.image('mustard', './assets/mustard.png');
        this.load.image('spaceship', './assets/hotdog.png');
        this.load.image('starfield', './assets/counter.png');
        this.load.image('goldendog', './assets/goldendog.png');
        // load spritesheet
        this.load.spritesheet('explosion', './assets/eating.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }
    create() {
        this.music = this.sound.add('music');
        var musicConfig = {
          mute: false,
          volume: 0.2,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0
        }
        this.music.play(musicConfig);
        //place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        //green UI background
        this.add.rectangle(37, 42, 566, 64, 0xF7BE74).setOrigin(0, 0);
        //add rocket (p1)
        this.p1Rocket = new RocketOne(this, game.config.width/2 - 8, 431, 'rocket').setScale(1, 1).setOrigin(0, 0);
        this.p2Rocket = new RocketTwo(this, game.config.width/2 - 8, 431, 'mustard').setScale(1, 1).setOrigin(0, 0);
        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + 192, 140, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 210, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, 280, 'spaceship', 0, 10).setOrigin(0,0);
        this.goldendog = new Spaceship(this, game.config.width, 175, 'goldendog', 0, 100).setScale(0.5,0.5).setOrigin(0,0);
        this.shipArray = [this.ship01,this.ship02,this.ship03,this.goldendog];
        //define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        //score var
        this.p1Score = 0;
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
        this.scoreLeft = this.add.text(69, 54, this.p1Score, scoreConfig);
        //game over flag
        this.gameOver = false;
        //60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, '↑ to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
    }
    update() {
        //check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.restart(this.p1Score);
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
        this.starfield.tilePositionX += 1;
        if(!this.gameOver) {
            //update rocket
            this.p1Rocket.update();
            this.p2Rocket.update();
            //update spaceships (x3)
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
            this.goldendog.update();
        }
        //check collisions
        for(var i = 0; i < 4; i++) {
            if(this.checkCollision(this.p1Rocket, this.shipArray[i])) {
                this.p1Rocket.reset();
                this.shipExplode(this.shipArray[i]);
            }
        }
        for(var j = 0; j < 4; j++) {
            if(this.checkCollision(this.p2Rocket, this.shipArray[j])) {
                this.p2Rocket.reset();
                this.shipExplode(this.shipArray[j]); 
            }
        }
    }
    checkCollision(rocket, ship) {
        //simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }
    shipExplode(ship) {
        ship.alpha = 0;                         //temporarily hide ship
        //create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             //play explode animation
        boom.on('animationcomplete', () => {    //callback after animation completes
            ship.reset();                       //reset ship position
            ship.alpha = 1;                     //make ship visible again
            boom.destroy();                     //remove explosion sprite
        });   
        //score increment and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        this.sound.play('sfx_explosion'); 
    }
}//test