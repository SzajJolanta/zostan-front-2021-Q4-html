
class Car {
    constructor(name, color){
        this.carname = name;
        this.color = color;
    }

    get getName(){
        return this.carname;
    }

    set setName(name){
        this.carname = name;
    }

    info(){
        return "Nazwa samochodu: " + this.carname;
    }

    static startEngine(x){
        console.log("Silnik odpalony " + x.info())
    }
}

class SportowySamochod extends Car {
    constructor(name, color, turoCount){
        super(name, color);

        this.turoCount = turoCount;
    }

    info(){
        return this.carname + " and turbo: " + this.turoCount;
    }
}

const c = new Car("Skoda", "Black");
console.log(c.info());

const car = new SportowySamochod("Ford", "Red", 2);
console.log(car.info());



