// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
//  a. Организовать такой массив для хранения товаров в корзине;
//  b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let prod of basket){
        basketPrice += prod.price * prod.count;
        console.log("Товар " + prod.product + " стоит: " + prod.price);
    }
    console.log("Стоимость корзины: " + basketPrice + " у.е.");
}


let basket = [
    {
        product: "pen",
        price: 25,
        count: 2
    },
    {
        product: "pencil",
        price: 20,
        count: 1
    },
    {
        product: "file",
        price: 50,
        count: 5
    },
    {
        product: "paper",
        price: 65,
        count: 3
    }
];

countBasketPrice(basket)