/*
    Klasa
*/
console.log("----------- Klasa ------------ ");
class AppConfig { 
    constructor(number = 5){ 
        if(AppConfig.exists){ 
          return AppConfig.instance 
        } 
        this.randomNumber = Math.random();
        this.number = number;
        AppConfig.exists = true; 
        AppConfig.instance = this; 
        return this 
    }  
  } 
  
  const configObject = new AppConfig(8);
  const configObject2 = new AppConfig(1);
  
  console.log(configObject);
  console.log(configObject2);
  console.log(configObject === configObject2); // true



  /*********
  Funkcja 
  ****** */

  const RejestrAplikacji = (function() {
    let registry; 
  
    function initializeConfiguration(initData) { // funkcja konstruktora
      this.randomNumber = Math.random();
      initData = initData || {};
      this.number = initData.number || 5;
    }
  
    // publiczna część singletonu
    return {
      getRegistry: function(values) {
        // inicjujemy singleton tylko jeden raz
        if (registry === undefined) {
            registry = new initializeConfiguration(values);
        }
        // przy kolejnych wywołaniach zawsze zwracamy już te same dane
        return registry;
      }
    };
  })();
  
  const registryObject = RejestrAplikacji.getRegistry({ number: 8 });
  console.log(registryObject); 
  
//   const registryObject = RejestrAplikacji.getRegistry({ number: 1 });
//   console.log(registryObject); 
  
  console.log(registryObject.registry); // undefined
  console.log(registryObject); // ERROR





