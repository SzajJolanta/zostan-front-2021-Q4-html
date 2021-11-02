/*
    Problematyka funkcji zwrotnych
*/

// function loadAData(fn) {
//     setTimeout(() => fn("Pobieram dane A"), 1000);
// }
// function handleAData(fn) {
//     setTimeout(() => fn("Przetwarzam dane A"), 1000);
// }
// function loadBData(fn) {
//     setTimeout(() => fn("Pobieram dane B"), 1000);
// }
// function handleBData(fn) {
//     setTimeout(() => fn("Przetwarzam dane B"), 1000);
// }

// loadAData(res => {
//     console.log("Wczytałem dane A:", res);
//     handleAData(res => {
//         console.log("Przetworzyłem dane A:", res);
//         loadBData(res => {
//             console.log("Wczytałem dane B:", res);
//             handleBData(res => {
//                 console.log("Przetworzyłem dane B:", res);
//             })
//         })
//     })
// }
// )

/*
    Premises 
*/

// const pobieramAPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Pobieram dane A"), 1000);
// })
// const przetwarzamAPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Przetwarzam dane A"), 1000);
// })
// const pobieramBPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Pobieram dane B"), 1000);
// })
// const przetwarzamBPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Przetwarzam dane B"), 1000);
// })

// pobieramAPromise.then(result => {
//     console.log("Wczytałem dane A:", result);
//     return przetwarzamAPromise;
// }).then(result => {
//     console.log("Przetworzyłem dane A:", result);
//     return pobieramBPromise;
// }).then(result => {
//     console.log("Wczytałem dane B:", result);
//     return przetwarzamBPromise;
// }).then(result => {
//     console.log("Przetworzyłem dane B:", result);
// }).catch(error => {
//     console.log("Wystapił problem z przetowrzeniem funkcji " + error)
// })

/*
    Promise 2 - tworzenie łancucha wywołan
*/

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Kurs"), 1000);
// })

// promise
// .then(res => {
//     console.log(res);
//     return res + "1";
// })
// .then(res => {
//     console.log(res);
//     return res + "2";
// })
// .then(res => {
//     console.log(res);
//     return res + "3";
// })
// .then(res => {
//     console.log(res);
//     return res + "4";
// })
// .then(res => {
//     console.log(res);
//     return res + "5";
// })

/*
    async/await
*/

const pobieramAPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pobieram dane A"), 1000);
})
const przetwarzamAPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Przetwarzam dane A"), 1000);
})
const pobieramBPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pobieram dane B"), 1000);
})
function przetwarzamBPromise(przekazaneDane) {
    console.log("Przekazane dane: " + przekazaneDane);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Przetwarzam dane B"), 1000);
    })
}

async function pobierzDaneZSerwera() {
    const pobraneDaneA = await pobieramAPromise;
    console.log("Wczytałem dane A:", pobraneDaneA);

    const przetworzoneDaneA = await przetwarzamAPromise;
    console.log("Przetworzyłem dane A:", przetworzoneDaneA);

    const pobraneDaneB = await pobieramBPromise;
    console.log("Wczytałem dane B:", pobraneDaneB);

    const przetworzoneDaneB = await przetwarzamBPromise(pobraneDaneB);
    console.log("Przetworzyłem dane B: ", przetworzoneDaneB);
}

pobierzDaneZSerwera();

switch (key) {
    case value:
        
        break;

    default:
        break;
}