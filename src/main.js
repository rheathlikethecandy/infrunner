/* 
Group members: Emily Ye, Ryan Heath, John Chun Yin Tsoi
Game title: Neon runner
Date completed: 5/3/2020
Creative tilt: Unique visual style, neo-seoul esque runner. All sound is made by us, save for all the background music
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
