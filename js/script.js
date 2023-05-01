/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import keys from './keys.js';

let lang = 'eng';
let caps = false;
let leftShift = false;
let rightShift = false;
let AltLeft = false;
let ControlLeft = false;
let cursor = 0;
//
function createAndFillRow(keyboard, arrayOfElements) {
  const currRow = document.createElement('div');
  currRow.classList.add('row');
  keyboard.append(currRow);

  arrayOfElements.forEach((el) => {
    const newKey = document.createElement('div');
    newKey.classList.add('key', `${el.name}`);
    newKey.id = `${el.name}0`;
    currRow.append(newKey);

    const enSpan = document.createElement('span');
    enSpan.classList.add('eng');
    enSpan.innerHTML = `${el.eng}`;
    enSpan.id = `${el.name}1`;
    newKey.append(enSpan);

    const ruSpan = document.createElement('span');
    ruSpan.classList.add('rus');
    ruSpan.innerHTML = `${el.rus}`;
    ruSpan.id = `${el.name}2`;
    newKey.append(ruSpan);

    const enShiftSpan = document.createElement('span');
    enShiftSpan.classList.add('shiftEng');
    enShiftSpan.innerHTML = `${el.shiftEng}`;
    enShiftSpan.id = `${el.name}3`;
    newKey.append(enShiftSpan);

    const ruShiftSpan = document.createElement('span');
    ruShiftSpan.classList.add('shiftRus');
    ruShiftSpan.innerHTML = `${el.shiftRus}`;
    ruShiftSpan.id = `${el.name}4`;
    newKey.append(ruShiftSpan);
  });
}

// Add html elemets
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const label = document.createElement('label');
label.classList.add('header');
label.innerHTML = 'RSS Virtual Keyboard';
wrapper.append(label);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
label.append(textarea);
textarea.focus();

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

// add 5 rows with keys to keyboard block
createAndFillRow(keyboard, keys.slice(0, 14));
createAndFillRow(keyboard, keys.slice(14, 29));
createAndFillRow(keyboard, keys.slice(29, 42));
createAndFillRow(keyboard, keys.slice(42, 55));
createAndFillRow(keyboard, keys.slice(55, 64));

const descriptionWin = document.createElement('p');
descriptionWin.classList.add('description');
descriptionWin.innerHTML = 'Created at Windows OS.';
wrapper.append(descriptionWin);

const descriptionLang = document.createElement('p');
descriptionLang.classList.add('description');
descriptionLang.innerHTML = 'Press CtrlLeft + AltLeft to change language.';
wrapper.append(descriptionLang);

// Change keys in accordance with language and Shift
function updateKeys() {
  const rusSpans = document.querySelectorAll('.rus');
  const engSpans = document.querySelectorAll('.eng');
  const rusShiftSpans = document.querySelectorAll('.shiftRus');
  const engShiftSpans = document.querySelectorAll('.shiftEng');
  if (lang === 'rus') {
    if (caps === true) {
      if (leftShift === true || rightShift === true) {
        // Its lower case rus lang, hide all spans exept rus lower case
        rusSpans.forEach((el) => {
          el.classList.remove('hidden');
        });
        engSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        rusShiftSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        engShiftSpans.forEach((el) => {
          el.classList.add('hidden');
        });
      } else {
        // Its upper case rus lang, hide all spans exept rus upper case
        rusSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        engSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        rusShiftSpans.forEach((el) => {
          el.classList.remove('hidden');
        });
        engShiftSpans.forEach((el) => {
          el.classList.add('hidden');
        });
      }
    } else if (leftShift === true || rightShift === true) {
      // Its upper case rus lang, hide all spans exept rus upper case
      rusSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      engSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      rusShiftSpans.forEach((el) => {
        el.classList.remove('hidden');
      });
      engShiftSpans.forEach((el) => {
        el.classList.add('hidden');
      });
    } else {
    // Its lower case rus lang, hide all spans exept rus lower case
      rusSpans.forEach((el) => {
        el.classList.remove('hidden');
      });
      engSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      rusShiftSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      engShiftSpans.forEach((el) => {
        el.classList.add('hidden');
      });
    }
  } else if (lang === 'eng') {
    // eng lang
    if (caps === true) {
      if (leftShift === true || rightShift === true) {
      // Its lower case eng lang, hide all spans exept eng lower case
        rusSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        engSpans.forEach((el) => {
          el.classList.remove('hidden');
        });
        rusShiftSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        engShiftSpans.forEach((el) => {
          el.classList.add('hidden');
        });
      } else {
      // Its upper case eng lang, hide all spans exept eng upper case
        rusSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        engSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        rusShiftSpans.forEach((el) => {
          el.classList.add('hidden');
        });
        engShiftSpans.forEach((el) => {
          el.classList.remove('hidden');
        });
      }
    } else if (leftShift === true || rightShift === true) {
    // Its upper case eng lang, hide all spans exept eng upper case
      rusSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      engSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      rusShiftSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      engShiftSpans.forEach((el) => {
        el.classList.remove('hidden');
      });
    } else {
      // Its lower case eng lang, hide all spans exept eng lower case
      rusSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      engSpans.forEach((el) => {
        el.classList.remove('hidden');
      });
      rusShiftSpans.forEach((el) => {
        el.classList.add('hidden');
      });
      engShiftSpans.forEach((el) => {
        el.classList.add('hidden');
      });
    }
  }
}

window.addEventListener('keydown', (e) => {
  if (e.code === 'AltLeft') {
    AltLeft = true;
  } else if (e.code === 'ControlLeft') {
    ControlLeft = true;
  } else if (e.code === 'ShiftLeft') {
    leftShift = true;
    updateKeys();
  } else if (e.code === 'ShiftRight') {
    rightShift = true;
    updateKeys();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'AltLeft') {
    AltLeft = false;
  } else if (e.code === 'ControlLeft') {
    ControlLeft = false;
  } else if (e.code === 'ShiftLeft') {
    leftShift = false;
    updateKeys();
  } else if (e.code === 'ShiftRight') {
    rightShift = false;
    updateKeys();
  } else if (e.code === 'CapsLock') {
    caps = caps !== true;
    updateKeys();
  }
});

// Active keys classes
document.addEventListener('keydown', (e) => {
  if (document.querySelector(`.${e.code}`) === null) {
    return;
  }
  document.querySelector(`.${e.code}`).classList.add('active');
});

document.addEventListener('keyup', (e) => {
  if (document.querySelector(`.${e.code}`) === null) {
    return;
  }
  document.querySelector(`.${e.code}`).classList.remove('active');
});

document.addEventListener('mousedown', (e) => {
  if (e.target.id === '') {
    return;
  }
  if (document.querySelector(`.${e.target.id.substring(0, e.target.id.length - 1)}`) === null) {
    return;
  }
  document.querySelector(`.${e.target.id.substring(0, e.target.id.length - 1)}`).classList.add('active');
});

document.addEventListener('mouseup', (e) => {
  if (e.target.id === '') {
    return;
  }
  if (document.querySelector(`.${e.target.id.substring(0, e.target.id.length - 1)}`) === null) {
    return;
  }
  document.querySelector(`.${e.target.id.substring(0, e.target.id.length - 1)}`).classList.remove('active');
});

// Language change
window.addEventListener('keydown', (e) => {
  if (e.code === 'AltLeft' || e.code === 'ControlLeft') {
    if (AltLeft === true && ControlLeft === true) {
      lang = (lang === 'rus') ? 'eng' : 'rus';
      updateKeys();
    }
  }
});

// Local storage fuctions
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') !== undefined) {
      lang = localStorage.getItem('lang');
      updateKeys();
    }
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

function isUpperCase() {
  let isSymbolUpperCase = false;
  if (caps === true) {
    isSymbolUpperCase = true;
    if (leftShift === true || rightShift === true) {
      isSymbolUpperCase = false;
    }
  } else if (leftShift === true || rightShift === true) {
    isSymbolUpperCase = true;
  }
  return isSymbolUpperCase;
}

function returnSymbolByKeycode(code) {
  let symb = '';

  const key = keys.find((item) => item.name === code);

  if (lang === 'rus') {
    if (isUpperCase() === true) {
      symb = key.shiftRus;
    } else {
      symb = key.rus;
    }
  } else if (isUpperCase() === true) {
    symb = key.shiftEng;
  } else {
    symb = key.eng;
  }
  return symb;
}

// keyboard input
window.addEventListener('keydown', (e) => {
  e.preventDefault();
  cursor = textarea.selectionStart;
  const oldTextarea = textarea.value;
  let newTextarea = '';
  const keySymbol = returnSymbolByKeycode(e.code);
  if (keySymbol.indexOf('Alt') >= 0 || keySymbol.indexOf('Ctrl') >= 0 || keySymbol.indexOf('Shift') >= 0
   || keySymbol.indexOf('Win') >= 0 || keySymbol.indexOf('Caps') >= 0) {
    return;
  }
  if (keySymbol === 'Enter') {
    const enter = '\n';
    newTextarea = `${oldTextarea.slice(0, cursor)}${enter}${oldTextarea.slice(cursor)}`;
    textarea.value = newTextarea;
    cursor += 1;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else if (keySymbol === 'Tab') {
    const tab = '    ';
    newTextarea = `${oldTextarea.slice(0, cursor)}${tab}${oldTextarea.slice(cursor)}`;
    textarea.value = newTextarea;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else if (e.code === 'Backspace') {
    if (cursor !== 0) {
      newTextarea = `${oldTextarea.slice(0, cursor - 1)}${oldTextarea.slice(cursor)}`;
    }
    textarea.value = newTextarea;
    cursor -= 1;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else if (e.code === 'Delete') {
    newTextarea = `${oldTextarea.slice(0, cursor)}${oldTextarea.slice(cursor + 1)}`;
    textarea.value = newTextarea;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else {
    newTextarea = `${oldTextarea.slice(0, cursor)}${keySymbol}${oldTextarea.slice(cursor)}`;
    textarea.value = newTextarea;
    cursor += 1;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  }
});

// mouse input
window.addEventListener('click', (e) => {
  if (e.target.id === '') {
    return;
  }
  if (document.querySelector(`.${e.target.id.substring(0, e.target.id.length - 1)}`) === null) {
    return;
  }
  cursor = textarea.selectionStart;
  const oldTextarea = textarea.value;
  let newTextarea = '';
  const keySymbol = returnSymbolByKeycode(e.target.id.substring(0, e.target.id.length - 1));
  if (keySymbol.indexOf('Alt') >= 0 || keySymbol.indexOf('Ctrl') >= 0 || keySymbol.indexOf('Shift') >= 0
   || keySymbol.indexOf('Win') >= 0 || keySymbol.indexOf('Caps') >= 0) {
    return;
  }
  if (keySymbol === 'Enter') {
    const enter = '\n';
    newTextarea = `${oldTextarea.slice(0, cursor)}${enter}${oldTextarea.slice(cursor)}`;
    textarea.value = newTextarea;
    cursor += 1;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else if (keySymbol === 'Tab') {
    const tab = '    ';
    newTextarea = `${oldTextarea.slice(0, cursor)}${tab}${oldTextarea.slice(cursor)}`;
    textarea.value = newTextarea;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else if (e.target.id.substring(0, e.target.id.length - 1) === 'Backspace') {
    if (cursor !== 0) {
      newTextarea = `${oldTextarea.slice(0, cursor - 1)}${oldTextarea.slice(cursor)}`;
    }
    textarea.value = newTextarea;
    cursor -= 1;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else if (e.target.id.substring(0, e.target.id.length - 1) === 'Delete') {
    newTextarea = `${oldTextarea.slice(0, cursor)}${oldTextarea.slice(cursor + 1)}`;
    textarea.value = newTextarea;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  } else {
    newTextarea = `${oldTextarea.slice(0, cursor)}${keySymbol}${oldTextarea.slice(cursor)}`;
    textarea.value = newTextarea;
    cursor += 1;
    textarea.setSelectionRange(cursor, cursor);
    textarea.focus();
  }
});
