// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


function fn(n) {
    let arr = Array.apply(null, {length: n + 1}).map(function () {
        return true;
    });
    arr[0] = arr[1] = false;
    let base = 2;
    while (Math.pow(base, 2) < n) {
        let counter = 2;
        while (counter * base < n) {
            arr[counter * base] = false;
            counter++;
        }
        base++;
    }
    return arr;
}

let arr = fn(Math.pow(10, 2));

// show result
arr.forEach(function(item, index) {
    if (item) {
        console.log(index);
    }
});