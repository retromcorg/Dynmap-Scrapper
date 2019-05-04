//Some people said getting player data from Dynmap is impossible, which it isn't and its extremely easy.
var http = require('http');

var url = 'http://portal.retrominecraft.com/dynmap/standalone/dynmap_retromc.json';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var response = JSON.parse(body);
        let list = []
        for(let i = 0; i < response.players.length; i++) {
            list.push(response.players[i].account)
        }
        console.log("Yes, getting data from Dynmap is possible due to its internal API (Big Surprise) \n")
        console.log("Players Online: " + list + " [" + list.length + "]");
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});
