// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;
const decBtn = document.querySelector("[data-action = 'decrement']");
const incBtn = document.querySelector("[data-action = 'increment']");
const valueEl = document.querySelector('#value');
decBtn.style.backgroundColor = 'yellow';
decBtn.style.borderColor = 'pink';
incBtn.style.backgroundColor = 'pink';
incBtn.style.borderColor = 'yellow';


const changeValue = (item) => {
  counterValue += item;
  valueEl.textContent = counterValue;
};
decBtn.addEventListener('click', () => changeValue (-1) );
incBtn.addEventListener('click', () => changeValue (+1) );
