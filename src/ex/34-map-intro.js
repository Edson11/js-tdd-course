/*
  Semelhante aos set, mas trabalha com duplas: chave/valor


*/



let m = new Map();

m.set('Willian', 26);
m.set('Jonas', 22);
m.set('Godoy', 30);


console.log( m );

const it = m.values();

for (item of it) {
  console.log(item);
}








