const player = require('play-sound')({player: "mpg123"});

player.play('./alarm.mp3', function(err){
    if (err) {
        console.log(err);
    }
});