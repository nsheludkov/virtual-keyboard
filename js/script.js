/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import keys from './keys.js';

let lang = 'eng';
let caps = false;

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

function returnSymbolByKeycode(code) {

}

window.addEventListener('keydown', (event) => {
  textarea.value += returnSymbolByKeycode(event.code);
});
