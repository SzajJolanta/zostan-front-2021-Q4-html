/*
    Domkniecia
*/
function foo() {
    var a = 2;
    function bar (){
        a++;
        console.log(a);
    }

    return bar;
}

var baz = foo();
baz();
baz();
baz();

/*
    Timer
*/

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000)
// }


// for (var i = 1; i <= 5; i++) {
//     (function () {
//         var j = i;
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000)
//     })();
// }