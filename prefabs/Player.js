//Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        var jumpKey =  Phaser.Input.Keyboard.Key;
        var isDead = boolean = false;
        var jumps = number = 2;

        this.setScale(1);
        this.setOrigin(0, 0);

        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNames('runSprite',
            {
              prefix: 'run_cycle',
              start: 1,
              end: 10,
              zeroPad: 0
            }),
            frameRate: 25,
            repeat: -1
        });

        this.scene.physics.world.enable(this);
        this.body.setGravityY(500);
        this.body.setSize(this.width, this.height + 10);

        this.jumpKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        //add object to existing scene
        scene.add.existing(this);
    }
    
    update() {
        this.processInput();
        this.outOfBounds();
    }

    processInput() {
        if(this.body.touching.down) {
            this.jumps = 2;
        }
        if(this.jumpKey.isDown && this.jumps > 0) {
            this.jump();
        }
    }
    jump() {
        this.jumps -= 1;
        this.body.setVelocityY(-50);
        console.log(this.jumps);
    }
    outOfBounds() {
        if (this.y + this.height > this.scene.sys.canvas.height || this.y + this.height < 0) {
            this.isDead = true;
        }
    }
    
    getDead() {
        return this.isDead;
    }

    setDead(dead) {
        this.isDead = dead;
    }
}