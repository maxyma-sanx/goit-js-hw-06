const refs = {
  input: document.querySelector("#controls input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.input.value = refs.input.min;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = refs.input.value;

  const boxesArr = [];

  for (let i = 0, k = 30; i < amount; i += 1, k += 10) {
    boxesArr.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${k}px; height: ${k}px"></div>`
    );
  }

  refs.boxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = refs.input.min;
}

refs.create.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
  createBoxes();
});

refs.destroy.addEventListener("click", destroyBoxes);
