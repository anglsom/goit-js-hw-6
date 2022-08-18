// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBtn = document.querySelector('.change-color');
const item = document.querySelector('.color');

colorBtn.addEventListener('click', btnClick);

function btnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  item.textContent = color;
};

