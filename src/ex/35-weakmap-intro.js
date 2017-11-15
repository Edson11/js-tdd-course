/*
  não tem interação???
  trabalha com duplas: objeto/valor
*/

let obj1 = {
  name: 'Willian',
  age: 26,
};

let obj2 = {
  name: 'Jonas',
  age: 22,
};

let wm = new WeakMap();
wm.add(obj1, 'Info do Willian');
wm.add(obj2, 'Info do Jonas');
