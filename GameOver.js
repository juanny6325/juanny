class GameOver extends Phaser.Scene {
    constructor() {
      super('GameOver');
     }

create() { 
    this.add.image(1200,400,"fondo")
    scoreText = this.add.text(800, 40, "PERDISTE", {fontSize: "128px", fill: "#000"});
    
    menuprinc =this.add.image(2000, 700, "menuprincipal").setScale(1.50)
    var sonido = this.sound.add('click');
     menuprinc.setInteractive()
     
     menuprinc.on('pointerdown', () => sonido.play() );
     menuprinc.on('pointerdown', () => this.scene.start('Menu') );
    
}
}