// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}\n\n`);

// 2 Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

categoriesItems.forEach((item) => {
  const categoriesItemsTitle = item.querySelector("h2").textContent;
  const categoriesItemsLength = item.querySelectorAll("li").length;

  console.log(
    `Category: ${categoriesItemsTitle}\nElements: ${categoriesItemsLength}\n\n`
  );
});
