const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const categoryAmount = categoryItems.length;
console.log(`Кількість категорій: ${categoryAmount}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const categoryElementsCount =
    categoryItem.querySelectorAll("ul > li").length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Елементи: ${categoryElementsCount}`);
});