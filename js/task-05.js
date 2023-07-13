const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");
console.log(inputEl);
inputEl.addEventListener("input", (event) => {
  if (inputEl.value.trim()) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
});
