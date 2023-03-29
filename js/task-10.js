function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsDiv: document.querySelector('#controls'),
  createBtn: document.querySelector('[data-create]'),
  boxesArea: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateClick);

function onCreateClick(event){
  event.preventDefault();
  let htmlString = '';
  console.dir(refs.controlsDiv.firstElementChild.value);
  for (let i = 0; i < refs.controlsDiv.firstElementChild.value; i += 1) {
    console.log(30+i*10);
    const size = 30+i*10;
  htmlString += `<div style="
  border: 1px solid #333333;
  width:${size}px;
  height:${size}px;
  "></div>`
    
  }
  refs.boxesArea.innerHTML = htmlString;
}

// console.dir(refs.controlsDiv.firstChild.value);

function createBoxes(amount) {}