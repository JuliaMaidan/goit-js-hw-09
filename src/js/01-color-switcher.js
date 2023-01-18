function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]')
const stoptBtn = document.querySelector('[data-stop]')
const body = document.querySelector('body')

let timer;

const changeBackgroundColor = (e) => {
    timer = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
        e.target.disabled = true;
    }, 1000);
}

const stopChanging = (e) => {
    clearInterval(timer);
    body.style.backgroundColor = 'white';
    startBtn.disabled = false;
}

startBtn.addEventListener('click', changeBackgroundColor)
stoptBtn.addEventListener('click', stopChanging)