//defines how to make that food DOM component you build component for food here and insert it into the DOM
//dependencies: none
function createFoodComponent(foodObj) {
    return `
    <h2>${foodObj.name}</h2>
    <h3> This is some food</h3>
    <img src=${foodObj.image}>
    `
}

function AddFoodComponentToDom(foodComponent, element){
    document.querySelector(`#${element}`).innerHtml += foodComponent
}