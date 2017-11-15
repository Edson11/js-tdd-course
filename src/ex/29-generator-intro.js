  function* getNomes() {
    console.log('chamando primeiro nome');
    yield 'Willian';
    
    console.log('chamando segundo nome');
    yield 'Jonas';
    
    console.log('chamando terceiro nome');
    yield 'Gabriel';
  }

const nomes = getNomes();
console.log( nomes );

//console.log( nomes.next() );
//console.log( nomes.next() );
//console.log( nomes.next() );

// obter somente o valor
console.log( nomes.next().value );
