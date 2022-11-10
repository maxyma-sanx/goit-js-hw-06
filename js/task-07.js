const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

function onInputChange(event) {
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}

refs.input.addEventListener("input", onInputChange);
