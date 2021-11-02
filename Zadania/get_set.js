class Person {
    constructor(name, surname, age){
        this._name = name;
        this._surname = surname;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        console.log("Podmieniono imie");
        this._name = value;
    }
} 

const person = new Person("Jan", "Kowalski", 30);
person.name = "Marian";
person._name = "Marian1";
// person.age = 15;
// const age = person.age
// console.log(person.fullname);
console.log(person);