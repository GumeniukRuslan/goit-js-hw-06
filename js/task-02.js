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
  const append = []

  ingredients.forEach(el => {
    const ingredient = document.createElement('li');
    ingredient.textContent = el;
    ingredient.classList.add('item')
    append.push(ingredient)
    
  })

  return ingredientsList.append(...append)
}

appendIngredients(ingredients);