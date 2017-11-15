class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }
  
  // Metodos
  hello() {
    console.log(`${this.sound} eu sou um ${this.kind}`);  
  }
  
  // propriedades
  get nome() {
    console.log(`${this.sound} meu nome é Jake`);
  }
  
  set nickname(nick) {
    this.nick = nick;
  }
  
  
  
  // Vai estar dipsonivel para a classe Animal e não para os objetos
  static into() {
    console.log('This is a class to create animals');
  }

  
}

const dog = new Animal('dog','au au');
const cat = new Animal('cat','miau miau')

