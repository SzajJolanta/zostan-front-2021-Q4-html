var x = 4;
var y = 9;

( x++ > 5 || x-- >= 5) && --y == 8 ? x++: y++;

console.log(`x: ${x}, y: ${y}`);










var x = 4;
var y = 9;

// console.log(x++ > 5 || x === 4);
// console.log( x++ > 5 || x++ == 5);


( x++/*cur:4, next:5 */ > 5 || x-- /*cur: 5, next:4*/ >= 5) && --y/*cur:8, next:8 */ == 8 ? x++/*cur:4, next:5 */: y++/*nie wywoluje*/;

// console.log(`x: ${x}, y: ${y}`);