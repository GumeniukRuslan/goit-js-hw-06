const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', event => {
  if (event.currentTarget.value.length !== parseInt(inputValue.dataset.length)) {
    inputValue.classList.remove('valid')
    inputValue.classList.add('invalid')
  } else {
    inputValue.classList.remove('invalid')
    inputValue.classList.add('valid')
  }
})