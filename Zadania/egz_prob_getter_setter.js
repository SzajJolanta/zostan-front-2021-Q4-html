class Person {
    constructor(name, surname){
        this._name = name;
    }

    get name() {
        console.log("Trying to get name value");
        return this._name;
    }

    set name(value) {
        console.log("Trying to set name value")
        this._name = value;
    }
}

const person = new Person("Jan", "Kowalski");
person.name = "Marian";
console.log(person.name);