window.onload = function virtKB() {
    if (localStorage.getItem('language') === null) {
      localStorage.setItem('language', 'en');
    }
    let lang = localStorage.getItem('language');
    
    const div = document.createElement('div');
    div.classList.add('text');
    const textarea = document.createElement('textarea');
    textarea.cols = 124;
    textarea.rows = 10;
    div.append(textarea);
    document.body.append(div);
   
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    document.body.append(keyboard);
    const pstext = document.createElement('div');
    pstext.classList.add('pstext');
    pstext.innerHTML =
      'Клавиатура работает в ОС Windows. Для переключения языка комбинация: ctrl + alt';
    document.body.append(pstext);
    const string1 = [
      ['Backquote', '`', '~', 'ё', 'Ё'],
      ['Digit1', '1', '!', '1', '!'],
      ['Digit2', '2', '@', '2', '"'],
      ['Digit3', '3', '#', '3', '№'],
      ['Digit4', '4', '$', '4', ';'],
      ['Digit5', '5', '%', '5', '%'],
      ['Digit6', '6', '^', '6', ':'],
      ['Digit7', '7', '&', '7', '?'],
      ['Digit8', '8', '*', '8', '*'],
      ['Digit9', '9', '(', '9', '('],
      ['Digit0', '0', ')', '0', ')'],
      ['Minus', '-', '_', '-', '_'],
      ['Equal', '=', '+', '=', '+'],
      ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ];
    const string2 = [
      ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
      ['KeyQ', 'q', 'Q', 'й', 'Й'],
      ['KeyW', 'w', 'W', 'ц', 'Ц'],
      ['KeyE', 'e', 'E', 'у', 'У'],
      ['KeyR', 'r', 'R', 'к', 'К'],
      ['KeyT', 't', 'T', 'е', 'Е'],
      ['KeyY', 'y', 'Y', 'н', 'Н'],
      ['KeyU', 'u', 'U', 'г', 'Г'],
      ['KeyI', 'i', 'I', 'ш', 'Ш'],
      ['KeyO', 'o', 'O', 'щ', 'Щ'],
      ['KeyP', 'p', 'P', 'з', 'З'],
      ['BracketLeft', '[', '{', 'х', 'Х'],
      ['BracketRight', ']', '}', 'ъ', 'Ъ'],
      ['Delete', 'Delete', 'Delete', 'Delete', 'Delete'],
    ];
    const string3 = [
      ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['KeyA', 'a', 'A', 'ф', 'Ф'],
      ['KeyS', 's', 'S', 'ы', 'Ы'],
      ['KeyD', 'd', 'D', 'в', 'В'],
      ['KeyF', 'f', 'F', 'а', 'А'],
      ['KeyG', 'g', 'G', 'п', 'П'],
      ['KeyH', 'h', 'H', 'р', 'Р'],
      ['KeyJ', 'j', 'J', 'о', 'О'],
      ['KeyK', 'k', 'K', 'л', 'Л'],
      ['KeyL', 'l', 'L', 'д', 'Д'],
      ['Semicolon', ';', ':', 'ж', 'Ж'],
      ['Quote', "'", '"', 'э', 'Э'],
      ['Backslash', '\\', '|', '\\', '/'],
      ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ];
    const string4 = [
      ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
      ['KeyZ', 'z', 'Z', 'я', 'Я'],
      ['KeyX', 'x', 'X', 'ч', 'Ч'],
      ['KeyC', 'c', 'C', 'с', 'С'],
      ['KeyV', 'v', 'V', 'м', 'М'],
      ['KeyB', 'b', 'B', 'и', 'И'],
      ['KeyN', 'n', 'N', 'т', 'Т'],
      ['KeyM', 'm', 'M', 'ь', 'Ь'],
      ['Comma', ',', '<', 'б', 'Б'],
      ['Period', '.', '>', 'ю', 'Ю'],
      ['Slash', '/', '?', '.', ','],
      ['ArrowUp', '↑', '↑', '↑', '↑'],
      ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ];
    const string5 = [
      ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ['Win', 'Win', 'Win', 'Win', 'Win'],
      ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['Space', ' ', ' ', ' ', ' '],
      ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['ArrowLeft', '←', '←', '←', '←'],
      ['ArrowDown', '↓', '↓', '↓', '↓'],
      ['ArrowRight', '→', '→', '→', '→'],
      ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ];
    const row = [];
    for (let i = 0; i < 5; i++) {
      row[i] = document.createElement('div');
      row[i].classList.add('row');
      keyboard.append(row[i]);
    }
    class KeyBd {
      constructor(name, charEng, engShiftChar, charRu, ruShiftChar, place) {
            this.name = name;
            this.place = place;
            this.charEngValue = charEng;
            this.engShiftCharValue = engShiftChar;
            this.charRuValue = charRu;
            this.ruShiftCharValue = ruShiftChar;
            this.createKey = () => {
            this.div = document.createElement('div');
            this.div.className = 'k-key';
            this.div.id = name;
            this.place.append(this.div);
            this.charEng = document.createElement('span');
            this.charEng.innerHTML = this.charEngValue;
                if (lang === 'en') {
                    this.charEng.className = 'visibility';
                    this.curSpan = charEng;
                } else {
                    this.charEng.className = 'hiden';
                }
            this.div.append(this.charEng);
            this.engShiftChar = document.createElement('span');
            this.engShiftChar.innerHTML = this.engShiftCharValue;
            this.engShiftChar.className = 'hiden';
            this.div.append(this.engShiftChar);
            this.charRu = document.createElement('span');
            this.charRu.innerHTML = this.charRuValue;
                if (lang === 'ru') {
                    this.charRu.className = 'visibility';
                    this.curSpan = charRu;
                } else {
                    this.charRu.className = 'hiden';
                }
            this.div.append(this.charRu);
            this.ruShiftChar = document.createElement('span');
            this.ruShiftChar.innerHTML = this.ruShiftCharValue;
            this.ruShiftChar.className = 'hiden';
            this.div.append(this.ruShiftChar);
            this.spans = this.div.children;
        };
        this.switchLanguage = () => {
            if (this.charEng.className === 'visibility') {
                this.charEng.className = 'hiden';
                this.charRu.className = 'visibility';
                this.curSpan = charRu;
                localStorage.setItem('language', 'ru');
                lang = 'ru';
            } else if (this.charRu.className === 'visibility') {
                this.charRu.className = 'hiden';
                this.charEng.className = 'visibility';
                this.curSpan = charEng;
                localStorage.setItem('language', 'en');
                lang = 'en';
            } else if (this.engShiftChar.className === 'visibility') {
                this.engShiftChar.className = 'hiden';
                this.ruShiftChar.className = 'visibility';
                this.curSpan = ruShiftChar;
                localStorage.setItem('language', 'ru');
                lang = 'ru';
            } else if (this.ruShiftChar.className === 'visibility') {
                this.ruShiftChar.className = 'hiden';
                this.engShiftChar.className = 'visibility';
                this.curSpan = engShiftChar;
                localStorage.setItem('language', 'en');
                lang = 'en';
            }
        };
        this.switchCase = () => {
          if (lang === 'en') {
            if (this.charEng.className === 'visibility') {
              this.charEng.className = 'hiden';
              this.engShiftChar.className = 'visibility';
              this.curSpan = engShiftChar;
            } else {
              this.charEng.className = 'visibility';
              this.curSpan = charEng;
              this.engShiftChar.className = 'hiden';
            }
          }
          if (lang === 'ru') {
            if (this.charRu.className === 'visibility') {
              this.charRu.className = 'hiden';
              this.ruShiftChar.className = 'visibility';
              this.curSpan = ruShiftChar;
            } else {
              this.charRu.className = 'visibility';
              this.curSpan = charRu;
              this.ruShiftChar.className = 'hiden';
            }
          }
        };
      }
    }
    const keys1 = [];
    const keys2 = [];
    const keys3 = [];
    const keys4 = [];
    const keys5 = [];
    const rows = [string1, string2, string3, string4, string5];
    const rowKeys = [keys1, keys2, keys3, keys4, keys5];
    const allKeys = [];
    for (let i = 0; i < 5; i++) {
      const keyboardRow = rows[i];
      const key = [...rowKeys[i]];
      for (let j = 0; j < keyboardRow.length; j++) {
        key[j] = new KeyBd(...keyboardRow[j], row[i]);
        key[j].createKey();
        allKeys.push(key[j]);
      }
    }
    function textareaIn(textNew) {
      if (textNew === 'Delete') {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const after = text.substring(end + 1, text.length);
        textarea.value = before + after;
        textarea.selectionStart = start + textNew.length;
        textarea.selectionEnd = start + textNew.length;
        textarea.setSelectionRange(start, start);
      } else if (textNew === 'Backspace') {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start - 1);
        const after = text.substring(end, text.length);
        textarea.value = before + after;
        textarea.selectionStart = start + textNew.length;
        textarea.selectionEnd = start + textNew.length;
        textarea.setSelectionRange(start - 1, start - 1);
      } else {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        textarea.value = before + textNew + after;
        textarea.selectionStart = start + textNew.length;
        textarea.selectionEnd = start + textNew.length;
        textarea.focus();
      }
    }
    let shiftDown = false;
    let capsOn = false;
    document.addEventListener('keydown', (e) => {
      allKeys.forEach((x) => {
        const el = x;
        if (e.code === x.name) {
          if (e.code === 'CapsLock') {
            if (!capsOn) {
              el.div.style.background = 'blue';
              capsOn = true;
              for (let i = 13; i < allKeys.length; i++) {
                allKeys[i].switchCase();
              }
            } else if (capsOn) {
              el.div.style.background = 'rgb(150, 141, 141)';
              capsOn = false;
              for (let i = 13; i < allKeys.length; i++) {
                allKeys[i].switchCase();
              }
            }
            return;
          }
          el.div.style.background = 'blue';
            if (e.altKey && (e.metaKey || e.ctrlKey)) {
            allKeys.forEach((item) => {
              item.switchLanguage();
            });
          }
          if (e.code === 'Tab') {
            e.preventDefault();
            textareaIn('\t');
          } else if (e.code === 'Enter') {
            e.preventDefault();
            textareaIn('\n');
          } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            if (!shiftDown) {
              shiftDown = true;
              allKeys.forEach((item) => {
                item.switchCase();
              });
            }
          } else if (e.code === 'Delete') {
            e.preventDefault();
            textareaIn('Delete');
          } else if (e.code === 'Backspace') {
            e.preventDefault();
            textareaIn('Backspace');
          } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
            e.preventDefault();
          } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
            e.preventDefault();
          } else {
            e.preventDefault();
            textareaIn(x.curSpan);
          }
        }
      });
    });
    document.addEventListener('keyup', (e) => {
      allKeys.forEach((x) => {
        const el = x;
        if (e.code === x.name) {
          if (e.code !== 'CapsLock') {
            el.div.style.background = 'rgb(150, 141, 141)';
            el.div.style.transform = 'scale(1)';
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
              shiftDown = false;
              allKeys.forEach((item) => {
                item.switchCase();
              });
            }
          }
        }
      });
    });
    let clickTarget = '';
    document.addEventListener('mousedown', (e) => {
      const event = new Event('keydown');
      event.code = e.target.id;
      clickTarget = e.target.id;
      document.dispatchEvent(event);
    });
    document.addEventListener('mouseup', () => {
      const event = new Event('keyup');
      event.code = clickTarget;
      document.dispatchEvent(event);
    });
  };
  