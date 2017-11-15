var data = {
  name: 'Willian',
  surname: 'Justen',
  age: 25,
  blog: 'https://willianjusten.com.br',
  social: {
    twitter: '@willian_justen',
    facebook: '/willianjusten'
  }
}

/*
// Modo normal de ober partes de valores de objeto
const name = data.name;
const surname = data.surname;
const twitter = data.social.twitter;
*/
// Agora de forma destructurin
const {name, surname} = data;
const {twitter} = data.social;

// renomeando uma variavel
const {facebook:fb} = data.social;

console.log(name);
console.log(surname);
console.log(twitter);
console.log(fb);

// Utilizando um valor default se a variavel não existir
const {city = 'Dublin'} = data;
console.log(city);
