function increment() {
    let a = 0;
    return function() {
        a++;
        console.log(a);
    }
}

const c = increment(); 
c(); //1
c(); //2
c(); //3
c(); //4