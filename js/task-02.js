const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const appendIngredients = ingredients => {
  const appendItems = []

  ingredients.forEach(el => {
    const ingredient = document.createElement('li');
    ingredient.textContent = el;
    ingredient.classList.add('item')
    appendItems.push(ingredient)
    
  })

  return ingredientsList.append(...appendItems)
}

appendIngredients(ingredients);