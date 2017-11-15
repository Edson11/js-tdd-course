let front = ['react','vue','angular'];
let back = ['python','ruby','nodejs'];

// Separar a string 'wil' e transformou em array com 3 elementos
//console.log([...'wil']);

// desmembrar um array
//console.log(...front);

// Concatenar dois arrays - modo antigo
//let fullStack = front.concat(back);
//console.log(fullStack);

// concatenar dois arrayis inserindo um elemento no meio - modo antigo
//let fullStack = [];   //Criar array vazio
//fullStack = fullStack.concat(front); // adiciona os elementros do primeiro array
//fullStack.push('RxJs'); // adicionar o novo elemento 
//fullStack = fullStack.concat(back); // adiciona os elementros do ultimo array
//console.log(fullStack);

// Utilizando o operador spread
let fullStack = [...front,'RxJs', ...back]
console.log(fullStack);
