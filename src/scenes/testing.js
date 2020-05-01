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
        this.load.image('playerSprite','placeHolderSprite.png');
        this.load.image('background','placeHolderBackground.png');

    }
    create() {
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        //vector variable
        this.ACCELERATION = 1500;
        this.MAX_X_VEL = 500;   // pixels/second
        this.MAX_Y_VEL = 5000;
        this.JUMP_VELOCITY = -700;
        this.physics.world.gravity.y = 2600;

        //create a physics collider  with buildings
        this.physics.add.collider(this.player, this.buildings);
       
        //place tile sprite
        this.backDrop = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
        //add player
        this.player = new Player(this, game.config.width/2 - 8, 300, 'playerSprite').setScale(0.5, 0.5).setOrigin(0, 0);
        this.player.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
        // add buildings (x3)
        // this.build1 = new Building(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        // this.build2 = new Building(this, 0, 0, 'building2', 0, 20).setOrigin(0,0);
        // this.build3 = new Building(this, 0, 0, 'building3', 0, 10).setOrigin(0,0);
        // var buildings = [
        //     this.build1,
        //     this.build2,
        //     this.build3
        // ]
        // // add jumps (x3)
        // this.jump1 = new JumpObstacle(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        // this.jump2 = new JumpObstacle(this, 0, 0, 'building2', 0, 20).setOrigin(0,0);
        // this.jump3 = new JumpObstacle(this, 0, 0, 'building3', 0, 10).setOrigin(0,0);
        // var jumps = [
        //     this.jump1,
        //     this.jump2,
        //     this.jump3
        // ]
        // // add slides (x3)
        // this.slide1 = new SlideObstacle(this, 0, 0, 'building', 0, 30).setOrigin(0,0);
        // this.slide2 = new SlideObstacle(this, 0, 0, 'building2', 0, 20).setOrigin(0,0);
        // this.slide3 = new SlideObstacle(this, 0, 0, 'building3', 0, 10).setOrigin(0,0);
        // var slides = [
        //     this.slide1,
        //     this.slide2,
        //     this.slide3
        // ]
        
        //define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);


        // animation config
        // this.anims.create({
        //     key: 'jump',
        //     frames: this.anims.generateFrameNumbers('jumpAnim', { start: 0, end: 9, first: 0}),
        //     frameRate: 30
        // });
        // this.anims.create({
        //     key: 'land',
        //     frames: this.anims.generateFrameNumbers('landAnim', { start: 0, end: 9, first: 0}),
        //     frameRate: 30
        // });
        // this.anims.create({
        //     key: 'slide',
        //     frames: this.anims.generateFrameNumbers('slideAnim', { start: 0, end: 9, first: 0}),
        //     frameRate: 30
        // });
        // this.anims.create({
        //     key: 'die',
        //     frames: this.anims.generateFrameNumbers('dieAnim', { start: 0, end: 9, first: 0}),
        //     frameRate: 30
        // });
       
        //game over flag
        this.gameOver = false;

        
      


    }
    update() {
     
        
        //check key input for restart
        if (this.gameOver) {
            this.scene.start("endScene");
        }
        if(!this.gameOver) {
            this.backDrop.tilePositionX += 4;
        }
        if(!this.gameOver) {

            //update player
            this.player.update();

            // //update obstacles
            for(var i = 0; i < 0; i++) {
                this.slides[i].update();
                this.jumps[i].update();
                this.buildings[i].update();
            }

            // //check collision
            // for(var i = 0; i < 0; i++) {
            //     this.checkCollision(this.player, jumps[i]);
            //     this.checkCollision(this.player, slides[i]);
            //     this.checkCollision(this.player, pit);
            // }
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