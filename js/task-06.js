// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', blur);

function blur () {
    if (inputValid.value.length === Number(inputValid.dataset.length)) {
        inputValid.classList.add('valid');
        inputValid.classList.remove('invalid');
    } else {
        inputValid.classList.add('invalid');
        inputValid.classList.remove('valid');
    }};