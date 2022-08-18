// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.





const inputSizeRef = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
const control = (event) => spanText.style.fontSize = `${event.currentTarget.value}px`;
inputSizeRef.addEventListener('input', control);
