/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
const requestURL = './js/keys.json';
const request = new Request(requestURL);
const response = await fetch(request);
const keysJSON = await response.json();
const { keys } = keysJSON;

let language = 'en';

const sectionTextArea = document.createElement('section');
sectionTextArea.className = 'text-area';
document.body.prepend(sectionTextArea);

const divContainer = document.createElement('div');
divContainer.className = 'container';
sectionTextArea.prepend(divContainer);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('autofocus', 'autofocus');
divContainer.prepend(textarea);

const sectionKeyboard = document.createElement('section');
sectionKeyboard.className = 'keyboard';
document.body.append(sectionKeyboard);

const divKeyboardContainer = document.createElement('div');
divKeyboardContainer.className = 'container';
divKeyboardContainer.id = 'keyboard-container';
sectionKeyboard.prepend(divKeyboardContainer);

let btns;

function addBtn(fn, id, lang, more) {
  const btn = document.createElement('div');
  btn.className = 'btn';
  if (fn === true) {
    btn.classList.add('fn-btn');
    if (more === 'space') {
      btn.classList.add('space');
    } else if (more === 'shift-right') {
      btn.classList.add('shift-right');
    } else if (more === 'shift-left') {
      btn.classList.add('shift-left');
    } else if (more === 'enter') {
      btn.classList.add('enter');
    } else if (more === 'caps-lock') {
      btn.classList.add('caps-lock');
    } else if (more === 'tab') {
      btn.classList.add('tab');
    } else if (more === 'ctrl-right') {
      btn.classList.add('ctrl-right');
    } else if (more === 'ctrl-left') {
      btn.classList.add('ctrl-left');
    } else if (more === 'alt-right') {
      btn.classList.add('alt-right');
    } else if (more === 'alt-left') {
      btn.classList.add('alt-left');
    } else if (more === 'backspace') {
      btn.classList.add('backspace');
    } else if (more === 'del') {
      btn.classList.add('del');
    } else if (more === 'win') {
      btn.classList.add('win');
    }
  }
  if (more === 'up') {
    btn.classList.add('up');
  } else if (more === 'down') {
    btn.classList.add('down');
  } else if (more === 'right') {
    btn.classList.add('right');
  } else if (more === 'left') {
    btn.classList.add('left');
  }
  divKeyboardContainer.append(btn);

  if (fn === false) {
    const symbol = document.createElement('span');
    symbol.className = 'content-symbol';
    btn.append(symbol);
    const span = document.createElement('span');
    span.className = 'content';
    btn.append(span);

    if (lang === 'ru') {
      symbol.innerHTML = id.symbolRu;
      span.innerHTML = id.contentRu;
    } else {
      symbol.innerHTML = id.symbol;
      span.innerHTML = id.content;
    }
  } else {
    const span = document.createElement('span');
    span.className = 'content';
    btn.append(span);
    if (lang === 'ru') {
      span.innerHTML = id.contentRu;
    } else {
      span.innerHTML = id.content;
    }
  }
}

function drawKeyboard() {
  for (let i = 0; i < keys.length; i++) {
    if (i === 13) {
      addBtn(true, keys[i], language, 'backspace');
    } else if (i === 14) {
      addBtn(true, keys[i], language, 'tab');
    } else if (i === 28) {
      addBtn(true, keys[i], language, 'del');
    } else if (i === 29) {
      addBtn(true, keys[i], language, 'caps-lock');
    } else if (i === 41) {
      addBtn(true, keys[i], language, 'enter');
    } else if (i === 42) {
      addBtn(true, keys[i], language, 'shift-right');
    } else if (i === 53) {
      addBtn(false, keys[i], language, 'up');
    } else if (i === 54) {
      addBtn(true, keys[i], language, 'shift-left');
    } else if (i === 55) {
      addBtn(true, keys[i], language, 'ctrl-right');
    } else if (i === 56) {
      addBtn(true, keys[i], language, 'win');
    } else if (i === 57) {
      addBtn(true, keys[i], language, 'alt-right');
    } else if (i === 58) {
      addBtn(true, keys[i], language, 'space');
    } else if (i === 59) {
      addBtn(true, keys[i], language, 'alt-left');
    } else if (i === 60) {
      addBtn(true, keys[i], language, 'ctrl-left');
    } else if (i === 61) {
      addBtn(false, keys[i], language, 'left');
    } else if (i === 62) {
      addBtn(false, keys[i], language, 'down');
    } else if (i === 63) {
      addBtn(false, keys[i], language, 'right');
    } else {
      addBtn(false, keys[i], language);
    }
  }
  btns = document.querySelectorAll('.btn');
}

drawKeyboard();

function langKeyboard() {
  divKeyboardContainer.innerHTML = '';
  drawKeyboard();
  btns = document.querySelectorAll('.btn');
}

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.ctrlKey) {
    if (language === 'en') {
      language = 'ru';
    } else {
      language = 'en';
    }
    langKeyboard();
    console.log(language);
  }
});

for (const btn of btns) {
  btn.addEventListener('click', (event) => {
    if (event.target.classList.contains('fn-btn')) {
      textarea.innerHTML += btn.children[0].innerHTML.toLocaleLowerCase();
    } else {
      textarea.innerHTML += btn.children[1].innerHTML.toLocaleLowerCase();
    }
  });
}

document.body.addEventListener('keydown', (index) => {
  for (const btn of btns) {
    for (const item of btn.children) {
      if (item.innerHTML.toLocaleLowerCase() === index.key.toLocaleLowerCase()) {
        btn.classList.add('active');
      }
    }
  }
});

document.body.addEventListener('keyup', (index) => {
  for (const btn of btns) {
    for (const item of btn.children) {
      if (item.innerHTML.toLocaleLowerCase() === index.key.toLocaleLowerCase()) {
        btn.classList.remove('active');
      }
    }
  }
});
