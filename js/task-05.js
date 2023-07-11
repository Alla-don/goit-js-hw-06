const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");
console.log(inputEl);
inputEl.addEventListener("input", (event) => {
  if (inputEl.value) {
    return (outputEl.textContent = event.currentTarget.value);
  }
  return (outputEl.textContent = "Anonymous");
});
