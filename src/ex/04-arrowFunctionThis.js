const sandwich = {
  bread: 'white',
  cheese: 'cheddar',

  prepare() {
    return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese`;
  },

/*
  // Utilizando o function normal o this se refere a windows,
  // por isso utilizado a tecnica de capturar o this na varival tha para passar a uma sub função
  make() {
    var that = this; // Salvo o this
    window.setTimeout(function () {
      console.log(that.prepare());
    }, 500);
  },
*/
  
  // Utilizando arrow function o this se refere ao contexto externo
  make() {
    window.setTimeout(()  => {
      console.log(tis.prepare());
    }, 500);
  },  

};


const btn = document.getElementById('id_b2');
btn.addEventListener('click', function () { sandwich.make(); });

