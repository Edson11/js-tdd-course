const data = [
  {
    name: 'Willian',
    age: 26,
    city: 'Dublin'
  },
  {
    name: 'jonas',
    age: 22,
    city: 'cologne'
  }
];

const sampleArray = [4, -5, 0, -1];

// Voltar o primeiro elemento que satisfaz a condição
/*
const underZero = sampleArray.find(x => x < 0);
const underZeroIndex = sampleArray.findIndex(x => x < 0);
console.log(underZero);
console.log(underZeroIndex);
*/


const will = data.find(person => person.name == 'jonas');
const willIndex = data.findIndex(person => person.name == 'jonas');

console.log(will,willIndex );


