class Nivel1 extends Phaser.Scene {
    constructor() {
      super('Nivel1');
    }

    create() { 
     this.add.image(1200,400,"fondo")
     this.add.image(2400, 400, "fondo")
     this.add.image(3600, 400, "fondo")
    
     platforms = this.physics.add.staticGroup();
        cube = this.physics.add.staticGroup();
        tower = this.physics.add.staticGroup();
        puas = this.physics.add.staticGroup();
        Gema = this.physics.add.staticGroup();
        sig=this.physics.add.staticGroup();
        llave=this.physics.add.staticGroup();
        skull=this.physics.add.staticGroup();
        platforms.create(400, 750, 'piso');
        platforms.create(600, 750, 'piso');
        platforms.create(600, 425, 'piso');
        platforms.create(200, 750, 'piso');
        cube.create(1000, 600, "cubo");
        platforms.create(1000, 250, 'piso');
        cube.create(800, 650, "cubo");
        cube.create(850, 475, "cubo");
        cube.create(860, 325, "cubo");
        platforms.create(1400, 335, 'piso');
        platforms.create(2700, 320, 'piso');
        tower.create(1150, 600, "torre");
        tower.create(1150, 550, "torre");
        platforms.create(1270, 500, 'piso');
        tower.create(1500, 250, "torre");
        tower.create(1500, 325, "torre");
        platforms.create(1270, 750, 'piso');
        platforms.create(1370, 750, 'piso');
        platforms.create(1570, 750, 'piso');
        cube.create(1700, 650, "cubo");
        cube.create(1540, 555, "cubo");
        cube.create(1530, 435, "cubo");
        cube.create(1520, 335, "cubo");
        tower.create(1875, 750, "torre");
        tower.create(1875, 520, "torre");
        platforms.create(1995, 635, 'piso');
        platforms.create(2250, 635, 'piso');
        platforms.create(2505, 635, 'piso');
        tower.create(2600, 750, "torre");
        tower.create(2600, 550, "torre");
        tower.create(2800, 750, "torre");
        tower.create(2800, 550, "torre");
        cube.create(2560, 535, 'cubo');
        cube.create(2570, 425, 'cubo');
        platforms.create(2900, 320, 'piso');
        platforms.create(3100, 320, 'piso');
        platforms.create(3300, 320, 'piso');
        platforms.create(3500, 320, 'piso');
        tower.create(3800, 150, "torre");
        tower.create(3800, 200, "torre");
        tower.create(3800, 270, "torre");
        platforms.create(3125, 520, 'piso');
        platforms.create(3325, 520, 'piso');
        platforms.create(3525, 520, 'piso');
        platforms.create(3720, 520, 'piso');
        platforms.create(2900, 750, 'piso');
        platforms.create(3100, 750, 'piso');
        platforms.create(3300, 750, 'piso');
        platforms.create(3500, 750, 'piso');
        platforms.create(3900, 750, 'piso');
        platforms.create(4100, 750, 'piso');
        platforms.create(4300, 750, 'piso');
        puas.create(430,712,"puas")
        puas.create(520,390,"puas")
        puas.create(1000,220,"puas")
        puas.create(1500,712,"puas")
        puas.create(1250,470,"puas")
        puas.create(2000,600,"puas")
        puas.create(2200,600,"puas")
        puas.create(2170,600,"puas")
        puas.create(2240,600,"puas")
        puas.create(2500,600,"puas")
        puas.create(3200,490,"puas")
        Gema.create(470,725,"gema")
        llave.create(1400,300,"LLave")
        skull.create(2800,290,"muerte")
        sig.create(4200,650,"siguiente").setScale(0.50)
        var sonido = this.sound.add('click');

        player = this.physics.add.sprite(270,710,"jugador")
        player.herido=false 
        player.tiempoDisparo=0
        player.recuperar=0
        vida=3
        
        
        hongo = this.physics.add.sprite(400, 710, "hongo");
        //Grupo Bala
        Disparo = this.physics.add.group()
        //Disparo.create(400, 300, 'Disparo' );
        //Defini Boton Para Disparar
        btnDisparo=this.input.keyboard.addKey("A")
        


        
        player.setCollideWorldBounds(false);
        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('jugador', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'jugador', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('jugador', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        KeyP = this.input.keyboard.addKey('P')
        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, cube);
        this.physics.add.collider(player, tower);
        this.physics.add.collider(hongo, platforms);
        this.physics.add.collider(hongo, cube);
        this.physics.add.collider(hongo, tower);
        this.physics.add.collider(Gema, platforms);
        this.physics.add.overlap(Disparo,platforms,this.destruyebala,null,this)
        this.physics.add.overlap(Disparo,cube,this.destruyebala,null,this)
        this.physics.add.overlap(Disparo,tower,this.destruyebala,null,this)
        this.physics.add.overlap(Disparo,puas,this.destruyebala,null,this)
        this.physics.add.overlap(player,puas,this.quitavida,null,this)
        this.physics.add.overlap(player,sig,this.siguiente,null,this)
        this.physics.add.overlap(player, Gema, this.collectGema, null, this);
        this.physics.add.overlap(player, llave, this.collectllave, null, this);
        this.physics.add.overlap(player, skull, this.collectskull, null, this);
        this.vida = 3 


        
        this.cameras.main.setBounds(0,0,4800,800)
        player.health = 100;
        player.maxHealth = 100;
        hurtBar = this.add.image(400, 20, "barraDaño")
        hurtBar.scrollFactorX = 0;
        hurtBar.scrollFactorY = 0;

        healthBar = this.add.image(400,20, "barraVida");
        healthBar.scrollFactorX = 0;
        healthBar.scrollFactorY = 0;
        

       /* Life = this.add.text(310, 13, "Vida", {fontSize:"20px", fill:"#000"});
        Life.scrollFactorX = 0;
        Life.scrollFactorY = 0;
       */
        Gema = this.physics.add.group();
        llave = this.physics.add.group();
        skull = this.physics.add.group();
        scoreText = this.add.text(300, 40, "Score: ", {fontSize: "32px", fill: "#000"});
        scoreText.scrollFactorX = 0;
        scoreText.scrollFactorY = 0;
        
        scorevida = this.add.text(310, 8, "VIDAS: ", {fontSize: "28px", fill: "#000"});
        scorevida.scrollFactorX = 0;
        scorevida.scrollFactorY = 0;
        
        //this.scorevida2 = this.add.text(435, 8, "3", {fontSize: "28px", fill: "#000"});
        //this.scorevida2.scrollFactorX = 0;
        //this.scorevida2.scrollFactorY = 0;
        
        this.score=0
        scoregem = this.add.text(435, 40, "0", {fontSize: "32px", fill: "#000"});
        scoregem.scrollFactorX = 0;
        scoregem.scrollFactorY = 0;
        initialTime=50
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(1220, 16, 'Tiempo:', {  fontSize: '32px', fill: '#000' });
        timeText.scrollFactorX = 0;
        timeText.scrollFactorY = 0;
        this.scorevida2 = this.add.text(435, 8, "3", {fontSize: "28px", fill: "#000"});
        this.scorevida2.scrollFactorX = 0;
        this.scorevida2.scrollFactorY = 0;
        
        sig =this.add.image(4200,650, "siguiente").setScale(1.50)
        sig.setInteractive()
        sig.on('pointerdown', () => sonido.play() );
        sig.on('pointerdown', () => this.scene.start('Nivel2') );   
        
    }

     
    
   

    update (){
        
        this.cameras.main.centerOn(player.x,player.y)
        if (btnDisparo.isDown && apuntado==false && (this.time.now>player.tiempoDisparo)){
            Disparo.create(player.x,player.y, 'Disparo' ).setVelocityX(300).body.allowGravity=false
            var sonido = this.sound.add('dispar');
            sonido.play()
            player.tiempoDisparo=this.time.now +400
           
        }
        else if (btnDisparo.isDown && apuntado==true && (this.time.now>player.tiempoDisparo)){
            Disparo.create(player.x,player.y, 'Disparo' ).setVelocityX(-300).body.allowGravity=false
            var sonido = this.sound.add('dispar');
            sonido.play()
            player.tiempoDisparo=this.time.now +400

             }
        if (this.time.now>player.recuperar){
          player.herido=false
        }
        /*if(KeyP.isDown)
            {
               pausa= this.add.image(1400,400,"pausa").setScale(1.50)
               pausa.scrollFactorX = 0;
               pausa.scrollFactorY = 0;
               //this.scene.pause('Nivel1')
               //this.scene.pause();
               
               menuprinc =this.add.image(1400, 520, "menuprincipal").setScale(1.50)
               menuprinc.scrollFactorX = 0;
               menuprinc.scrollFactorY = 0;
               menuprinc.setInteractive()
               menuprinc.on('pointerdown', () => this.scene.start('Menu') );
              
               continuar = this.add.image(1400, 420, "continue").setScale(1.50)
               continuar.scrollFactorX = 0;
               continuar.scrollFactorY = 0;
               continuar.setInteractive()
               continuar.on('pointerdown', () => this.image.destroy("menuprincipal") );
               //continuar= this.scene.restart()
               
               
             }
             */
             if (vida<=0){
                this.scene.start('GameOver') 
                
             
                //gameover=true
                //scoreText = this.add.text(800, 40, "PERDISTE", {fontSize: "128px", fill: "#000"});
                

                  }
    
                 /*menuprinc =this.add.image(1200, 520, "menuprincipal").setScale(1.50)
                 menuprinc.setInteractive()
                 //menuprinc.on('pointerdown', () => this.scene.start('Menu') );
                 menuprinc.on('pointerdown', () => sonido.play() );
                 menuprinc.on('pointerdown', () => this.scene.start('Menu') );

                 reint =this.add.image(1200, 520, "reintentar").setScale(1.50)
                 reint.setInteractive()
                 //menuprinc.on('pointerdown', () => this.scene.start('Menu') );
                 reint.on('pointerdown', () => sonido.play() );
                 reint.on('pointerdown', () => this.scene.restart() );
                  }
                  */
         //if(gameover=true){
            
            
         
         if (cursors.left.isDown)
        {
            player.setVelocityX(-260);

            player.anims.play('left', true);

        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(260);

            player.anims.play('right', true);

        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down)
        {   
            var sonido = this.sound.add('salto');
            sonido.play()
            player.setVelocityY(-300);
            
        } 
    } 
         
    
    
     
     
     destruyebala(bala,muro){
        bala.destroy() 

    }
    collectskull(player, skull){
        skull.disableBody(true, true);
        var sonido = this.sound.add('Recolector');
            sonido.play()
        this.score += 15
        this.registry.set('scores', this.score);
        
        scoregem.setText(this.score); 
    }
    collectGema(player, Gema){
        Gema.disableBody(true, true);
        var sonido = this.sound.add('Recolector');
            sonido.play()
        this.score += 10
        this.registry.set('scores', this.score);
        
        scoregem.setText(this.score); 
    }
    collectllave(player, llave){
        llave.disableBody(true, true);
        var sonido = this.sound.add('Recolector');
            sonido.play()
        this.score += 20
        this.registry.set('scores', this.score);
        
        scoregem.setText(this.score); 
    }
        
    quitavida(){
        
      if (player.herido==false){
        
        vida=vida-1
        player.herido=true
        player.recuperar=this.time.now +1000
        this.registry.set("vidas", vida)
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'vidas')
            this.scorevida2.setText(data)

        
        });
      }
      
    }
    
    
    onSecond(){
        timeText.setText('Tiempo: ' + initialTime);
        initialTime = initialTime - 1;
        if (initialTime === -1){
            this.scene.start('GameOver');
        
        }
    }    
}    
      
      
          
        
      
    

        
     
