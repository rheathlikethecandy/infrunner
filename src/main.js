let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play, End]

    physics: {
        default: "arcade"
    }
}
let game = new Phaser.Game(config);
//reserve keyboard vars
let keyUP, keyDOWN, keyW, keyS,keyLEFT,keyRIGHT;