//function ajax(url) {
//  fetch(url)
//    .then(data => data.json())
//    .then(data => console.log(data));
//}

// Executa assincromo
//function ajaxGen() {
//  console.log('Buscando posts...');
//  ajax('https://willianjusten.com.br/search.json');  
//  
//  console.log('Buscando dados github...');
//  ajax('https://api.github.com/users/willianjusten');  
//}
//ajaxGen();



// Usando generator
function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => dados.next(data));
}

// transformar no generator
function* ajaxGen() {
  console.log('Buscando posts...');
  const post = yield ajax('https://willianjusten.com.br/search.json');  
  
  console.log(post);
  console.log('Buscando dados github...');
  
  const github = yield ajax('https://api.github.com/users/willianjusten');  
  console.log(github);
  
}

const dados = ajaxGen();
dados.next();



