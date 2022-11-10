const input = document.querySelector("#validation-input");

function onInputBlur(event) {
  const dataLength = parseInt(event.currentTarget.getAttribute("data-length"));
  const inputLength = input.value.length;

  inputLength === dataLength
    ? (input.classList.add("valid"), input.classList.remove("invalid"))
    : (input.classList.add("invalid"), input.classList.remove("valid"));
}

input.addEventListener("blur", onInputBlur);
