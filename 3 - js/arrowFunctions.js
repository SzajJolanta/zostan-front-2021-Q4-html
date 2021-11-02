 /*
    Funkcje strzalkowe
*/
    // "use strict"
    // var f1 = function Person(s, y){
    //     return s;
    // }

    // var f2x = s => s;

    // var f3x = s => 10;

    // var f2x = () => {
    //     return 10;
    // };

    /* 
    napisz 2 funkcje strzałkowe oraz jedną z wykorzystaniem funcion
    dwa parametry wejściowe, suma dwóch silni;
    */

    // var f2 = (i, y) => {   
    //     return i * y;
    // };
 
    // f2(3,2)

    // console.log();

    // var f3 = () => {
    //     console.log(this); 
    //     return 10; 
    // };

    // var f4 = x => { return x };

    // console.log(f1());
    // console.log(f2());
    // console.log(f3());
    // console.log(f4(2));

// console.log("-------- this ----------");

//     var obiekt = {
//         i: 10,

//         x: () => console.log(this.i, this),

//         y: function() {
//             console.log(this.i, this);
//         }
//     }
//         obiekt.x(); // undefined, Window {...} 
//         obiekt.y(); // 10

//     function factorial(n) {
//         if (n == 0 || n == 1) return 1;
//         else return n * factorial(n - 1);
//       }

      const foo2 = (x, y = 10) => factorial(x) + factorial(y);

      const foo = (x, y) => {
      
        let n = factorial(x);
      
        let k = factorial(y);

        return factorial(x) + factorial(y);
      };
      
      foo2(5, 3);
    //   foo(5, 6);