
function loadUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("user data"); }, 1000)
    });
}

function loadBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("books data"); }, 1000)
    });
}

function loadPets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("pets data"); }, 2000)
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