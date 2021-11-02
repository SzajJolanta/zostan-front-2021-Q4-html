
// function loadTxt (docName){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200){
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     }
//     xhttp.open("GET", docName, true);
//     xhttp.send();
// }

// loadTxt("https://www.lipsum.com/");


/*
    Promise
*/

// var hi = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if(1) {
//             resolve("Hi, I;m OK");
//         } else {
//             reject("Error")
//         }
//     }, 1000);
// });

// hi.then(function(string){
//     console.log(string);
// }).catch(function(e) {
//     console.log("error" + e);
// })

/*
    Promise All - dodatkowe
*/

// function loadUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("user data"); }, 2000)
//     });
// }

// function loadBooks() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("books data"); }, 1000)
//     });
// }

// function loadPets() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("pets data"); }, 500)
//     });
// }

// Promise.all([
//     loadUser(),
//     loadBooks(),
//     loadPets()
// ])
// .then(res => {
//     console.log(res);
// });

/*
    async/await
*/

function loadUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("A"); }, 1000)
    });
}

function loadBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("B"); }, 1000)
    });
}

function loadPets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("C"); }, 1000)
    });
}

async function render() {
    const user = await loadUserData();
    const books = await loadBooks();
    const pets = await loadPets();

    return user + books + pets;
}

render().then(res => {
    console.log(res);
})

