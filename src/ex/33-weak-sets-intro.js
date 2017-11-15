// Diferença para o Set que trabalho somente com objetos
// Não aceita interação???

let obj1 = {
  name: 'Willian',
  age: 26,
};

let obj2 = {
  name: 'Jonas',
  age: 22,
};

let ws = new WeakSet([obj1,obj2]);

console.log(ws);