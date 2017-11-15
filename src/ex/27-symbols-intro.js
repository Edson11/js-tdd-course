//são sempre únicos
let foo = Symbol('nome');
let bar = Symbol('nome');

// console.log(foo === bar);   // retorna false
// console.log(foo == bar);    // retonra false



let obj = {
  [Symbol('nome')]: 'Willian',
  [Symbol('age')]: 26,
  city: 'Dublin'
}

console.log(Object.keys(obj));  // Somente city

// Para obter as propriedades tipo symbols
const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map( sym => obj[sym]);     // Criar um array com os symbols
console.log(data);
