var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017'

const filter = {
    color : "zielony",
    
}
const projection = {
    vin: 0
}
const sort = {
    maxSpeed: 1
}
const newCar = {
    "color": "zielony",
    "maxSpeed": "210",
    "vin": "ERTY",
    "weight": "1600"
}
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, 
    function(err, client){
        if(err) throw err;
        var dbo = client.db("SANDBOX");
        // dbo.collection("FRONTEND").insertOne(newCar, function(err, res) {
        //     if(err) throw err;
        //     console.log(res);
        //     client.close();
        // });
        dbo.collection("FRONTEND").find( {} ).sort(sort).project(projection).toArray(function(err, res) {
            if(err) throw err;
            console.log(res);
            client.close();
        });
    }
)
