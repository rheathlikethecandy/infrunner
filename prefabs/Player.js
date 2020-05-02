//Player prefab
class Player extends Phaser.Sprite {
    private jumpKey: Phaser.Input.Keyboard.Key;
    private isDead: boolean = false;
    private jumps: number = 2;

    public getDead(): boolean {
        return this.isDead;
    }

    public setDead(dead: boolean): void {
        this.isDead = dead;
    }

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.setScale(1);
        this.setOrigin(0, 0);

        this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNames('walkSprite',
            {
              prefix: 'walk_cycle',
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

    private processInput(): void {
        if(this.body.touching.down) {
            this.jumps = 2;
        }
        if(this.jumpKey.isDown && this.jumps > 0) {
            this.jump();
        }
    }
    public jump(): void {
        this.jumps -= 1;
        this.body.setVelocityY(-50);
        console.log(this.jumps);
    }
    private outOfBounds(): void {
        if (this.y + this.height > this.scene.sys.canvas.height || this.y + this.height < 0) {
            this.isDead = true;
        }
    }
}