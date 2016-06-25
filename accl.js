var tessel = require('tessel');
var accel = require ('accel-mma84').use(tessel.port['A']);
var path = require('path');
var fs = require('fs');
var soundPath = path.join(__dirname, 'whipSoundFile.mp3');
var av = require('tessel-av').Player();
var bool = true;

// av.play([__dirname + '/whipSoundFile.mp3']);

accel.on('ready', function () {
    // Stream accelerometer data
  accel.on('data', function (xyz) {
        if( (xyz[0] > 0.8 || xyz[1] > 0.8) ) {
          av.play([soundPath, '-a', 10]);
          console.log('x:', xyz[0].toFixed(2),
          'y:', xyz[1].toFixed(2),
          'z:', xyz[2].toFixed(2));
        }
        // setInterval(function (){
        // }, 2000)

  });

});

accel.on('error', function(err){
  console.log('Error:', err);
});
