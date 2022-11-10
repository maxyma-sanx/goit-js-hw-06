const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

function onInputChange(event) {
  refs.input.value.length
    ? (refs.output.textContent = event.currentTarget.value)
    : (refs.output.textContent = "Anonymous");
}

refs.input.addEventListener("input", onInputChange);
