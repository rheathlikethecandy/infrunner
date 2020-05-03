let config = {
    type: Phaser.CANVAS,
    width: 900,
    height: 600,
    scene: [Menu, Play, End],
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
