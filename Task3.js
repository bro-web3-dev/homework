'use strict';
class Product {

    constructor({ name, price, quantity, description}) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }

  }

// данные для создания объектов класса
let names = ['Мыло', 'Стул', 'Стол', 'Телефон', 'Компьютер', 'Печенье', 'Бумага', 'Часы',
 'Наушники', 'Ковер', ]
let prices = [250, 11500, 750, 999, 35000, 2400, 75, 789, 444, 9999, ]
let quantities = [10, 123, 500, 5, 25, 13, 75, 90, 444, 64, ]
let descriptions = ['Удобный и дешевый', 'Вписывается в любой интерьер', 'Практичный',
 'Многофункциональный', 'Прост в обслуживании', 'Вкусный', 'Дешевый', 'Современный',
 'Стильный', 'Отличный подарок!', ]


let arrObjs = [];

// функция заполняет массив объектами класса с рандомными данными 
function fillArrObj(quantityObjs){
    for (let i = 0; i < quantityObjs; i++){
        arrObjs.push(new Product({
            name: names[Math.floor(Math.random() * names.length)],
            price: prices[Math.floor(Math.random() * prices.length)],
            quantity: quantities[Math.floor(Math.random() * quantities.length)],
            description: descriptions[Math.floor(Math.random() * descriptions.length)]
        }))
    }
}

fillArrObj(4);

// функция, фильтрующая массив с объектами класса
function arrObjsFilter(str){
    let conditions = str.split("&");
    let filter = {};

    // форматируем числовое условие к виду price->-2
    for (let i = 0; i < conditions.length ; i++){
        if (conditions[i].startsWith("price") || conditions[i].startsWith("quantity")){
            if (conditions[i].indexOf("=") != -1){
                conditions[i] = conditions[i].slice(0, conditions[i].indexOf("=") + 1)
                 + "-" + conditions[i].slice(conditions[i].indexOf("=") + 1);
            }
            else if (conditions[i].indexOf(">") != -1){
                conditions[i] = conditions[i].slice(0, conditions[i].indexOf(">") + 1)
                 + "-" + conditions[i].slice(conditions[i].indexOf(">") + 1);
            }
            else if (conditions[i].indexOf("<") != -1){
                conditions[i] = conditions[i].slice(0, conditions[i].indexOf("<") + 1)
                 + "-" + conditions[i].slice(conditions[i].indexOf("<") + 1);
            }
        }

        // парсим условие по имени, символу(методу), значению
        let nameParam = conditions[i].split("-")[0];
        let symbolParam = conditions[i].split("-")[1];
        let valueParam = conditions[i].split("-")[2];

        // записываем условия в объект filter
        filter[nameParam] = {
            [symbolParam]: valueParam
        }
    }
    
    // фильтруем массив объектов класса
    let result  = arrObjs.filter(function(item, index, array) {

         if ("name" in filter){
            let symbolParam = Object.keys(filter.name)[0];

            if (symbolParam == "contains"){
                if (!item.name.includes(filter.name[symbolParam])){
                    return false;
                }
            }

            else if (symbolParam == "starts"){
                if (!item.name.startsWith(filter.name[symbolParam])){
                    return false;
                }
            }

            else if (symbolParam == "ends"){
                if (!item.name.endsWith(filter.name[symbolParam])){
                    return false;
                }
            }
        }

        if ("price" in filter){
            let symbolParam = Object.keys(filter.price)[0];

            if (symbolParam == "="){
                if (item.price != +filter.price[symbolParam]){
                    return false;
                }
            }

            else if (symbolParam == ">"){
                if (item.price <= +filter.price[symbolParam]){
                    return false;
                }
            }

            else if (symbolParam == "<"){
                if (item.price >= +filter.price[symbolParam]){
                    return false;
                }
            }
            
            else if (symbolParam == ">="){
                if (item.price < +filter.price[symbolParam]){
                    return false;
                }
            }

            else if (symbolParam == "<="){
                if (item.price > +filter.price[symbolParam]){
                    return false;
                }
            }
        }

        if ("quantity" in filter){
            let symbolParam = Object.keys(filter.quantity)[0];

            if (symbolParam == "="){
                if (item.quantity != +filter.quantity[symbolParam]){
                    return false;
                }
            }

            else if (symbolParam == ">"){
                if (item.quantity <= +filter.quantity[symbolParam]){
                    return false;
                }
            }

            else if (symbolParam == "<"){
                if (item.quantity >= +filter.quantity[symbolParam]){
                    return false;
                }
            }
            
            else if (symbolParam == ">="){
                if (item.quantity < +filter.quantity[symbolParam]){
                    return false;
                }
            }

            else if (symbolParam == "<="){
                if (item.quantity > +filter.quantity[symbolParam]){
                    return false;
                }
            }
        }

        if ("description" in filter){
            let symbolParam = Object.keys(filter.description)[0];

            if (symbolParam == "contains"){
                if (!item.description.includes(filter.description[symbolParam])){
                    return false;
                }
            }

            else if (symbolParam == "starts"){
                if (!item.description.startsWith(filter.description[symbolParam])){
                    return false;
                }
            }

            else if (symbolParam == "ends"){
                if (!item.description.endsWith(filter.description[symbolParam])){
                    return false;
                }
            }
        }

        return true;
    })
    
    if (result == false)
        return "Подходящие объекты не найдены";
    else
        return result;
}
