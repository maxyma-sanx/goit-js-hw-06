const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  email.value && password.value
    ? console.log({
        [email.name]: email.value,
        [password.name]: password.value,
      })
    : alert("Все поля должны быть заполнены");

  event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);
