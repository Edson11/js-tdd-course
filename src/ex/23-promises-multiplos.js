const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({currency: 'euro', value: 3.50});
  },2000);
});

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Ireland','England','Scotland']);
  },600);
})

//Promise
//  .all([currency,countries])      // Segue quando a todas resolverem
//  .then(reponses => {
//    console.log(reponses);
//})

Promise
  .race([currency,countries])      // Quando a primeira concluir descarta as demais
  .then(reponses => {
    console.log(reponses);
})
