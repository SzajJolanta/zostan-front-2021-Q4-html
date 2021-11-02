
var http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
    res.writeHead(200, {'content-type': "text/plain"});
    if(req.method === 'POST'){
        res.write("20");
    } 
    else{
        var person = {
            name: "Jan",
            surname: "Kowalski"
        }
        res.write(JSON.stringify(person));
    }
    res.end();
});
var port = 8123;
server.listen(port);
server.once('listening', function(){
    console.log('My first Web server listening on port %d', port);
});