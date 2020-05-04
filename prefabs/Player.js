//Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        var jumpKey =  Phaser.Input.Keyboard.Key;
        var fallKey = Phaser.Input.Keyboard.Key;
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
        this.fallKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.DOWN
        );
       
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
           
            
            this.body.setVelocityX(0);
            
        }
        else { 
          
            this.body.setVelocityX(250);
        }
    }

    processInput() {
        console.log(this.jumps);
        if(this.body.touching.down) {
            this.jumps = 2;
           
            
        }
        if(this.fallKey.isDown) {
            this.body.setVelocityY(200);
        }
        if(this.jumpKey.isDown && this.jumps > 0) {
            this.jump();
        }
    }
    jump() {
        // this.play('jump')
        this.jumps -= 2;
       
        this.body.setVelocityY(-400);
        
       
    }
    
    outOfBounds() {
        if (this.y > 600 || this.x + this.width < 0) {
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