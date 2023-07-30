const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("#ingredients");
const oneIngredient = ingredients.map((elem) => {
  const liCreate = document.createElement("li");
  liCreate.textContent = elem;
  liCreate.classList.add("item");
  return liCreate
})
ulList.append(...oneIngredient);
