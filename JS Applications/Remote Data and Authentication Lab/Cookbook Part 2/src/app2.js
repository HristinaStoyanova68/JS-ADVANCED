const baseUrl = 'http://localhost:3030/jsonstore/cookbook/recipes';

window.addEventListener('load', () => {

    fetch(baseUrl)
        .then(response => response.json())
        .then(recipes => {
            renderRecipes(Object.values(recipes));
        })
});

function renderRecipes(recipes) {

    const mainElement = document.querySelector('main');
    mainElement.innerHTML = '';

    recipes.forEach(element => {
        mainElement.appendChild(createRecipe(element));
    });
}

function createRecipe(recipe) {
    const recipeElement = document.createElement('article');
    recipeElement.classList.add('preview');

    recipeElement.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/cookbook/details/${recipe._id}`)
            .then(response => response.json())
            .then(details => {
                const mainElement = document.querySelector('main');
                mainElement.innerHTML = '';

                mainElement.appendChild(renderDetailsRecipe(details));
            })
    });

    const firstDivElement = document.createElement('div');
    firstDivElement.classList.add('title');

    const h2Element = document.createElement('h2');
    h2Element.textContent = recipe.name;

    const secondDivElement = document.createElement('div');
    secondDivElement.classList.add('small');

    const imgElement = document.createElement('img');
    imgElement.src = recipe.img;

    firstDivElement.appendChild(h2Element);
    secondDivElement.appendChild(imgElement);
    recipeElement.appendChild(firstDivElement);
    recipeElement.appendChild(secondDivElement);

    return recipeElement;
}

function renderDetailsRecipe(details) {
    const recipeElement = document.createElement('article');

    const h2Element = document.createElement('h2');
    h2Element.textContent = details.name;

    const firstDivElement = document.createElement('div');
    firstDivElement.classList.add('band');
    const firstInFirstDivElement = document.createElement('div');
    firstInFirstDivElement.classList.add('thumb');
    const imgElement = document.createElement('img');
    imgElement.src = details.img;
    const secondInFirstDivElement = document.createElement('div');
    secondInFirstDivElement.classList.add('ingredients');
    const h3Element = document.createElement('h3');
    h3Element.textContent = 'Ingredients:';
    const ulElement = document.createElement('ul');

    for (const element of details.ingredients) {
        const liElement = document.createElement('li');
        liElement.textContent = element;
        ulElement.appendChild(liElement);
    }
    //ulElement.appendChild(details.ingredients.map(x => `<li>${x}</li>`));
    // const firstLiElement = document.createElement('li');
    // firstLiElement.textContent = details.ingredients[0];
    // const secondLiElement = document.createElement('li');
    // secondLiElement.textContent = details.ingredients[1];
    // const thirdLiElement = document.createElement('li');
    // thirdLiElement.textContent = details.ingredients[2];
    // const fourthLiElement = document.createElement('li');
    // fourthLiElement.textContent = details.ingredients[3];

    firstInFirstDivElement.appendChild(imgElement);
    // ulElement.appendChild(firstLiElement);
    // ulElement.appendChild(secondLiElement);
    // ulElement.appendChild(thirdLiElement);
    // ulElement.appendChild(fourthLiElement);
    secondInFirstDivElement.appendChild(h3Element);
    secondInFirstDivElement.appendChild(ulElement);
    firstDivElement.appendChild(firstInFirstDivElement);
    firstDivElement.appendChild(secondInFirstDivElement);

    const secondDivElement = document.createElement('div');
    secondDivElement.classList.add('description');
    const secondH3Element = document.createElement('h3');
    secondH3Element.textContent = 'Preparation:';
    secondDivElement.appendChild(secondH3Element);


    for (const element of details.steps) {
        const pElement = document.createElement('p');
        pElement.textContent = element;
        secondDivElement.appendChild(pElement);
    }
    // const firstPElement = document.createElement('p');
    // firstPElement.textContent = details.steps[0];
    // const secondPElement = document.createElement('p');
    // secondPElement.textContent = details.steps[1];
    // const thirdPElement = document.createElement('p');
    // thirdPElement.textContent = details.steps[2];

    // secondDivElement.appendChild(firstPElement);
    // secondDivElement.appendChild(secondPElement);
    // secondDivElement.appendChild(thirdPElement);

    recipeElement.appendChild(h2Element);
    recipeElement.appendChild(firstDivElement);
    recipeElement.appendChild(secondDivElement);

    return recipeElement;
}