// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
//     надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
//     десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
//     ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
//     сообщение с помощью console.log и вернуть пустой объект.


function converter(number) {
    if (number > 999 || number < 0)
        console.log('Число вне рамок от 0 до 999');
    else {
        let num = {
            'единицы': number.toString()[2] * 1,
            'десятки': number.toString()[1] * 1,
            'сотни': number.toString()[0] * 1
        }
        return num
    }
}

console.log(converter(487));