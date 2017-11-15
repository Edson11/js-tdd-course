let fisrtName = 'Willian';
let surName = 'Justen';
let age = 26;


// Desta forma
/*
const person = {
  firstName:  fisrtName,
  surName: surName,
  age: age
};
*/
// ou desta
/*
const person = {
  fisrtName,
  surName,
  age
};
*/


// function normal
/*
const person = {
  fisrtName,
  surName,
  age,
  hello: function() {
    console.log('Ola')
  }
};
*/
// com shorHand
const person = {
  fisrtName,
  surName,
  age,
  hello() {
    console.log('Ola')
  }
};



console.log(person);
console.log(person.hello());
