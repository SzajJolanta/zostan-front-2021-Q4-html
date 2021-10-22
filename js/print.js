// Wydrukować na konsoli wartości: 1-5, 2-4, 3-3, 4-2, 5-1
// parzyste
// 4 -> 1-3, 2-2, 3-1
// 6 -> 1-5, 2-4, 3-3, 4-2, 5-1
// 8 -> 1-7, 2-6,...

function Display(x) {
    const arr = new Array();
    
    if(x <= 0) {
        throw new Error("Wartosc nie może być mniejsza lub równa zero.")
    }

    if(x % 2) {
        throw new Error("Wartosc nie jest liczbą parzystą.")
    }

    for (let index = 1; index < x; index++) {
        arr.push(x - index + "-" + index)
    }

    console.log(arr.join(", "));
}

