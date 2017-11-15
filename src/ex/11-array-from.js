const text = 'Willlian';

console.log(Array.from(text));

// vai obter um nodelist e não um array
const list = document.querySelectorAll('#list li');
//console.log(list);

// Obter o array a partir do nodelist
const listArray = Array.from(list);
// console.log(listArray);

const nomes = listArray.map((name) => name.textContent);
console.log(nomes);
