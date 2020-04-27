//dependencies: food.js and api.js


let searchInput = document.querySelector("#searchInput")

document.querySelector("#search-btn").addEventListener("click", () => {
getApiFood()
.then( (foodData) => {
    document.querySelector("#search-results").innerHTML = ""
    //innerHTML set to nothing so you can see results one at a time 
    AddFoodComponentToDom(createFoodComponent(
        {
            name: foodData.parsed[0].food.label, 
            image:foodData.parsed[0].food.image 
        }
        ), "search-results")
    //in another place u define how to add food to the dom and in another how to make that food component
})
})