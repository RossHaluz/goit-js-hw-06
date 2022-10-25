const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = ingredient
  
  return itemEl
})

listIngredients.append(...elements)



// for (let i = 0; i < ingredients.length; i += 1){
//   const item = document.createElement('li')
//   item.textContent = ingredients[i];
//   item.classList.add('item')
//   listIngredients.append(item)
// }
// console.log(listIngredients)
