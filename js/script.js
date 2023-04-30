/* eslint-disable linebreak-style */
const firstLine = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const secondLine = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const thirdLine = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const fourthLine = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const fifthLine = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const label = document.createElement('label');
label.classList.add('header');
label.innerHTML = 'RSS Virtual Keyboard';
wrapper.append(label);

/*
const label = document.createElement('label');
label.classList.add('header');
label.innerHTML = 'RSS Virtual Keyboard';
label.attributes.for = 'textarea';
wrapper.append(label);
*/

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
label.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

const firstRow = document.createElement('div');
firstRow.classList.add('row');
keyboard.append(firstRow);

firstLine.forEach((el) => {
  const newKey = document.createElement('div');
  newKey.classList.add('key');
  newKey.innerHTML = `${el}`;
  firstRow.append(newKey);
});

const secondRow = document.createElement('div');
secondRow.classList.add('row');

const thirdRow = document.createElement('div');
thirdRow.classList.add('row');
