//  No ES-5
//  function multiplay(mult, arg1, arg2, arg3) {
//  let arr = [];
//  arr.push(mult * arg1);
//  arr.push(mult * arg2);
//  arr.push(mult * arg3);
//  return arr;
//  }

// console.log(multiplay(2,1,2,3));

// No ES-6
// ..args = parametro tipo array de n elementos
function multiplay(mult, ...args) {
  return args.map(arg => arg * mult);
}

console.log(multiplay(2, 1, 2, 3));
