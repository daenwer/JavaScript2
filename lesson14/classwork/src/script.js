// let notesArr = [];
// let deltaX;
// let deltaY;
// let dragNote;
// let dragObj;
// let dragIndex;
//
// if (localStorage.getItem('notes')) {
//     notesArr = JSON.parse(localStorage.getItem('notes'));
// }
//
// // создание заметки
// function Note(text) {
//     this.x = 10;
//     this.y = 70;
//     this.text = text;
//     this.color = color();
// }
//
// // рандомный цвет заметки
// const color = () => {
//     let r = Math.floor(Math.random() * (256));
//     let g = Math.floor(Math.random() * (256));
//     let b = Math.floor(Math.random() * (256));
//     let colorNote = '#' + r.toString(16) + g.toString(16) + b.toString(16);
//     return colorNote;
// }
//
// // отрисовка верха страницы
// export const boardTop = () => {
//     let board = document.createElement('div');
//     let addFun = document.createElement('div');
//     addFun.style.margin = 10 + 'px';
//     let buttonAddFun = document.createElement('button');
//     buttonAddFun.textContent = 'add +';
//     buttonAddFun.classList.add('btn');
//     buttonAddFun.classList.add('btn-primary');
//     buttonAddFun.style.width = 150 + 'px';
//     buttonAddFun.classList.add('button');
//     let buttonRemoveAll = document.createElement('button');
//     buttonRemoveAll.textContent = 'remove all';
//     buttonRemoveAll.classList.add('btn');
//     buttonRemoveAll.classList.add('btn-danger');
//     buttonRemoveAll.style.width = 150 + 'px';
//     buttonRemoveAll.claimport {boardTop, renderHTML} from "./script";ssList.add('button');
//     let inputFun = document.createElement('input');
//     inputFun.placeholder = 'Search (by id or text)...';
//     inputFun.classList.add('form-control');
//     inputFun.classList.add('input');
//     inputFun.style.width = 500 + 'px';
//     inputFun.style.display = 'initial';
//     inputFun.style.margin = 5 + 'px';
//     inputFun.id = 'funs';
//
//     document.body.appendChild(board);
//     board.appendChild(addFun);
//     addFun.appendChild(buttonAddFun);
//     addFun.appendChild(buttonRemoveAll);
//     addFun.appendChild(inputFun);
//
//     buttonAddFun.onclick = (e) => {
//         let inputText = document.getElementById('funs');
//         let url = '';
//         if (inputText.value.length > 1) {
//             url = 'https://api.chucknorris.io/jokes/search?query=' + inputText.value;
//         } else {
//             url = 'https://api.chucknorris.io/jokes/random'
//         }
//         let text = '';
//         fetch(url)
//             .then(response => response.json())
//             .then(answer => {
//                 if (answer.value) {
//                     text = answer.value;
//                     notesArr.push(new Note(text));
//                     localStorage.setItem('notes', JSON.stringify(notesArr));
//                     renderHTML();
//                 } else {
//                     text = answer.result[0].value;
//                     notesArr.push(new Note(text));
//                     localStorage.setItem('notes', JSON.stringify(notesArr));
//                     renderHTML();
//                 }
//         });
//     }
//
//     buttonRemoveAll.onclick = (e) => {
//         notesArr = [];
//         localStorage.setItem('notes', JSON.stringify(notesArr));
//         renderHTML();
//     }
// }
//
// let noteDiv = document.createElement('div');
// noteDiv.style.margin = 0;
// noteDiv.style.border = 2 + 'px';
// noteDiv.style.borderColor = 'red';
//
//
// document.body.appendChild(noteDiv);
//
// // отрисовка тела страницы
// export const renderHTML = () => {
//     noteDiv.innerHTML = '';
//     notesArr.map((item, index) => {
//         let newNote = createOneNoteMarkup(item);
//         newNote.onmousedown = (e) => {
//             window.addEventListener('mousemove', stickToMouse);
//             deltaX = e.pageX - newNote.offsetLeft;
//             deltaY = e.pageY - newNote.offsetTop;
//             dragNote = newNote;
//             dragObj = item;
//             dragIndex = index;
//         }
//
//         newNote.onmouseup = (e) => {
//             localStorage.setItem('notes', JSON.stringify(notesArr));
//             window.removeEventListener('mousemove', stickToMouse);
//         }
//
//         // добавляем заметку в html
//         noteDiv.appendChild(newNote);
//     });
//
// }
//
// const createOneNoteMarkup = (object) => {
//     let tempNote = document.createElement('div');
//     tempNote.classList.add('note');
//     tempNote.style.background = object.color;
//
//     tempNote.style.left = object.x + 'px';
//     tempNote.style.top = object.y + 'px';
//
//     let noteTextDiv = document.createElement('div');
//     noteTextDiv.classList.add('noteTextDiv');
//
//     let noteTextParagraph = document.createElement('pre');
//     noteTextParagraph.classList.add('noteTextParagraph');
//     noteTextParagraph.textContent = object.text;
//
//     let noteTextArea = document.createElement('textarea');
//     noteTextArea.classList.add('noteTextArea');
//     noteTextArea.style.display = 'none';
//     noteTextArea.textContent = object.text;
//
//
//     // клик по замметке для переключеиня в textarea
//     noteTextParagraph.ondblclick = (e) => {
//         noteTextParagraph.style.display = 'none';
//         noteTextArea.style.display = 'initial';
//         // обработка кнопок text - save
//         addTextButton.style.display = 'none';
//         saveTextButton.style.display = 'initial';
//     }
//
//     // клик по заметке для переключеиня в paragraph
//     noteTextArea.ondblclick = (e) => {
//         dragObj.text = noteTextArea.value;
//         localStorage.setItem('notes', JSON.stringify(notesArr));
//         noteTextArea.style.display = 'none';
//         noteTextParagraph.style.display = 'initial';
//         // обработка кнопок text - save
//         saveTextButton.style.display = 'none';
//         addTextButton.style.display = 'initial';
//
//         renderHTML();
//     }
//
//     noteTextDiv.appendChild(noteTextParagraph);
//     noteTextDiv.appendChild(noteTextArea);
//
//     tempNote.appendChild(noteTextDiv);
//
//     // кнопка изменения текста в заметку
//     let addTextButton = document.createElement('button');
//     addTextButton.classList.add('btn');
//     addTextButton.style.width = 100 + 'px';
//     addTextButton.style.marginRight = 3 + 'px';
//     addTextButton.textContent = 'change';
//     tempNote.appendChild(addTextButton);
//
//     // нажатие на кнопку изменения текста в заметке
//     addTextButton.onclick = (e) => {
//         noteTextParagraph.ondblclick();
//         addTextButton.style.display = 'none';
//         deleteButton.style.display = 'none';
//         saveTextButton.style.display = 'initial';
//
//     }
//
//     // кнопка сохранения текста в заметку
//     let saveTextButton = document.createElement('button');
//     saveTextButton.classList.add('btn');
//     saveTextButton.style.width = 100 + 'px';
//     saveTextButton.textContent = 'save';
//     saveTextButton.style.display = 'none';
//     tempNote.appendChild(saveTextButton);
//
//     // нажатие на кнопку сохранения текста в заметку
//     saveTextButton.onclick = (e) => {
//         noteTextArea.ondblclick();
//         saveTextButton.style.display = 'none';
//         addTextButton.style.display = 'initial';
//     }
//
//     // кнопка удаления заметки
//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = '-';
//     deleteButton.classList.add('btn');
//     deleteButton.style.marginLeft = 2 + 'px';
//     tempNote.appendChild(deleteButton);
//
//     // нажатие на кнопку удаления заметки
//     deleteButton.onclick = (e) => {
//         notesArr.splice(dragIndex, 1);
//         localStorage.setItem('notes', JSON.stringify(notesArr));
//         renderHTML();
//     }
//
//     return tempNote;
// }
//
// // функция для перемещения одной заметки
// const stickToMouse = (e) => {
//     dragNote.style.left = (e.pageX - deltaX) + 'px';
//     dragNote.style.top = (e.pageY - deltaY) + 'px';
//     dragObj.x = e.pageX - deltaX;
//     dragObj.y = e.pageY - deltaY;
// }