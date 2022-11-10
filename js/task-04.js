class Counter {
  constructor({ counterValue = 0, step = 1, selector } = {}) {
    this.value = counterValue;
    this.step = step;
    this.selector = selector;

    this.elements = this.getRefs();

    this.bindEvents();
    this.updateCounter();
  }

  increment() {
    this.value += this.step;
  }

  decrement() {
    this.value -= this.step;
  }

  getRefs() {
    const container = document.querySelector(this.selector);
    return {
      decrement: container.querySelector("[data-action=decrement]"),
      increment: container.querySelector("[data-action=increment]"),
      value: container.querySelector("#value"),
    };
  }

  bindEvents() {
    this.elements.increment.addEventListener("click", () => {
      this.increment();
      this.updateCounter();
    });

    this.elements.decrement.addEventListener("click", () => {
      this.decrement();
      this.updateCounter();
    });
  }

  updateCounter() {
    this.elements.value.textContent = this.value;
  }
}

const counter = new Counter({ selector: "#counter" });

// ============================================================
// Обычный способ

// const refs = {
//   decrement: document.querySelector("[data-action=decrement]"),
//   increment: document.querySelector("[data-action=increment]"),
//   value: document.querySelector("#value"),
// };

// let counterValue = 0;

// function onDecrementBtnClick() {
//   counterValue -= 1;
//   value.textContent = counterValue;
// }

// function onIncrementBtnClick() {
//   counterValue += 1;
//   value.textContent = counterValue;
// }

// refs.decrement.addEventListener("click", onDecrementBtnClick);
// refs.increment.addEventListener("click", onIncrementBtnClick);
