function Animal(kind, sound) {
  this.kind = kind;
  this.sound = sound;
}

// Adicionando um metodo ao prototipo aninal
Animal.prototype.hello = function() {
  console.log(`${this.sound} eu sou um ${this.kind}`);
}

const dog = new Animal('dog','au au');
const cat = new Animal('cat','miau miau')


