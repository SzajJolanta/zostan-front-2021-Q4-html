var fruit = {name:"apple"};
var apple = fruit; //@Af54D280A

console.log( apple === fruit);
fruit.name = 'peach';
apple.name = 'pear';
console.log( apple === fruit);


console.log("------------- 2 ----------------")

var fruit = {name:"apple"};
 var apple = fruit; //@Af54D280A

 console.log( apple === fruit);
 fruit.name = 'peach';
 apple.name = 'pear';
 console.log( apple === fruit);

//  true, false
//  false, false
//  false, true
//  true, true

console.log('--------------------------------------------');
var fruit = {name:"apple"}; //@Af54D280A
var apple = {name:"apple"}; //@Af54D280B

console.log( apple === fruit);
console.log( apple == fruit);
console.log(apple.name === fruit.name);
fruit.name = 'peach';       // {name:"peach"};
apple.name = 'pear';        // {name:"pear"};
console.log( apple === fruit);
console.log( apple == fruit);

console.log(apple.name === fruit.name);


console.log("----------- 3 ---------------")

var osoba = {
    _imie: "Jan",
    _nazwisko: "Kowalski",
    wiek: 30,
    plec: "M",
    get nazwa() { return this._imie + " " + this._nazwisko; },
    get imie() { return this._imie;},
    set imie(s) {this._imie = s;}
};

console.log(osoba.nazwa);

for (x in osoba){
    console.log (
                        (typeof osoba[x] == 'function') ? osoba[x](): osoba[x]
                );
}

osoba.imie = "Karol";
console.log(osoba.imie);