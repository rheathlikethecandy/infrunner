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
        this.body.setGravityY(300);
        this.body.setSize(this.width, this.height + 10);

        this.jumpKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        //add object 
        scene.add.existing(this);
        //add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    create() {
    }
    update() {
        this.processInput();
        this.outOfBounds(); 
        if(!this.body.touching.down) {
            this.play('jump');
            this.body.setVelocityX(0);
        }
        else { 
            this.body.setVelocityX(220);
        }
    }

    processInput() {
        console.log(this.jumps);
        if(this.body.touching.down) {
            this.jumps = 2;
        }
        if(this.jumpKey.isDown && this.jumps > 0) {
            this.jump();
        }
    }
    jump() {
        this.jumps -= 1;
        this.body.setVelocityY(-400);
        console.log("jump\n");
    }
    outOfBounds() {
        if (this.y + this.height > this.scene.sys.canvas.height || this.x + this.width < 0) {
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