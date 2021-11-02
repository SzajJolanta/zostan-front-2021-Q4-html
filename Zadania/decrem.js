var x = 4;
var y = 9;

( x++/*ret: 4, next: 5*/ > 5 || x--/*ret: 5, next: 4*/ >= 5) && --y/*prev: 9, ret: 8*/ == 8 ? x++/*ret: 4, */: y++;

console.log(`x: ${x}, y: ${y}`);
