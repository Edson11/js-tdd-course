function sum (a, b) {
  return a + b;
}

// Método principal
// só pode ter um default por arquivo

// pode ser importado com qualquer nome e não precisa utilizar a chaves
export default sum;

// Named export
// Pode ter vários exports dentro de um mesmo arquivo
// mas só pode chamar com o mesmo nome
// import precisa das chaves
export function sub(a,b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const PI = 3.14;

export {mult as multiplicar, div,PI};
