const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}\n\n`);

categoriesItems.forEach((item) => {
  const categoriesItemsTitle = item.querySelector("h2").textContent;
  const categoriesItemsLength = item.querySelectorAll("li").length;

  console.log(
    `Category: ${categoriesItemsTitle}\nElements: ${categoriesItemsLength}\n\n`
  );
});
