// Получить кнопку "Начать расчет" через id
let btn = document.getElementById("start");
console.log('Кнопка "Начать расчет"');
console.log(btn);

//  Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
let res = document.querySelector(".result-table");
let arrValue = res.getElementsByTagName("div");
console.log("");
console.log('Блоки правой части с "...-value"');
for (i in arrValue) {
    let cls = arrValue[i].className; // взять имя класса элемента
    if (cls && cls.indexOf('-value') >= 0) {   // проверить на соответствие требуемому шаблону
         console.log(res.querySelector('.'+cls));   // выбор элемента по классу
    }
};

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let arrInput = document.querySelectorAll(".expenses-item");
console.log("");
console.log('Поля "input"');
arrInput.forEach(function(item, i) {
    console.log(item);
})

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let btns = document.getElementsByTagName("button");
console.log("");
console.log('Кнопки “Утвердить” и “Рассчитать”');
let utv1 = btns.item(0);
console.log(utv1);
let utv2 = btns.item(1);
console.log(utv2);
let rasch = btns.item(2);
console.log(rasch);

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let arrOptExp = document.querySelectorAll(".optionalexpenses-item");
console.log("");
console.log('Поля для ввода необязательных расходов');
arrOptExp.forEach(function(item, i) {
    console.log(item);
})

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let income = document.querySelector(".choose-income");
let chkBox = document.querySelector("#savings");
let vsum = document.querySelector("#sum");
let percent = document.querySelector("#percent");
let vyear = document.querySelector(".year-value");
let vmonth = document.querySelector(".month-value");
let vday = document.querySelector(".day-value");
console.log("");
console.log('Оставшиеся поля');
console.log(income);
console.log(chkBox);
console.log(vsum);
console.log(percent);
console.log(vyear);
console.log(vmonth);
console.log(vday);
