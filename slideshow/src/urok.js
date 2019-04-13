var money, time;
money = +(prompt("Ваш бюджет на месяц?", "1000"));
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-12")
var appData = {
    budjet: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: false
}
let q1 = prompt('Введите обязательную статью расходов в этом месяце');
let q2 = prompt('Во сколько обойдется?');
appData.expenses[q1] = +q2;
let q3 = prompt('Введите обязательную статью расходов в этом месяце');
let q4 = prompt('Во сколько обойдется?');
appData.expenses[q3] = +q4;
alert('Ваш бюджет на 1 день '+((appData.expenses[q1]+appData.expenses[q3])/30));
//console.log('Ваш бюджет на 1 день ' + ((appData.expenses[q1] + appData.expenses[q3]) / 30));