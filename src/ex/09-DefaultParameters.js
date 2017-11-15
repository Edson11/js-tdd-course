// no es5
/*
function hello(name, surname) {
  name = name || 'Willian';
  surname = surname || 'Justen';
  
  console.log(`Hello ${name} ${surname}! How are you?`)
}
*/

// no es com default parameters
function hello(name='Willian', surname='Jusen') {
  console.log(`Hello ${name} ${surname}! How are you??`)
}


hello();
hello('Marta', 'Souza');
