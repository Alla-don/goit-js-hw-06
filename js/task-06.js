const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

const validInput = document.querySelector("#validation-input.valid");
const invalidInput = document.querySelector("#validation-input.invalid");

function handleQuery(evt) {
  if (evt.currentTarget.value.length === Number(dataLength)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
inputEl.addEventListener("blur", handleQuery);
console.log(dataLength);
