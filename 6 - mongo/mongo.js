var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

const newCar = {
    "color": "zielony",
    "maxSpeed": "210",
    "vin": "ERTY",
    "weight": "1600"
}

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, 
    function(err, client){
        if(err) throw err;
        var dbo = client.db("CarCatalog");
        // dbo.collection("Cars").insertOne(newCar, function(err, res) {
        //     if(err) {
        //         throw err;
        //     }
        //     console.log(res);
        //     client.close();
        // });
        const filter = {
            color : "zielony",
        }
        const sort = {
            maxSpeed: 1
        }
        const projection = {
            vin: 0
        }
        dbo.collection("Cars").find( filter ).limit(1).project(projection).toArray(function(err, res) {
            if(err) throw err;
            console.log(res);
            client.close();
        });
    }
)
