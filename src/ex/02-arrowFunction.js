const brasil = ['Brasilia', 'Salvador', 'Rio de Janeiro'];

// Map
const love = brasil.map(function (cidade) {
  return `Eu love ${cidade}!`;
});
// console.log(love);


// Arrow function
const loveArrow = brasil.map( (cidade) => {
  return `Eu love ${cidade}! arrow`;
});
// console.log(loveArrow);

// Arrow function simples
const loveArrowSingle = brasil.map(cidade => {
  return `Eu love ${cidade}! single)`;
});
// console.log(loveArrowSingle);


// Arrow function em uma linha
const loveArrowOneLine = brasil.map( cidade =>  `Eu love ${cidade}! oneOneLine` );
//console.log(loveArrowOneLine);

// Encadeamento de metodos
const loveArrowOneChain = brasil
  .filter(cidade => cidade == 'Salvador')
  .map( cidade =>  `Eu love ${cidade}! chain` );
console.log(loveArrowOneChain);





