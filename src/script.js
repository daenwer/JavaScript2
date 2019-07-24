let notesArr = [];
let deltaX;
let deltaY;
let dragNote;
let dragObj;
let dragIndex;


export const boardTop = () => {

    if (localStorage.getItem('notes')) {
        notesArr = JSON.parse(localStorage.getItem('notes'));
    }

    function Note(x=50, y=100, text) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color();
    }

    const color = () => {
        let r = Math.floor(Math.random() * (256));
        let g = Math.floor(Math.random() * (256));
        let b = Math.floor(Math.random() * (256));
        let colorNote = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return colorNote;
    }

    let board = document.createElement('div');
    let addFun = document.createElement('div');
    addFun.style.margin = 10 + 'px';
    let buttonAddFun = document.createElement('button');
    buttonAddFun.textContent = 'add +';
    buttonAddFun.classList.add('btn');
    buttonAddFun.classList.add('btn-primary');
    buttonAddFun.style.width = 150 + 'px';
    buttonAddFun.classList.add('button');
    let buttonRemoveAll = document.createElement('button');
    buttonRemoveAll.textContent = 'remove all';
    buttonRemoveAll.classList.add('btn');
    buttonRemoveAll.classList.add('btn-danger');
    buttonRemoveAll.style.width = 150 + 'px';
    buttonRemoveAll.classList.add('button');
    let inputFun = document.createElement('input');
    inputFun.placeholder = 'Search (by id or text)...';
    inputFun.classList.add('form-control');
    inputFun.classList.add('input');
    inputFun.style.width = 500 + 'px';
    inputFun.style.display = 'initial';
    inputFun.style.margin = 5 + 'px';

    document.body.appendChild(board);
    board.appendChild(addFun);
    addFun.appendChild(buttonAddFun);
    addFun.appendChild(buttonRemoveAll);
    addFun.appendChild(inputFun);

    buttonAddFun.onclick = (e) => {
        let inputText = document.getElementsByTagName('input');
        let url = '';
        if (inputText[0].value.length > 1) {
            url = 'https://api.chucknorris.io/jokes/search?query=' + inputText[0].value;
        } else {
            url = 'https://api.chucknorris.io/jokes/random'
        }

        let text = '';
        fetch(url)
            .then(response => response.json())
            .then(answer => {
                if (answer.value) {
                    text = answer.value;
                    notesArr.push(new Note(text));
                    localStorage.setItem('notes', JSON.stringify(notesArr));
                    renderHTML();
                } else {
                    text = answer.result[0].value;
                    notesArr.push(new Note(text));
                    localStorage.setItem('notes', JSON.stringify(notesArr));
                    renderHTML();
                }
        });
    }

    buttonRemoveAll.onclick = (e) => {
        notesArr = [];
    }
}

let noteDiv = document.createElement('div');
noteDiv.style.margin = 0;
noteDiv.style.marginTop = 70 + 'px';
noteDiv.style.border = 2 + 'px';
noteDiv.style.borderColor = 'red';


document.body.appendChild(noteDiv);

const renderHTML = () => {
    noteDiv.innerHTML = '';
    notesArr.map(function (item, index) {
        var newNote = createOneNoteMarkup(item);
        newNote.onmousedown = function (e) {
            window.addEventListener('mousemove', stickToMouse);
            deltaX = e.pageX - newNote.offsetLeft;
            deltaY = e.pageY - newNote.offsetTop;
            dragNote = newNote;
            dragObj = item;
            dragIndex = index;
        }

        newNote.onmouseup = function (e) {
            localStorage.setItem('notes', JSON.stringify(notesArr));
            window.removeEventListener('mousemove', stickToMouse);
        }

        // добавляем заметку в html
        noteDiv.appendChild(newNote);
    });

}

function createOneNoteMarkup(object) {
    var tempNote = document.createElement('div');
    tempNote.classList.add('note');
    tempNote.style.background = object.color;

    tempNote.style.left = object.x + 'px';
    tempNote.style.top = object.y + 'px';

    var noteTextDiv = document.createElement('div');
    noteTextDiv.classList.add('noteTextDiv');

    var noteTextParagraph = document.createElement('pre');
    noteTextParagraph.classList.add('noteTextParagraph');
    noteTextParagraph.textContent = object.text;

    var noteTextArea = document.createElement('textarea');
    noteTextArea.classList.add('noteTextArea');
    noteTextArea.style.display = 'none';
    noteTextArea.textContent = object.text;


    // клик по замметке для переключеиня в textarea
    noteTextParagraph.ondblclick = function (e) {
        noteTextParagraph.style.display = 'none';
        noteTextArea.style.display = 'initial';
        // обработка кнопок text - save
        addTextButton.style.display = 'none';
        saveTextButton.style.display = 'initial';
    }

    // клик по заметке для переключеиня в paragraph
    noteTextArea.ondblclick = function (e) {
        dragObj.text = noteTextArea.value;
        localStorage.setItem('notes', JSON.stringify(notesArr));
        noteTextArea.style.display = 'none';
        noteTextParagraph.style.display = 'initial';
        // обработка кнопок text - save
        saveTextButton.style.display = 'none';
        addTextButton.style.display = 'initial';

        renderHTML();
    }

    noteTextDiv.appendChild(noteTextParagraph);
    noteTextDiv.appendChild(noteTextArea);

    tempNote.appendChild(noteTextDiv);

    // кнопка удаления заметки
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = '-';
    tempNote.appendChild(deleteButton);

    // нажатие на кнопку удаления заметки
    deleteButton.onclick = function (e) {
        notesArr.splice(dragIndex, 1);
        localStorage.setItem('notes', JSON.stringify(notesArr));
        renderHTML();
    }

    // кнопка добавления текста в заметку
    var addTextButton = document.createElement('button');
    addTextButton.classList.add('deleteButton');
    addTextButton.classList.add('textButton');
    // addTextButton.style.right = 35 + 'px';
    // addTextButton.style.width = 45 + 'px';
    addTextButton.textContent = 'text';
    tempNote.appendChild(addTextButton);

    // нажатие на кнопку добавления текста в заметку
    addTextButton.onclick = function (e) {
        noteTextParagraph.ondblclick();
        addTextButton.style.display = 'none';
        saveTextButton.style.display = 'initial';

    }

    // кнопка сохранения текста в заметку
    var saveTextButton = document.createElement('button');
    saveTextButton.classList.add('deleteButton');
    saveTextButton.classList.add('textButton');
    saveTextButton.textContent = 'save';
    saveTextButton.style.display = 'none';
    tempNote.appendChild(saveTextButton);

    // нажатие на кнопку сохранения текста в заметку
    saveTextButton.onclick = function (e) {
        noteTextArea.ondblclick();
        saveTextButton.style.display = 'none';
        addTextButton.style.display = 'initial';
    }


    // добавляем радио кнопку в заметку для выбора цвета
    var checkbox = document.createElement('form');
    checkbox.style.marginLeft = 5 + 'px';
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');

    input1.name = 'dzen';
    input2.name = 'dzen';
    input3.name = 'dzen';

    input1.type = 'radio';
    if (object.check === '1') {
        input1.checked = 'true';
    }
    input2.type = 'radio';
    if (object.check === '2') {
        input2.checked = 'true';
    }
    input3.type = 'radio';
    if (object.check === '3') {
        input3.checked = 'true';
    }
    // обрабатываем радиокнопки
    input1.onclick = function (e) {
        tempNote.style.background = '#e2e6ea';
        dragObj.color = '#e2e6ea';
        dragObj.check = '1';
        localStorage.setItem('notes', JSON.stringify(notesArr));
    }
    input2.onclick = function (e) {
        tempNote.style.background = 'yellow';
        dragObj.color = 'yellow';
        dragObj.check = '2';
        localStorage.setItem('notes', JSON.stringify(notesArr));
    }
    input3.onclick = function (e) {
        tempNote.style.background = 'blue';
        dragObj.color = 'blue';
        dragObj.check = '3';
        localStorage.setItem('notes', JSON.stringify(notesArr));
    }
    checkbox.appendChild(input1);
    checkbox.appendChild(input2);
    checkbox.appendChild(input3);
    tempNote.appendChild(checkbox);


    return tempNote;
}
