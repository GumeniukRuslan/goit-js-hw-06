const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', event => {
  if (event.currentTarget.value.length !== parseInt(inputValue.dataset.length)) {
    inputValue.classList.add('invalid')
  } else {
    inputValue.classList.add('valid')
  }
})