// import {renderHTML} from "../../../lesson13/13hwDmitriyA/src/script";

export const renderHTML = () => {
    noteDiv.innerHTML = '';
    notesArr.map((item, index) => {
        let newNote = createOneNoteMarkup(item);
        newNote.onmousedown = (e) => {
            window.addEventListener('mousemove', stickToMouse);
            deltaX = e.pageX - newNote.offsetLeft;
            deltaY = e.pageY - newNote.offsetTop;
            dragNote = newNote;
            dragObj = item;
            dragIndex = index;
        }

        newNote.onmouseup = (e) => {
            localStorage.setItem('notes', JSON.stringify(notesArr));
            window.removeEventListener('mousemove', stickToMouse);
        }

        // добавляем заметку в html
        noteDiv.appendChild(newNote);
    });

}

class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
    }

    init() {
        let img = document.createElement('img');
        img.src = this.imgUrl;
        this.html = img;
        document.body.style.backgroundColor = 'black';
        document.body.appendChild(img);
        // renderHTML();

        // метод должен создать тег img
        // вложить в него src картинки (this.imgUrl)
        // и записать в this.html
        // + дергаем render

        // + странице должен залится фон черным
    }

    render() {
        // метод должен отрисовать изображение (this.html) на странице
        // применить фиксированное позиционирование
        // использовать this.top и this.left для указания позиции
        // использовать this.width для указания ширины
    }

    moveUp() {
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся ВЫШЕ
        // на 20px
        // + дергаем render
    }
    moveDown() {
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся НИЖЕ
        // на 20px
        // + дергаем render
    }
    moveLeft() {
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ЛЕВЕЕ
        // на 20px
        // + дергаем render
    }
    moveRight() {
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ПРАВЕЕ
        // на 20px
        // + дергаем render
    }
}

const imgUrl = 'https://bit.ly/2tcDito';
// const imgUrl = 'https://cs.pikabu.ru/post_img/2013/08/27/10/1377622408_895337685.jpg';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение

export const start = () => {

    mfLogotip.init();

    // mfLogotip.moveRight();
    // mfLogotip.moveRight();
    // mfLogotip.moveRight();
    // mfLogotip.moveRight();
    // mfLogotip.moveDown();
    // mfLogotip.moveDown();
    // mfLogotip.moveDown();
    // mfLogotip.moveDown();
    // something else, чтобы всё работало

}

// Есть определенное количество монет, которыми надо дать сдачу.
// Цель функции - определить количество монет определенного номинала, чтобы дать сдачу наименьшим количеством единиц
// Номиналы монет 50,25,10,5,1
// Их соответствующие названия "H","Q","D","N","P"

// Например
// makeExchange(51) должен дать в ответ { H: 1, P: 1 }
// makeExchange(49) должен дать в ответ { Q: 1, D: 2, P: 4 }
// makeExchange(99) должен дать в ответ { P: 1, Q: 1, D: 2, P: 4 }
// makeExchange(100) должен дать в ответ { H: 2 }
//
// ———————————

// Написать класс, который будет работать как калькулятор. Предусмотреть методы plus, minus, multiply, divide
// Пример использования:

// const calc = new Calc(10); // 10 это начальное число, с него надо начинать последующие действия, если параметра нет, то по умолчанию ноль
// calc.plus(100);
// console.log(calc.value); // 110
// calc.multiply(2);
// console.log(calc.value); // 220
// calc.divide(10); // 22
// console.log(calc.value); // 22
//
// ———————————
//
// Написать класс, который будет работать как калькулятор. Предусмотреть методы plus, minus, multiply, divide
// Цепочечное применение.
//     Пример использования:
//
//     const calc = new CalcChain(10); // 10 это начальное число, с него надо начинать последующие действия, если параметра нет, то по умолчанию ноль
// console.log( calc.plus(100).multiply(2).divide(10) )
// console.log(calc.value); // 22
//
// ———————————
//
// Наделить все массивы новым методом duplicator. Пример использования
//
// const arr = [1,2,3,4,5];
// const arrNew = arr.duplicator();
// console.log(arrNew); // [1,2,3,4,5,1,2,3,4,5]