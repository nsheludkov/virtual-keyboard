/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import keys from './keys.js';

let lang = 'eng';
let caps = false;
let leftShift = false;
let rightShift = false;
let cursor = 0;
//
function createAndFillRow(keyboard, arrayOfElements) {
  const currRow = document.createElement('div');
  currRow.classList.add('row');
  keyboard.append(currRow);

  arrayOfElements.forEach((el) => {
    const newKey = document.createElement('div');
    newKey.classList.add('key', `${el.name}`);
    currRow.append(newKey);

    const enSpan = document.createElement('span');
    enSpan.classList.add('eng');
    enSpan.innerHTML = `${el.eng}`;
    newKey.append(enSpan);

    const ruSpan = document.createElement('span');
    ruSpan.classList.add('rus');
    ruSpan.innerHTML = `${el.rus}`;
    newKey.append(ruSpan);
  });
}

// Local storage fuctions
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') !== undefined) {
      lang = localStorage.getItem('lang');
    }
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

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

// Change keys in accordance with language and Shift
function updateKeys() {
  const rusSpans = document.querySelectorAll('.rus');
  const engSpans = document.querySelectorAll('.eng');
  if (lang === 'rus') {
    engSpans.forEach((el) => {
      el.classList.add('hidden');
    });
    rusSpans.forEach((el) => {
      el.classList.remove('hidden');
    });
  } else {
    rusSpans.forEach((el) => {
      el.classList.add('hidden');
    });
    engSpans.forEach((el) => {
      el.classList.remove('hidden');
    });
  }
}

updateKeys();

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
