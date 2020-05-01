class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }
    preload() {
        //load audio
        this.load.audio('sfx_caught', './assets/endBlip.wav');
    }
    create() {

             //place holder title
        let menuConfig= {
            frontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor:'#1F46EB',
            colo:'#FFFFFF',
            align:'right',
            padding:{
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }

        //creating a menu button to move to the play scene
        this.menuButton = this.add.text(centerX,centerY,'EndScene',
                                        menuConfig).setOrigin(0.5);
        this.menuButton.setInteractive({
            useHandCursor: true,
        });

    }

    update() {
           // start play scene when menu button is being pressed/clicked
           this.input.on('gameobjectdown', (pointer, gameObject, event) => {
            console.log('nextscene');
             this.scene.start("menuScene");
         });
    }
}