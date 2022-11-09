const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

function createIngredients(ingredients) {
  return ingredients.map((item) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.textContent = item;
    ingredientsItem.classList.add("item");
    return ingredientsItem;
  });
}
ingredientsList.append(...createIngredients(ingredients));
