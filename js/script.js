/* eslint-disable linebreak-style */

const firstLineElements = [{ eng: '`', rus: 'ё', name: 'Backquote' }, { eng: '1', rus: '1', name: 'Digit1' }, { eng: '2', rus: '2', name: 'Digit2' },
  { eng: '3', rus: '3', name: 'Digit3' }, { eng: '4', rus: '4', name: 'Digit4' }, { eng: '5', rus: '5', name: 'Digit5' },
  { eng: '6', rus: '6', name: 'Digit6' }, { eng: '7', rus: '7', name: 'Digit7' }, { eng: '8', rus: '8', name: 'Digit8' },
  { eng: '9', rus: '9', name: 'Digit9' }, { eng: '0', rus: '0', name: 'Digit0' }, { eng: '-', rus: '-', name: 'Minus' },
  { eng: '=', rus: '=', name: 'Equal' }, { eng: 'Backspace', rus: 'Backspace', name: 'Backspace' }];
const secondLineElements = [['Tab', 'Tab'], ['q', 'й'], ['w', 'ц'], ['e', 'у'], ['r', 'к'], ['t', 'е'], ['y', 'н'], ['u', 'г'], ['i', 'ш'], ['o', 'щ'], ['p', 'з'], ['[', 'х'], [']', 'ъ'], ['\\', '\\'], ['Del', 'Del']];
const thirdLineElements = [['CapsLock', 'CapsLock'], ['a', 'й'], ['s', 'й'], ['d', 'й'], ['f', 'й'], ['g', 'й'], ['h', 'й'], ['j', 'й'], ['k', 'й'], ['l', 'й'], [';', 'ж'], ['\'', 'й'], ['Enter', 'Enter']];
const fourthLineElements = [['Shift', 'Shift'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['a', 'й'], ['▲', '▲'], ['Shift', 'Shift']];
const fifthLineElements = [['Ctrl', 'Ctrl'], ['Win', 'Win'], ['Alt', 'Alt'], [' ', ' '], ['Alt', 'Alt'], ['◀', '◀'], ['▼', '▼'], ['▶', '▶'], ['Ctrl', 'Ctrl']];

const lang = 'eng';

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

function setLocalStorage() {
  localStorage.setItem('lang', lang.value);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') !== undefined) {
      lang.value = localStorage.getItem('lang');
    }
  }
}

function createStartElemets() {
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

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  wrapper.append(keyboard);

  createAndFillRow(keyboard, firstLineElements);
  /*
  createAndFillRow(keyboard, secondLineElements);
  createAndFillRow(keyboard, thirdLineElements);
  createAndFillRow(keyboard, fourthLineElements);
  createAndFillRow(keyboard, fifthLineElements);
  */
  const secondRow = document.createElement('div');
  secondRow.classList.add('row');

  const thirdRow = document.createElement('div');
  thirdRow.classList.add('row');
}

function updateVisibility() {
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

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

createStartElemets();

updateVisibility();
