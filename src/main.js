/* Creative tilt: All sound and art are handmade and high quality, save for all the background music 
*/
let config = {
    type: Phaser.CANVAS,
    width: 900,
    height: 600,
    scene: [Menu, Play, End, HTP, Credit],
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
let keySPACE, keyUP, keyDOWN, keyW, keyS, keyLEFT, keyRIGHT;
