/* eslint-disable linebreak-style */
const keys = [
  {
    eng: '`', shiftEng: '~', rus: 'ё', shiftRus: 'Ё', name: 'Backquote',
  },
  {
    eng: '1', shiftEng: '1', rus: '1', shiftRus: '1', name: 'Digit1',
  },
  {
    eng: '2', shiftEng: '2', rus: '2', shiftRus: '2', name: 'Digit2',
  },
  {
    eng: '3', shiftEng: '3', rus: '3', shiftRus: '3', name: 'Digit3',
  },
  {
    eng: '4', shiftEng: '4', rus: '4', shiftRus: '4', name: 'Digit4',
  },
  {
    eng: '5', shiftEng: '5', rus: '5', shiftRus: '5', name: 'Digit5',
  },
  {
    eng: '6', shiftEng: '6', rus: '6', shiftRus: '6', name: 'Digit6',
  },
  {
    eng: '7', shiftEng: '7', rus: '7', shiftRus: '7', name: 'Digit7',
  },
  {
    eng: '8', shiftEng: '8', rus: '8', shiftRus: '8', name: 'Digit8',
  },
  {
    eng: '9', shiftEng: '9', rus: '9', shiftRus: '9', name: 'Digit9',
  },
  {
    eng: '0', shiftEng: '0', rus: '0', shiftRus: '0', name: 'Digit0',
  },
  {
    eng: '-', shiftEng: '_', rus: '-', shiftRus: '_', name: 'Minus',
  },
  {
    eng: '=', shiftEng: '+', rus: '=', shiftRus: '+', name: 'Equal',
  },
  {
    eng: 'Backspace', shiftEng: 'Backspace', rus: 'Backspace', shiftRus: 'Backspace', name: 'Backspace',
  },
  {
    eng: 'Tab', shiftEng: 'Tab', rus: 'Tab', shiftRus: 'Tab', name: 'Tab',
  },
  {
    eng: 'q', shiftEng: 'Q', rus: 'й', shiftRus: 'Й', name: 'KeyQ',
  },
  {
    eng: 'w', shiftEng: 'W', rus: 'ц', shiftRus: 'Ц', name: 'KeyW',
  },
  {
    eng: 'e', shiftEng: 'E', rus: 'у', shiftRus: 'У', name: 'KeyE',
  },
  {
    eng: 'r', shiftEng: 'R', rus: 'к', shiftRus: 'К', name: 'KeyR',
  },
  {
    eng: 't', shiftEng: 'T', rus: 'е', shiftRus: 'Е', name: 'KeyT',
  },
  {
    eng: 'y', shiftEng: 'Y', rus: 'н', shiftRus: 'Н', name: 'KeyY',
  },
  {
    eng: 'u', shiftEng: 'U', rus: 'г', shiftRus: 'Г', name: 'KeyU',
  },
  {
    eng: 'i', shiftEng: 'I', rus: 'ш', shiftRus: 'Ш', name: 'KeyI',
  },
  {
    eng: 'o', shiftEng: 'O', rus: 'щ', shiftRus: 'Щ', name: 'KeyO',
  },
  {
    eng: 'p', shiftEng: 'P', rus: 'з', shiftRus: 'З', name: 'KeyP',
  },
  {
    eng: '[', shiftEng: '{', rus: 'х', shiftRus: 'Х', name: 'BracketLeft',
  },
  {
    eng: ']', shiftEng: '}', rus: 'ъ', shiftRus: 'Ъ', name: 'BracketRigth',
  },
  {
    eng: '\\', shiftEng: '|', rus: '\\', shiftRus: '/', name: 'Backslash',
  },
  {
    eng: 'Del', shiftEng: 'Del', rus: 'Del', shiftRus: 'Del', name: 'Delete',
  },
  {
    eng: 'CapsLock', shiftEng: 'CapsLock', rus: 'CapsLock', shiftRus: 'CapsLock', name: 'CapsLock',
  },
  {
    eng: 'a', shiftEng: 'A', rus: 'ф', shiftRus: 'Ф', name: 'KeyA',
  },
  {
    eng: 's', shiftEng: 'S', rus: 'ы', shiftRus: 'Ы', name: 'KeyS',
  },
  {
    eng: 'd', shiftEng: 'D', rus: 'в', shiftRus: 'В', name: 'KeyD',
  },
  {
    eng: 'f', shiftEng: 'F', rus: 'а', shiftRus: 'А', name: 'KeyF',
  },
  {
    eng: 'g', shiftEng: 'G', rus: 'п', shiftRus: 'П', name: 'KeyG',
  },
  {
    eng: 'h', shiftEng: 'H', rus: 'р', shiftRus: 'Р', name: 'KeyH',
  },
  {
    eng: 'j', shiftEng: 'J', rus: 'о', shiftRus: 'О', name: 'KeyJ',
  },
  {
    eng: 'k', shiftEng: 'K', rus: 'л', shiftRus: 'Л', name: 'KeyK',
  },
  {
    eng: 'l', shiftEng: 'L', rus: 'д', shiftRus: 'Д', name: 'KeyL',
  },
  {
    eng: ';', shiftEng: ':', rus: 'ж', shiftRus: 'Ж', name: 'Semicolon',
  },
  {
    eng: '\'', shiftEng: '"', rus: 'э', shiftRus: 'Э', name: 'Quote',
  },
  {
    eng: 'Enter', shiftEng: 'Enter', rus: 'Enter', shiftRus: 'Enter', name: 'Enter',
  },
  {
    eng: 'Shift', shiftEng: 'Shift', rus: 'Shift', shiftRus: 'Shift', name: 'ShiftLeft',
  },
  {
    eng: 'z', shiftEng: 'Z', rus: 'я', shiftRus: 'Я', name: 'KeyZ',
  },
  {
    eng: 'x', shiftEng: 'X', rus: 'ч', shiftRus: 'Ч', name: 'KeyX',
  },
  {
    eng: 'c', shiftEng: 'C', rus: 'с', shiftRus: 'С', name: 'KeyC',
  },
  {
    eng: 'v', shiftEng: 'V', rus: 'м', shiftRus: 'М', name: 'KeyV',
  },
  {
    eng: 'b', shiftEng: 'B', rus: 'и', shiftRus: 'И', name: 'KeyB',
  },
  {
    eng: 'n', shiftEng: 'N', rus: 'т', shiftRus: 'Т', name: 'KeyN',
  },
  {
    eng: 'm', shiftEng: 'M', rus: 'ь', shiftRus: 'Ь', name: 'KeyM',
  },
  {
    eng: ',', shiftEng: '<', rus: 'б', shiftRus: 'Б', name: 'Comma',
  },
  {
    eng: '.', shiftEng: '>', rus: 'ю', shiftRus: 'Ю', name: 'Period',
  },
  {
    eng: '/', shiftEng: '?', rus: '.', shiftRus: ',', name: 'Slash',
  },
  {
    eng: '▲', shiftEng: '▲', rus: '▲', shiftRus: '▲', name: 'ArrowUp',
  },
  {
    eng: 'Shift', shiftEng: 'Shift', rus: 'Shift', shiftRus: 'Shift', name: 'ShiftRight',
  },
  {
    eng: 'Ctrl', shiftEng: 'Ctrl', rus: 'Ctrl', shiftRus: 'Ctrl', name: 'CtrlLeft',
  },
  {
    eng: 'Win', shiftEng: 'Win', rus: 'Win', shiftRus: 'Win', name: 'MetaLeft',
  },
  {
    eng: 'Alt', shiftEng: 'Alt', rus: 'Alt', shiftRus: 'Alt', name: 'AltLeft',
  },
  {
    eng: ' ', shiftEng: ' ', rus: ' ', shiftRus: ' ', name: 'Space',
  },
  {
    eng: 'Alt', shiftEng: 'Alt', rus: 'Alt', shiftRus: 'Alt', name: 'AltRight',
  },
  {
    eng: '◀', shiftEng: '◀', rus: '◀', shiftRus: '◀', name: 'ArrowLeft',
  },
  {
    eng: '▼', shiftEng: '▼', rus: '▼', shiftRus: '▼', name: 'ArrowDown',
  },
  {
    eng: '▶', shiftEng: '▶', rus: '▶', shiftRus: '▶', name: 'ArrowRight',
  },
  {
    eng: 'Ctrl', shiftEng: 'Ctrl', rus: 'Ctrl', shiftRus: 'Ctrl', name: 'CtrlRight',
  },
];

export default keys;
