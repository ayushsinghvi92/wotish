
var player = require('play-sound')(opts = {})
var p =  './piano/'

var scale = ['a', 'b', 'bb', 'c', 'cS', 'd', 'e', 'eb', 'f', 'fS', 'g', 'gS']

//depending on where the user hits, note gets set to a particular value;
var note = 0;
player.play(p + scale[note] + '.wav', function(err){}); 

	