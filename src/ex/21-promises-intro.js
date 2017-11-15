// Execução de funçõs assincronas
var defer = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (true) {
        resolve('Hello! It works!');
      } else {
        reject('Error!');
      }
  }, 2000); // set timeout, aguarda 2 segundos
});

console.log('oi 1');

//defer
//  .then((data) => console.log(data))
//  .catch((err) => console.log(err));

// agora, encadeando .then
defer
  .then((data) => {
        console.log(data);
        return 'foo';
    })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));




console.log('oi 2');
