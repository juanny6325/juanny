var config = {
    type: Phaser.AUTO,
    width: 2400,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 350 },
            debug: false
        }
    },
    scene:[Preloader,Menu,Nivel1,Creditos,Ayuda,GameOver,Nivel2]
   
    
    // Nivel2, GameOver, Creditos

    
};
var game = new Phaser.Game(config);

var player;
var platforms;
var cube;
var tower;
var cursors;
var hongo;
var healthBar;
var hurtBar;
var Life;
var score = 0
var scoreText;
var balas;
var btnDisparo;
var apuntado = false;
var logo;
var iniciar;
var ayuda;
var credits;
var KeyP
var gameover=false 
var pausa;
var menuprinc;
var continuar;
var puas;
var balas;
var btnDisparo
var apuntado=false 
var Disparo;
var vida=3
var reint;
var scorevida;
var scorevida2;
var Gema;
var timedEvent;
var initialTime;
var timeText;
var Gemas
var Portal;
var sig;
var enemigos;
var scoregem;
var llave;
var skull;
var click;
var disp 
var sig;
var hongos;
var life=3;
var scorelife;



