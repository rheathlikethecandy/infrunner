//Player prefab
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        //action state
        this.isJump = false;
        this.isSlide = false;
        this.hasDjump = true;
       
    }
    update() {
        // if(keyUP.isDown || keyW.isDown) {
        //     this.isJump = true;
        // }
        // if(keyDOWN.isDown || keyS.isDown) {
        //     this.isSlide = true;
        // }

        //basic movement
        
        if(keyLEFT.isDown&& this.x >= 47|| this.isJump == false){
                this.x -= 12;
        }else if(keyRIGHT.isDown && this.x <= 598||this.isJump == false){
                this.x += 12;
        }
        //jumping 
        if(keyUP.isDown&&this.y >= 0 -this.width || this.isJump == false){
            this.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;

        }
    
        
    }
}