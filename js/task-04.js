const value = document.querySelector("#value");

const decrement = document.querySelector('button[data-action="decrement"]');

const handleClick = () => {
  value.textContent = Number(value.textContent) - 1;
  console.log("dec: " + value.textContent);
};
decrement.addEventListener("click", handleClick);

const increment = document.querySelector('button[data-action="increment"]');

const handleClickUp = () => {
  value.textContent = Number(value.textContent) + 1;
  console.log("inc: " + value.textContent);
};
increment.addEventListener("click", handleClickUp);
