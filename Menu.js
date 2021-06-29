class Menu extends Phaser.Scene {
    constructor() {
      super('Menu');
     }

create() { 
    this.add.image(1200,400,"fondo")
    this.add.image(1200,475,"MENUFINAL").setScale(1.50)
    var sonido = this.sound.add('click');
   
    iniciar =this.add.image(1200, 400, "iniciar").setScale(1.50)
   iniciar.setInteractive()
   iniciar.gameover=false
   iniciar.on('pointerdown', () => sonido.play() );
   iniciar.on('pointerdown', () => this.scene.start('Nivel1') );
  
   ayuda =this.add.image(1200, 500, "ayuda").setScale(1.50)
   ayuda.setInteractive()
   ayuda.on('pointerdown', () => sonido.play() );
   ayuda.on('pointerdown', () => this.scene.start('Ayuda') );
  
   credits =this.add.image(1200, 610, "creditos").setScale(1.50)
   credits.setInteractive()
   
   credits.on('pointerdown', () => sonido.play() );
   credits.on('pointerdown', () => this.scene.start('Creditos') );
}
}

    
