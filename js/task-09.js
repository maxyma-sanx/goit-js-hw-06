const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorButtonClick() {
  console.log(refs.body.style.color);
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}

refs.button.addEventListener("click", onChangeColorButtonClick);
