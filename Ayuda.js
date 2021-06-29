class Ayuda extends Phaser.Scene {
    constructor() {
      super('Ayuda');
     }

create() { 
    this.add.image(1200,400,"fondo")
    scoreText = this.add.text(250, 40, "Debes esquivar estas puas para no morir", {fontSize: "64px", fill: "#000"});
    this.add.image(1800,70,"puas").setScale(2.50)
    var sonido = this.sound.add('click');
    
    menuprinc =this.add.image(2000, 700, "menuprincipal").setScale(1.50)
     menuprinc.setInteractive()
     //menuprinc.on('pointerdown', () => this.scene.start('Menu') );
     menuprinc.on('pointerdown', () => sonido.play() );
     menuprinc.on('pointerdown', () => this.scene.start('Menu') );
    
}
}




