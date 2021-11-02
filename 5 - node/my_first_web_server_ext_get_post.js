var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
    if(req.method === "POST"){
        res.writeHead(200, {'content-type': "text/plain"});
    
        res.write("updated successfully");
    }
    else if(req.method === "GET"){
        res.writeHead(200, {'content-type': "application/json"});
    
        const person = {
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