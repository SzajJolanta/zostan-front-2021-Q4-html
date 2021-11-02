var fetch = fetch('https://reqres.in/api/users?page=1');

fetch.then(function(response){
    return response.json();
}).then((posts) => {
    document.getElementById("container").innerHTML = JSON.stringify(posts);
}).catch((error) => {
    console.log("Error message: " + error);
})