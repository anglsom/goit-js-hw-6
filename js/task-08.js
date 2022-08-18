// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.



const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
  
    if (email.value === '' || password.value === '') {
        return alert('This field cannot be empty')
    } else {
        const formData = { email, password };
        event.currentTarget.reset();
        console.log(formData);
    };
}
    







 