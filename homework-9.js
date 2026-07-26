// 9.4
const subscribeForm = document.querySelector('#subscribe-form');
const inputEmail = document.querySelector('#subscribe-form input');

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailValue = inputEmail.value;
  if (emailValue === '') {
    alert('Пожалуйста, введите ваш email.');
    return;
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    alert('Пожалуйста, введите корректный адрес почты.');
    return;
  }
  const formData = {
    email: emailValue
  };
  console.log(formData);
})

const openBtn = document.querySelector('#open-modal-btn');
const closeBtn = document.querySelector('.close-modal-btn');
const modalWindow = document.querySelector('.modal');
const registerForm = document.querySelector('#register-form');
const firstNameInput = document.querySelector('#reg-firstname');
const lastNameInput = document.querySelector('#reg-lastname');
const birthdateInput = document.querySelector('#reg-birthdate');
const passwordInput = document.querySelector('#reg-password');
const confirmPasswordInput = document.querySelector('#reg-password-confirm');

let user = null;

openBtn.addEventListener('click', function () {
  modalWindow.classList.add('modal-showed');
});

closeBtn.addEventListener('click', function () {
  modalWindow.classList.remove('modal-showed');
});

registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Регистрация отклонена: пароли не совпадают!');
    return;
  }

  if (!registerForm.checkValidity()) {
    alert('Регистрация отклонена: форма заполнена неверно!');
  }

  user = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    birthdate: birthdateInput.value,
    password: passwordInput.value,
    createdOn: new Date()
  };

  console.log('Пользователь успешно зарегистрирован:', user);

  registerForm.reset();
  modalWindow.classList.remove('modal-showed');
});