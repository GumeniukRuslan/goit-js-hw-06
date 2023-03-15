function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const inputValue = controls.querySelector('input'); 
const createBtn = controls.querySelector('[data-create]'); 
const destroyBtn = controls.querySelector('[data-destroy]');
const resultBox = document.querySelector('#boxes');

function createBoxes(amount) {
  if (inputValue.value > 100 || inputValue.value < 1) {
    return alert('Введіть число від 1 до 100!');
  }

  const boxesToAppend = []
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + (i * 10) + 'px';
    box.style.height = 30 + (i * 10) + 'px';
    boxesToAppend.push(box);
  }
  return resultBox.append(...boxesToAppend);
}

function destroyBoxes() {
   resultBox.innerHTML = '';
    inputValue.value = '';  
}

createBtn.addEventListener('click', () => createBoxes(inputValue.value));
destroyBtn.addEventListener('click', () => destroyBoxes());