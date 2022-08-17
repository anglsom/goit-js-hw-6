// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const totalCategories = document.querySelector('#categories');
console.log("Number Of categories:", totalCategories.children.length);
const itemCategories = document.querySelectorAll('.item');
itemCategories.forEach(element => {
    const title = element.querySelector('h2');
    const numbers = element.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${numbers.length}`);
});




