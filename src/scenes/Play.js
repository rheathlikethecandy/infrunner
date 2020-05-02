var obstacles;
var buildings;
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        //load images/tile sprites
        this.load.path = "assets/";
        this.load.image('playerSprite','placeHolderSprite.png');
        this.load.image('background','endlessrunnerbackdrop.png');
        this.load.image('building', 'building.png');
        this.load.image('jumpObs', 'jumpObs.png');
        // load spritesheet
        //this.load.spritesheet('dieAnim', 'running.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        //load sfx
        this.load.audio('sfx_jet','jet.wav');
        this.load.audio('sfx_siren','siren.wav');
        this.load.audio('sfx_boop','boop.wav');


    }
    
    create() {
        //place tile sprite
        this.backDrop = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        this.obstacles = this.physics.add.group();
        this.buildings = this.physics.add.staticGroup();
        
        // variables
        this.timer = Phaser.Time.TimerEvent;
        this.score = 0;
        this.scoreText = this.add.text("playScene", 0, 0, "");

        for (var i = 0; i < 2; i += 1) {
            this.buildings.create(i * 380, 590, 'building');
        }
        this.buildings;

        this.scoreText.push(
            this.add.text(this.sys.canvas.width / 2 - 14, 30, "0", {
                fontFamily: "Aerial",
                fontSize: "40px",
                fill: "#000"
            })
        );
        this.scoreText.push(
            this.add.text(this.sys.canvas.width / 2 - 16, 30, "0", {
                fontFamily: "Aerial",
                fontSize: "40px",
                fill: "#fff"
            })
        );

        this.addWorld();

        this.player = new Player({
            scene: this, 
            x: 20, 
            y: 275, 
            key: "playerSprite", 
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