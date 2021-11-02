class OlimpicGame {
    constructor(name, isIndividual) {
        this.olName = name;
        this.isIndividual = isIndividual;
    }

    info() {
        console.log("Name: " + olName)
    }
}

class OlimpicGame {

    constructor(name, isIndividual) {

        this.olName = name;

        this.isIndividual = isIndividual;

    }



    info() {

        console.log("Name: " + olName)

    }
}
class OlimpicGame {

    constructor(name, isIndividual){
  
        this.olName = name;
  
        this.isIndividual = isIndividual;
  
    }
  
  
  
    info(){
  
        console.log("Name: " + this.olName)
  
    }
  
  }
  
  
  
  class SpecificSport extends OlimpicGame{
  
    constructor(name, isIndividual, rollsQty){
  
      super(name, isIndividual);
      
      this.rollsQty = rollsQty;
  
    }
  
  
  
    info(){
  
      console.log("Name: " + this.olName + " has " + this.rollsQty + " wheels.");
  
    }
  
  } 
  
  
  
  const game = new OlimpicGame("Rollers", true);
  
  console.log(game.info());
  
  
  
  const wheels = new SpecificSport("Roller skates", true, 8);
  
  console.log(wheels.info());

/*
Na podstawie klasy bazowej utwórz własną dyscyplinę (klasę pochodną)
- utwórz specyficzną metodę
- zasłonić metodę info i napisać włąsną implementację
- Kontruktor klasy pochodnej, powinine zawierać minimum jeden dodatkowy parametr,
ktory będzie przypisany do klasy
*/