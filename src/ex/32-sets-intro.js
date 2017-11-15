let mySet = new Set(['willian','jonas','godoy']);


// Não aceita elementos duplicados, adicionando um já existe desconsidera.
mySet.add('marcio');
mySet.add('marcio');


mySet.delete('willian');

console.log(mySet);
console.log('Has willian?', mySet.has('willian'));

// Os elementos são iterators
let it = mySet.values();

for (item of it) {
  console.log(item);
}