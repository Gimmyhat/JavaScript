// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.


let itemsDatabaseObj = {
    // перечень товаров в категории Items
    _items: {
        'Утюг': {
            cost: 100,
            id: 7763626,
            fullName: 'Samsung G433'
        },
        'Кофеварка': {
            cost: 50,
            id: 7763624
        },
        'Пылесос': {
            cost: 250,
            id: 7763625
        }
    },
    // ссылка на items:
    get items() {
        return this._items;
    },
    // функция добавления продукта:
    addItem(name, cost, id, fullName) {
        let newItem = {
            cost,
            id,
            fullName
        };
        this.items[name] = newItem;
    },
    // функция удаления продукта:
    removeItem(name) {
        delete this.items[name];
    },
    // функция возврата стоимости товара по названию товара:
    getItemCost(name) {
        return this.items[name].cost;
    },
    // функция возврата полной стоимости корзины с учетом количества каждого элемента:
    getItemCostAll(obj) {
        let totalCost = 0;
        // получаем перечень ключей корзины
        let keysObj = Object.keys(obj);
        for (let i = 0; i < keysObj.length; i++) {
            /*console.log(keysObj[i]+' costs: '+this.getItemCost(keysObj[i])+' times: '+obj[keysObj[i]].count);*/
            totalCost += this.getItemCost(keysObj[i]) * obj[keysObj[i]].count;
            /* ... this.getItemCost(keysObj[i]) - передаем название продукта из массива ключей в функцию воврата стоимости товара getItemCost,
                ... * obj[keysObj[i]].count - перемножаем на значение количества продуктов в объекте корзины,
                    totalCost += ...- то что получилось, добавляем в общую стоимость.
            */
        }
        // возвращаем общую стоимость:
        return totalCost;
    },
};

// корзина с товарами и количеством каждого товара:
let basketItemsObj = {
    'Утюг': {
        count: 3
    },
    'Кофеварка': {
        count: 3
    },
    'Пылесос': {
        count: 1
    }
};

// инфо часть:
console.log('Предметы в БД:')
for (keys in itemsDatabaseObj.items) {
    console.log(keys + ', цена: ' + itemsDatabaseObj.items[keys].cost);
}
console.log('============================');
console.log('Предметы в корзине:');
for (keys in basketItemsObj) {
    console.log(keys + ', в количестве: ' + basketItemsObj[keys].count + ' шт.')
}
console.log('============================');

// вывод метода getItemCostAll объекта itemsDatabaseObj в консоль:
console.log('Стоимость корзины: ' + itemsDatabaseObj.getItemCostAll(basketItemsObj));

