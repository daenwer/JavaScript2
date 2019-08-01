class Logo {
    constructor(url) {
        this.top = 50;
        this.left = 50;
        this.width = 100;
        this.imgUrl = url;
        this.html = null;
    }

    init() {
        this.img = document.createElement('img');
        this.img.src = this.imgUrl;
        this.img.style.position = 'absolute';
        this.img.style.width = this.width + 'px';
        this.img.style.left = this.left + 'px';
        this.img.style.top = this.top + 'px';
        this.html = document.createElement('div');
        document.body.style.backgroundColor = 'black';
        document.body.appendChild(this.html);

        // метод должен создать тег img
        // вложить в него src картинки (this.imgUrl)
        // и записать в this.html
        // + дергаем render
        // + странице должен залится фон черным
    }

    render() {
        this.html.innerHTML = '';
        this.img.style.left = this.left + 'px';
        this.img.style.top = this.top + 'px';
        this.html.appendChild(this.img);

        // метод должен отрисовать изображение (this.html) на странице
        // применить фиксированное позиционирование
        // использовать this.top и this.left для указания позиции
        // использовать this.width для указания ширины
    }

    moveUp() {
        this.top -= 20;
        this.render();
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся ВЫШЕ
        // на 20px
        // + дергаем render
    }

    moveDown() {
        this.top += 20;
        this.render();
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся НИЖЕ
        // на 20px
        // + дергаем render
    }

    moveLeft() {
        this.left -= 20;
        this.render();
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ЛЕВЕЕ
        // на 20px
        // + дергаем render
    }

    moveRight() {
        this.left += 20;
        this.render();
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ПРАВЕЕ
        // на 20px
        // + дергаем render
    }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
mfLogotip.init();

// запускаем наше микро-приложение

export const start = () => {


    mfLogotip.render();

    // mfLogotip.moveRight();
    // mfLogotip.moveRight();
    // mfLogotip.moveRight();
    // mfLogotip.moveRight();
    // mfLogotip.moveDown();
    // mfLogotip.moveDown();
    // mfLogotip.moveDown();
    // mfLogotip.moveDown();
    // something else, чтобы всё работало

    addEventListener("keydown", function(event) {
        if (event.keyCode === 37) {
            mfLogotip.moveLeft();
        } else if (event.keyCode === 38) {
            mfLogotip.moveUp();
        } else if (event.keyCode === 39) {
            mfLogotip.moveRight();
        } else if (event.keyCode === 40) {
            mfLogotip.moveDown();
        }
    });
}


// Извиняюсь, дальше не успел. Исправлюсь!!!!!!!!!.

// Есть определенное количество монет, которыми надо дать сдачу.
// Цель функции - определить количество монет определенного номинала, чтобы дать сдачу наименьшим количеством единиц
// Номиналы монет 50,25,10,5,1
// Их соответствующие названия "H","Q","D","N","P"

const rating = {
    'H': 50,
    'Q': 25,
    'D': 10,
    'N': 5,
    'P': 1,
};

export const makeExchange = function (change) {
    let result = {};
    let amount = 0;
    let arr = ['H', 'Q', 'D', 'N', 'P'];
    arr.forEach(function (item) {
        amount = Math.floor(change / rating[item]);
        if (amount > 0) {
            result[item] = amount;
            change -= amount * rating[item];
        }
    })
    return result;
}


// Например
// makeExchange(51) должен дать в ответ { H: 1, P: 1 }
// makeExchange(49) должен дать в ответ { Q: 1, D: 2, P: 4 }
// makeExchange(99) должен дать в ответ { P: 1, Q: 1, D: 2, P: 4 }
// makeExchange(100) должен дать в ответ { H: 2 }
//

// const nominal =

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


export class Calc {
    constructor(value) {
        this.value = value;
    }
    plus(value) {
        this.value += value;
    }
    minus(value) {
        this.value -= value;
    }
    multiply(value) {
        this.value *= value;
    }
    divide(value) {
        if (value !== 0) {
            this.value /= value;
        }
    }
}

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


export class CalcChain {
    constructor(value) {
        this.value = value;
    }

    plus(value) {
        this.value += value;
        return this;
    }
    minus(value) {
        this.value -= value;
        return this;
    }
    multiply(value) {
        this.value *= value;
        return this;
    }
    divide(value) {
        if (value !== 0) {
            this.value /= value;
        }
        return this;
    }
}


// ———————————
//
// Наделить все массивы новым методом duplicator. Пример использования
//
// const arr = [1,2,3,4,5];
// const arrNew = arr.duplicator();
// console.log(arrNew); // [1,2,3,4,5,1,2,3,4,5]

Array.prototype.duplicator = function() {
    let newArr = [...this, ...this];
    return newArr;
};


