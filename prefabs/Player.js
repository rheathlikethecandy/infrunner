//Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        var jumpKey =  Phaser.Input.Keyboard.Key;
        var isDead = false;
        var jumps = 2;
        this.setScale(0.4);
        this.setOrigin(0, 0);
        this.scene.physics.world.enable(this);
        this.body.setGravityY(500);
        this.body.setSize(this.width, this.height + 10);

        this.jumpKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        //add object to existing scene
        scene.add.existing(this);
    }
    create() {
        game.anims.create({
            key: 'jump',
            frameRate: 3,
            repeat: -1,
            frames: this.game.anims.generateFrameNumbers('spriteSheet',
            {
              start: 0,
              end: 1
            }),
        });
    }
    update() {
        this.processInput();
        this.outOfBounds(); 
        if(!this.body.touching.down) {
            this.play('jump');
        }
    }

    processInput() {
        console.log(jumps);
        if(this.body.touching.down) {
            this.jumps = 2;
        }
        if(this.jumpKey.isDown && this.jumps > 0) {
            this.jump();
        }
        console.log("input\n");
    }
    jump() {
        this.jumps -= 1;
        this.body.setVelocityY(100);
        console.log("jump\n");
    }
    outOfBounds() {
        if (this.y + this.height > this.scene.sys.canvas.height || this.y + this.height < 0) {
            this.isDead = true;
        }
        console.log("OOB\n");
    }
    
    getDead() {
        return this.isDead;
    }

    setDead(dead) {
        this.isDead = dead;
    }
}