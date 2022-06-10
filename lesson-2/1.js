// 1. Почему код дает именно такие результаты?
// Ответ: В постфиксной форме сначала происходит возвращение значения, а потом выполняется
// инкрементирование. В префиксной форме инкрементирование производится сразу, а возврат — уже с
// обновленным значением.

// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2
// d = b++; alert(d); // 1
// c = (2+ ++a); alert(c); // 5
// d = (2+ b++); alert(d); // 4
// alert(a); // 3
// alert(b); // 3


// 2. Чему будет равен x?
// Ответ: 5

var a = 2;
var x = 1 + (a *= 2);


// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
// значения. Затем написать скрипт, который работает по следующему принципу:
//     o если a и b положительные, вывести их разность;
//     o если а и b отрицательные, вывести их произведение;
//     o если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

function compare_numbers(a, b) {
    if (a >= 0 && b >= 0)
        console.log(a - b);
    else if (a < 0 && b < 0)
        console.log(a * b);
    else
        console.log(a + b);
}

var a = 10, b = 15;

compare_numbers(a, b);


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
//     организовать вывод чисел от a до 15.

var a = 7;
switch (a){
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);

}


// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами. Обязательно использовать оператор return.

function sumNumb(num1, num2) {
    let res = num1 + num2
    return res
}

function subNumb(num1, num2) {
    let res = num1 - num2
    return res
}

function mulNumb(num1, num2) {
    let res = num1 * num2
    return res
}

function divNumb(num1, num2) {
    let res = num1 / num2
    return res
}


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
// зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperations(num1, num2, operation) {
    let result = ''
    switch (operation) {
        case '+':
            result = sumNumb(num1, num2);
            return result;
        case '-':
            result = subNumb(num1, num2);
            return result;
        case '*':
            result = mulNumb(num1, num2);
            return result;
        case '/':
            result = divNumb(num1, num2);
            return result;
    }
}


var a = 8;
var b = 15;
var oper = '+';

let result = mathOperations(a, b, oper)
console.log(result);

// 7. * Сравнить null и 0. Объяснить результат.
// Ответ: для нестрогого равенства == значений undefined и null действует особое правило: эти значения
// ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.

console.log(null == 0); // False

// 8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    if (pow == 1)
        return val;
    else
        return val *= power(val, pow - 1)
}

var a = power(2, 8)
console.log(a);
