function silnia(a) {

    let wynik = 1;
   
    if (a < 0) {
      throw new Error('Nie istnieje silnia z wartości ujemnych!')
    } 
   
    for (let i = 1; i <= a; i++) {
      wynik *= i;
    }
      return wynik;
  }
   
  console.log(silnia(1));
  console.log(silnia(2));
  console.log(silnia(3));
  console.log(silnia(4));
  console.log(silnia(5));
  console.log(silnia(6));
  console.log(silnia(7));
  console.log(silnia(8));
  console.log(silnia(9));
  console.log(silnia(10));
   
  var cnt = 1;
   

//   function silnia(a) {   
//     let wynik = 1;
   
//     if (a < 0) {
//       throw new Error('Nie istnieje silnia z wartości ujemnych!')
//     } 
   
//     for (let i = 1; i <= a; i++) {
//       wynik *= i;
  
//       console.log(`(${i})=${wynik}`);
//         if (++cnt == 10) {
//          break;
//         }
  
//     }
// }