//Player prefab
class Player extends Phaser.GameObjects.Sprite {
    
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

   

   
}