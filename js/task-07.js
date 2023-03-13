const inputValue = document.querySelector('#font-size-control')
const outputFont = document.querySelector('#text')


inputValue.addEventListener('input', event => outputFont.style.fontSize = event.currentTarget.value + 'px')


