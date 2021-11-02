const person = {
    name: "Antonio",
    surname: "Banderas"
}
const person2 = {
    name: "Marcin",
    surname: "Wazon"
}
const person3 = {
    name: "Marcin",
    surname: "Wazon"
}

const arr = [person2, person, person3];

for(let i = 0; i < arr.length; i++){
    // if(i === 1){
    //     console.log("break");
    //     break;
    // }
    if(i === 1){
        console.log("continue");
        continue;
    }
    console.log(arr[0]);
}



