function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10; 
    elements.push(div);
  }

  boxesContainer.append(...elements); 
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    destroyBoxes(); 
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});



