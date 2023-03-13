const incrBtn = document.querySelector('[data-action="increment"')
const decrBtn = document.querySelector('[data-action="decrement"')
const counterValue = document.querySelector('#value')

counterValue.textContent = 0;
incrBtn.addEventListener('click', () => {counterValue.textContent = parseInt(counterValue.textContent) + 1});
decrBtn.addEventListener('click', () => counterValue.textContent -= 1);