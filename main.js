/*Написати функцію assignObjects(obj1, obj2), яка приймає аргументами 2 об'єкти і повертає новий, 
який складається з властивостей обох об'єктів (склеїти). Якщо властивість повторюється, 
взяти значення другого об'єкта:

Наприклад: 
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 } */


function assignObjects(obj1, obj2) {
  const newObj = {};
  for (let key in obj1) {
    newObj[key] = obj1[key]
  }
  for (let key in obj2) {
    newObj[key] = obj2[key]
  }
  return newObj;
}

let object = assignObjects({ x: 10, y: 20 }, { z: 30, x: 25 });
console.log(object);


//Адаптувати функцію assignObjects() під невизначену кількість об'єктів. assignObjects(obj1, obj2, ....., objn);

function assignObjects(...objects) {
  let newObj = {};
  for (let obj of objects) {
    for (let key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/*Додати третій аргумент flag, який є boolean. Якщо flag === true, тоді за наявності властивості в обох 
об'єктів у результат піде значення першого об'єкта, false - з другого*/

Наприклад: 
assignObjects({a: 12, b: 3}, { a: 13, h: 0 }, true); => { a: 12, b: 3, h: 0 }*/

function assignObjects(obj1, obj2, flag ) {
  const newObj = obj1;

  for (let key in obj2) {
    if (key in newObj == key in obj2 && flag) {
      continue;
    }
    else {
      newObj[key] = obj2[key]
    }
  }
  return newObj;
}

let res = assignObjects({ a: 12, b: 3 }, { a: 13, h: 0 }, true);
console.log(res);*/


/*4) зробити параметр flag не обов'язковий, якщо параметр не переданий – то за замовченням він буде false*/

function assignObjects(obj1, obj2, flag = false) {
  const newObj = obj1;

  for (let key in obj2) {
    if (key in newObj == key in obj2 && flag) {
      continue;
    }
    else {
      newObj[key] = obj2[key]
    }
  }
  return newObj;
}

let res = assignObjects({ a: 12, b: 3 }, { a: 13, h: 0 }, true);
console.log(res);
