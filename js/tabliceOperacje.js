class Car {
    constructor(vin, color, maxSpeed, weight){
        this.vin = vin;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
    }
}

var arr = [
    new Car("XDEW", "czerwony", 200, 1500),
    new Car("QWER", "niebieski", 210, 1700),
    new Car("ASDF", "zielony", 180, 1800),
    new Car("ZCVJ", "czerwony", 190, 1900),
    new Car("WERT", "biały", 200, 2100),
    new Car("SDFG", "czerwony", 210, 2500),
    new Car("XCVB", "zielony", 180, 1400),
    new Car("ERTY", "czarny", 200, 1200),
    new Car("DFGH", "czerwony", 250, 1300),
    new Car("CVBN", "biały", 260, 2000),
];

// console.log(arr);

/* 
    Map
*/
// Robimy chip tuning
// var arr2 = arr.map((e) => {
//     e.maxSpeed += 20;
//     return e;
// })

// for(x of arr2){
//     console.log(x);
// }


/*
    Filter    
*/
// var filteredArr = arr.filter((e) => {
//     return e.maxSpeed > 200;
// })

// for(x of filteredArr){
//     console.log(x);
// }

/*
    Reduce
*/
// var reducedCars = arr.reduce((prev, curr) => {
//     return prev + curr.maxSpeed;
// }, 0);

// console.log(reducedCars);

// var numbers = [2.15, 3.14, 8.56, 15.27, -0.29]

// var reducedVal = numbers.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(reducedVal);

// var weightSum = arr.reduce((prev, curr) => prev + curr.weight, 0/*wartosc pocz dla prev*/);
// console.log(weightSum);


/*
    Map
*/
// const c1 = new Car("XDEW", "czerwony", 200, 1500);
// const c2 = new Car("QWER", "niebieski", 210, 1700);
// let map = new Map();

// map.set(c1.vin, c1);
// map.set(c2.vin, c2);
// // ...
// console.log(map);
// console.log(map.keys())
// console.log(map.values())

// let map = new Map();
// map.set('1', 'str1Key');
// map.set(1, 'num1Key');
// map.set(true, 'booKey');

// console.log(map.get(1));
// console.log(map.get('1'));

// console.log(map.size);

// let carByVin = new Map();
// // !!!!!!!!!!!!!!!!
//zadanie wypełnic, mapę tak żeby kluczem był VIN, a wartośćą Car, na końcu do konsoli zwrócic z Mapy vin WERT








// let carByVin = new Map();

// arr.map(e => carByVin.set(e.vin, e));

// console.log(carByVin.keys());

// console.log(carByVin.get("WERT"));

/*
    Set
*/

// ZADANIE: utworzyć tablicę unikalnych nazw kolorów 

// const set = new Set();

// arr.forEach(e => {
//     set.add(e.color);
// })

// console.log(set);