var os = require('os');
var colors = require('colors');

function calcTime() {
    var hours = 0,
        minutes = 0,
        count = 0;
    var time = parseInt(os.uptime());
    parseInt(time)
    if ((time / 3600) > 1){
        count = 0;
        for (count; (time / 3600) > 1; count++) {
            time -= 3600;
        }
        hours = count;
    }
    if ((time / 60) > 1){
        count = 0;
        for (count; (time / 60) > 1; count++) {
            time -= 60;
        }
        minutes = count;
    }
    console.log('Uptime: '.green + hours + ' hours, ' + minutes + ' minutes and ' + time + ' seconds');
}

exports.printTime = calcTime;