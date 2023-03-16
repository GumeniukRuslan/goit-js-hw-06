const inputValue = document.querySelector('#name-input')
const outputValue = document.querySelector('#name-output')


inputValue.addEventListener('input', event => {
  outputValue.textContent = event.currentTarget.value
  if (!event.currentTarget.value.trim()) {
    outputValue.textContent = 'Anonymous'
  }
})
