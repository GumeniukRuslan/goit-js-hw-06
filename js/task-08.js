const formEl = document.querySelector('.login-form')
const emailInput = document.querySelector('[name="email"]')
const passInput = document.querySelector('[name="password"]')
const submitBtn = document.querySelector('[type="submit"]')


formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailInput.value || !passInput.value) {
    return alert('Всі поля повинні бути заповнені!')
  }
  const userData = {
    email: emailInput.value,
    password: passInput.value,
  };
  
  console.log(userData);
  formEl.reset();
})