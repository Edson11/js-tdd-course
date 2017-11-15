const btn = document.getElementById('id_b1');

/* Ussando uma função normal para o evento click, this se refere ao botão

btn.addEventListener('click', function f() {
  console.log(this);    // This se refere ao btn
});

*/


// Utilizando uma arrow function, this se refere ao contexto global, neste caso a window
btn.addEventListener('click', () => {
  console.log(this); // This se refere a window
});

