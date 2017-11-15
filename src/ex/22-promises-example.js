// fetch espera receber qualquer tipo de dado
// fecht é o mesmo que a chamada $.ajax mas trabalha com o protocolo de promises.
var posts = fetch('https://willianjusten.com.br/search.json');

// statusn do promises
// pending
// resolved
// rejected

// pending
// console.log(posts);

// resolved
//setTimeout(() => {
//  console.log(posts);
//},3000);

 
//posts
//  .then(data => data.json())    // Transformar para json
//  .then(data => console.log(data)); // Joga na tela

//posts
//  .then(data => data.json())    // Transformar para json
//  .then(data => data.map(p => {
//    console.log(p.title); // Joga na tela, somente os titulos
//  }));

// agora simulando um erro
posts
  .then(data => data.json())    // Transformar para json
  .then(data => data.map(p => {
    throw new Error('xi deu erro');
    console.log(p.title); // Joga na tela, somente os titulos
    }))
  .catch(err => console.error(err));
        
