// Задание 1
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
const listCategoryEl = document.querySelector('.item');
const quantityListEl = document.querySelectorAll('li.item').length;
console.log(`В списке ${quantityListEl} категории.`);

const itemCategoryEl = Array.from(document.querySelectorAll('.item'));
itemCategoryEl.forEach(value => {
  const titleEl = value.firstElementChild.textContent;
  const quantityEl = value.querySelectorAll('li').length;
  console.log(`Категория: ${titleEl} \nКоличество элементов: ${quantityEl}`);
});
