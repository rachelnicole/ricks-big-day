var Menu = {

    preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        game.load.image('title', 'assets/titlescreen/rbd-title.png');
        game.load.image('instructions', 'assets/titlescreen/instructions.png');
        game.load.spritesheet('rickSleep', 'assets/titlescreen/rick-sleep.png', 188, 86, 4);
        game.load.spritesheet('start', 'assets/titlescreen/start.png', 48, 18, 2);
        game.load.audio('intro', ['intro.mp3', 'intro.ogg']);
    },

    create: function () {
      game.stage.backgroundColor = '#65ffc7';
      // Add a sprite to your game, here the sprite will be the game's logo
      // Parameters are : X , Y , image name (see above) 
      this.add.sprite(165, 40, 'title');

      rickSleep = game.add.sprite(300, 320, 'rickSleep', 0);
      game.physics.enable(rickSleep, Phaser.Physics.ARCADE);
      rickSleep.animations.add('loop');

      startButton = game.add.sprite(100, 520, 'start', 0);
      game.physics.enable(startButton, Phaser.Physics.ARCADE);

      this.add.sprite(280, 575, 'instructions');

      music = game.add.audio('intro');
      music.loop = true;
      music.play();
    },

    update: function () {
      rickSleep.animations.play('loop', 4, true); 
    }


};