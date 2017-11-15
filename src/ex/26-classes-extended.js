class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
  hello() {
    console.log(`I'm ${this.nome}`);
  }
}

class Dog extends Animal {
  constructor(nome, sound) {
    super(nome);                    // chamada ao construtor da classe ancestral
    this.sound = sound;
  }
  
  bark() {
      console.log(`${this.sound}! I'm ${this.nome}!`);
  }
}



const elephant = new Animal('Dumbo');
const dog = new Dog('Jake', 'auau');
