// 1.4
export function uniqueWords(str){
  if ( typeof str != "string") {
      return "Wrong str";
  }
  // Массив знаков препинания
  let symbols = [",", ".", ":", ";","?","!", "`",'"',"'","~","@","#","№",
  "$","%","^","&","*","(",")","_","-","=","+","[","]","{","}","|",'/',"<",">"];

  let map = new Map();
  let arr = str.toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {

      // проверка элемента на слово: не число, не "пустое" слово, не символ
      if (arr[i] != "" && isNaN(+arr[i]) && !symbols.includes(arr[i])) {
          let newItem = "";

          // удаляем из слова цифры и символы
          for (let char of arr[i]) {
              if (!symbols.includes(char) && isNaN(+char)){
                  newItem += char;
              }
          }
          if (newItem != "") {
              arr[i] = newItem;

          // добавляем слово, которое встретили впервые
          if (map.get(arr[i]) === undefined){
              map.set(arr[i], 1);
          }
          // засчитываем повторение слова
          else {
              map.set(arr[i], map.get(arr[i]) + 1);
          }
          }
      }
  }
  return map;
}

//1.3
export function quantityWords(str){
  if ( typeof str != "string") {
      return "Wrong str";
  }
  // Массив знаков препинания
  let symbols = [",", ".", ":", ";","?","!", "`",'"',"'","~","@","#","№",
  "$","%","^","&","*","(",")","_","-","=","+","[","]","{","}","|",'/',"<",">"];


  let arr = str.split(" ");
  let value = arr.reduce(function(accumulator, item, index, array) {
      // проверка элемента на слово: не число, не "пустое" слово, не символ
      if (isNaN(+item) && item != "" && !symbols.includes(item)){
          return accumulator + 1;
      }
      else return accumulator;
    }, 0);

  return value;
}

// 1.2
export function correctSpace(str){
  // Проверяем данные на валидность
  if ( typeof str != "string") {
      return "Wrong str";
  }

  // Массив знаков препинания
  let symbols = [",", ".", ":", ";","?","!"];

  let arr = str.split(" ");

  // Перебираем массив из слов в строке
  for(let i = 0; i < arr.length; i++) {
      // Проверка на "пустое" слово
      if (arr[i] != "") {

          let charNum = 0;
          // Перебираем массив со знаками препинания
          for (let symbol of symbols) {
              charNum = 0;
              // пока знак препинания есть в элементе массива
              while (arr[i].indexOf(symbol, charNum) > -1){

                  if (+arr[i].indexOf(symbol, charNum) != +arr[i].length-1){

                      arr[i] = arr[i].slice(0, arr[i].indexOf(symbol, charNum) + 1) + " " +
                          arr[i].slice(arr[i].indexOf(symbol, charNum) + 1);

                      charNum = +arr[i].indexOf(symbol, charNum) + 1;

                  }
                  else {
                      break;
                  }
              }  
          }
          // переносим знак препинания в предыдущий элемент, если он на 1 месте в строке
          if (symbols.includes(arr[i][0])){
              arr[i-1] = arr[i-1] + arr[i];
              arr.splice(i, 1);
              i--;  
          }   
      }
      // если слово "пустое"
      else {
          arr.splice(i, 1);
          i--;  
      }
      };
  return arr.join(" ");
}

// 1.1
export function lowStr(str){
  
  // Проверяем данные на валидность
  if ( typeof str != "string") {
      return "Wrong str";
  }
  return str[0].toUpperCase() + str.toLowerCase().slice(1);

}