let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Testing, Play, End],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
}
let game = new Phaser.Game(config);
//reserve keyboard vars
let keyUP, keyDOWN, keyW, keyS,keyLEFT,keyRIGHT;
