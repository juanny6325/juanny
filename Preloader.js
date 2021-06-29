var Preloader = new Phaser.Class({
    Extends: Phaser.Scene,
    Initialize:
    function Preloader(){
        Phaser.Scene.call(this, {key: 'Preloader'});
    },

 preload()
 {
    this.load.image("logo", "images/logo.png");
    this.load.image('fondo', 'images/fondo.png');
    this.load.image("torre", "images/Rock Tower.png")
    this.load.image('piso', 'images/platform.png');
    this.load.image("cubo", "images/Rock.png");
    this.load.image("Disparo", "images/Disparo.png")
    this.load.image("barraVida", "images/Barra vida.png")
    this.load.image("barraDaño", "images/Barra daño.png")
    this.load.spritesheet("hongo", "images/Hongo Alien.png", {frameWidth: 34, frameHeight: 39});
    this.load.spritesheet('jugador', 'images/Jugador.png', { frameWidth: 33, frameHeight: 38 });
    this.load.image("MENUFINAL","images/MENUFINAL.png")
    this.load.image("iniciar","images/INICIAR.png")
    this.load.image("creditos","images/BTNCREDITOS.png")
    this.load.image("ayuda","images/AYUDA.png")
    this.load.image("pausa","images/PAUSA.png")
    this.load.image("menuprincipal","images/menuprincipal.png")
    this.load.image("puas","images/Puas.png")
    this.load.image("continue","images/CONTINUAR.png")
    this.load.image("perdiste","images/GAMEOVER.png")
    this.load.image("reintentar","images/REINTENTAR.PNG")
    this.load.image("gema","images/Gema.png")
    this.load.image("siguiente","images/siguiente nivel.png")
    this.load.image("LLave","images/llave.png")
    this.load.image("muerte","images/skull.png")
    this.load.audio("click","images/click.mp3")
    this.load.audio('click', ['images/click.mp3']);
    this.load.audio('fondito', ['images/fondosonido.mp3']);
    this.load.audio('salto', ['images/salto.mp3']);
    this.load.audio('dispar', ['images/disparom.mp3']);
    this.load.audio('Recolector', ['images/recolector.mp3']);

    this.registry.set("vidas",3)
    this.registry.set("scores",0)
    this.registry.set("scores1",0)
    this.registry.set("lifes",3)
    
    
   
    
 },

 create()
 {
    this.add.image(1200,400,"fondo")
    logo =this.add.image(1200, 400, "logo").setScale(0.26)
   logo.setInteractive()
   logo.on('pointerdown', () => this.scene.start('Menu') );
    
 }
})