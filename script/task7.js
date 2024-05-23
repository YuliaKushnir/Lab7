// Отримуємо елемент ul#categories
const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

// Порахуємо і виведемо в консоль кількість категорій
const categoryAmount = categoryItems.length;
console.log(`Кількість категорій: ${categoryAmount}`);

// Виведемо текст заголовку та кількість елементів в категорії
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const categoryElementsCount =
    categoryItem.querySelectorAll("ul > li").length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Елементи: ${categoryElementsCount}`);
});