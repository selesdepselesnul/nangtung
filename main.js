const player = require('play-sound')({player: "mplayer"});

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function playAlarm(i) {
    let mp3FileName;

    if(isOdd(i)) {
        mp3FileName = 'nangtung';
    } else {
        mp3FileName = 'mata';
    }

    console.log(`${mp3FileName} boss !`);

    player.play(`${__dirname}/${mp3FileName}.mp3`, function(err){
        if (err) {
            console.log(err);
        }
    });
}

function minuteToMS(minute) {
    return minute * 60000;    
}

function main() {
    const args = process.argv.slice(2);
    for(let i=0;i<args.length;i++) {
        const ms = minuteToMS(parseInt(args[i]));
        setInterval(function() {
            playAlarm(i+1);
        }, ms);
    }
}

main();
