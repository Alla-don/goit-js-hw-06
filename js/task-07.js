const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");
spanEl.style.fontSize = `${inputEl.value}px`;
console.log(inputEl);
console.log(spanEl);

const changeFontSize = () => {
  const valueEl = inputEl.value;
  spanEl.style.fontSize = `${valueEl}px`;

  console.log(valueEl);
  console.log(spanEl.style.fontSize);
};

inputEl.addEventListener("input", changeFontSize);
