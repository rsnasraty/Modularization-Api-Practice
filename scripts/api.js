//purpose is to connect to api
//dependencies: keys.js

function getApiFood() {
    let apiUrl = "https://api.edamam.com/api/food-database/parser"
    let apiId = app_keys.app_id
    let apiKey = app_keys.app_key

    return fetch(`${apiUrl}?ingr=${searchInput.value}&app_id=${apiId}&app_key=${apiKey}`)
    .then( foodData => foodData.json())
}






