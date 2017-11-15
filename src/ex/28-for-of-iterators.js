var txt = 'irland'; // Iterable
var it = txt[Symbol.iterator](); // Iterator

//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

//by Edson
//do {
//    var x = it.next();
//    console.log(x);
//  } while(x.done === false)

for (letra of txt) {
  console.log(letra)
  if (letra === 'a') break;
}
