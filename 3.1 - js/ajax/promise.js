// 1. Tworzymy definicja Promesy



var prom = new Promise(function (resolve, reject) {
    const person = {
        name: "Jan"
    }
    
    setTimeout(() => {
        if (true) {
            resolve(person);
        } else {
            reject("Error");
        }
    }, 2000);
});

// 2. Konsumpcja
prom.then(function (person) {
    console.log(person);
}).catch(function (err) {
    console.log(err);
}
)