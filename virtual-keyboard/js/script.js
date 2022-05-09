let requestURL = "./js/keys.json";
const request = new Request(requestURL);
const response = await fetch(request);
const keysJSON = await response.json();
let keys = keysJSON['keys'];

let language = "en";
let symbol;
let span;

let sectionTextArea = document.createElement('section');
sectionTextArea.className = "text-area";
document.body.prepend(sectionTextArea);

let divContainer = document.createElement('div');
divContainer.className = "container";
sectionTextArea.prepend(divContainer);

let textarea = document.createElement('textarea');
textarea.className = "textarea";
textarea.setAttribute("autofocus", "autofocus")
divContainer.prepend(textarea);

let sectionKeyboard = document.createElement('section');
sectionKeyboard.className = "keyboard";
document.body.append(sectionKeyboard);

let divKeyboardContainer = document.createElement('div');
divKeyboardContainer.className = "container";
divKeyboardContainer.id = "keyboard-container";
sectionKeyboard.prepend(divKeyboardContainer);

let str1 = document.createElement('div');
str1.className = "str";
str1.classList.add('str-1');
divKeyboardContainer.append(str1);

let str2 = document.createElement('div');
str2.className = "str";
str2.classList.add('str-2');
divKeyboardContainer.append(str2);

let str3 = document.createElement('div');
str3.className = "str";
str3.classList.add('str-3');
divKeyboardContainer.append(str3);

let str4 = document.createElement('div');
str4.className = "str";
str4.classList.add('str-4');
divKeyboardContainer.append(str4);

let str5 = document.createElement('div');
str5.className = "str";
str5.classList.add('str-5');
divKeyboardContainer.append(str5);

function addBtn(str, fn, id, lang, more) {
  let btn = document.createElement('div');
  btn.className = "btn";
  if (fn == true) {
    btn.classList.add('fn-btn');
    if (more == "space") {
      btn.classList.add('space');
    } else if (more == "shift-right") {
      btn.classList.add('shift-right');
    } else if (more == "shift-left") {
      btn.classList.add('shift-left');
    } else if (more == "enter") {
      btn.classList.add('enter');
    } else if (more == "caps-lock") {
      btn.classList.add('caps-lock');
    } else if (more == "tab") {
      btn.classList.add('tab');
    } else if (more == "ctrl-right") {
      btn.classList.add('ctrl-right');
    } else if (more == "ctrl-left") {
      btn.classList.add('ctrl-left');
    } else if (more == "alt-right") {
      btn.classList.add('alt-right');
    } else if (more == "alt-left") {
      btn.classList.add('alt-left');
    }
  }
  if (more == "up") {
    btn.classList.add("up");
  } else if (more == "down") {
    btn.classList.add("down");
  }
  else if (more == "right") {
    btn.classList.add("right");
  }
  else if (more == "left") {
    btn.classList.add("left");
  }
  str.append(btn);

  if (fn == false) {
    let symbol = document.createElement('span');
    symbol.className = "content";
    symbol.classList.add('symbol');
    btn.append(symbol);

    let span = document.createElement('span');
    span.className = "content";
    btn.append(span);

    if (lang == "ru") {
      symbol.innerHTML = id.symbolRu;
      span.innerHTML = id.contentRu;
    } else {
      symbol.innerHTML = id.symbol;
      span.innerHTML = id.content;
    }
  } else {
    let span = document.createElement('span');
    span.className = "content";
    btn.append(span);
    if (lang == "ru") {
      span.innerHTML = id.contentRu;
    } else {
      span.innerHTML = id.content;
    }
  }
}

drawKeyboard();

function langKeyboard() {
  str1.innerHTML = "";
  str2.innerHTML = "";
  str3.innerHTML = "";
  str4.innerHTML = "";
  str5.innerHTML = "";
  drawKeyboard();
}

document.addEventListener('keydown', function(event) {
  if (event.shiftKey && event.altKey) {
    if (language == "en") {
      language = "ru";
    } else {
      language = "en";
    }
    langKeyboard();
    console.log(language);
  }
});

function drawKeyboard() {
  addBtn(str1, false, keys[0], language);
  addBtn(str1, false, keys[1], language);
  addBtn(str1, false, keys[2], language);
  addBtn(str1, false, keys[3], language);
  addBtn(str1, false, keys[4], language);
  addBtn(str1, false, keys[5], language);
  addBtn(str1, false, keys[6], language);
  addBtn(str1, false, keys[7], language);
  addBtn(str1, false, keys[8], language);
  addBtn(str1, false, keys[9], language);
  addBtn(str1, false, keys[10], language);
  addBtn(str1, false, keys[11], language);
  addBtn(str1, false, keys[12], language);
  addBtn(str1, true, keys[13], language);
  addBtn(str2, true, keys[14], language);
  addBtn(str2, false, keys[15], language);
  addBtn(str2, false, keys[16], language);
  addBtn(str2, false, keys[17], language);
  addBtn(str2, false, keys[18], language);
  addBtn(str2, false, keys[19], language);
  addBtn(str2, false, keys[20], language);
  addBtn(str2, false, keys[21], language);
  addBtn(str2, false, keys[22], language);
  addBtn(str2, false, keys[23], language);
  addBtn(str2, false, keys[24], language);
  addBtn(str2, false, keys[25], language);
  addBtn(str2, false, keys[26], language);
  addBtn(str2, false, keys[27], language);
  addBtn(str2, true, keys[28], language);
  addBtn(str3, true, keys[29], language, "caps-lock");
  addBtn(str3, false, keys[30], language);
  addBtn(str3, false, keys[31], language);
  addBtn(str3, false, keys[32], language);
  addBtn(str3, false, keys[33], language);
  addBtn(str3, false, keys[34], language);
  addBtn(str3, false, keys[35], language);
  addBtn(str3, false, keys[36], language);
  addBtn(str3, false, keys[37], language);
  addBtn(str3, false, keys[38], language);
  addBtn(str3, false, keys[39], language);
  addBtn(str3, false, keys[40], language);
  addBtn(str3, true, keys[41], language, "enter");
  addBtn(str4, true, keys[42], language, "shift-right");
  addBtn(str4, false, keys[43], language);
  addBtn(str4, false, keys[44], language);
  addBtn(str4, false, keys[45], language);
  addBtn(str4, false, keys[46], language);
  addBtn(str4, false, keys[47], language);
  addBtn(str4, false, keys[48], language);
  addBtn(str4, false, keys[49], language);
  addBtn(str4, false, keys[50], language);
  addBtn(str4, false, keys[51], language);
  addBtn(str4, false, keys[52], language);
  addBtn(str4, false, keys[53], language, "up");
  addBtn(str4, true, keys[54], language, "shift-left");
  addBtn(str5, true, keys[55], language, "ctrl-right");
  addBtn(str5, true, keys[56], language, "alt-right");
  addBtn(str5, true, keys[57], language);
  addBtn(str5, true, keys[58], language, "space");
  addBtn(str5, true, keys[59], language, "alt-left");
  addBtn(str5, true, keys[60], language, "ctrl-left");
  addBtn(str5, false, keys[61], language, "left");
  addBtn(str5, false, keys[62], language, "down");
  addBtn(str5, false, keys[63], language, "right");
}
