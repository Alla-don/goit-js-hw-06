const list = document.querySelector("ul");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map((ingredient) => {
  const itemLi = document.createElement("li");
  itemLi.classList.add("item");
  itemLi.textContent = ingredient;
  return itemLi;
});
console.log(items);
list.append(...items);
