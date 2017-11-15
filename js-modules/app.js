/* 

// Utilizando o import
// import <metodo> from <biblioteca>

// * carrega todos os metodos
import * as R from 'ramda';
// as => alias (novo nome para o metodo)

 //carrega um metodo especifico
 //se a biblioteca exportar apenas um metodo nao precisa das chaves
 import {union} from 'ramda'; 
 import {union as juntaTudo} from 'ramda'; 
 import {union as juntaTudo} from 'ramda'; 
 import {union, uniq} from 'ramda'; 
 
*/

// Utilizar funções da biblioteca ramda. Iportar todos os metodos renomeando ramda
// para R
import * as R from 'ramda';

const arr1 = [1,1,1,2,2,3,4,5,6,6];
const arr2 = [5,6,6,6,6,7,7,8,10,1];

// Utilizar métodos da biblioteca Ramda.
// Unir dois array eliminando duplicatas
const arr3 = R.union(arr1,arr2);
console.log(arr3);

// Eliminar duplicatas de um arr
const arr4 = R.uniq(arr1);
console.log(arr4);


// Importando de nossa biblioteca
//import sum from './utils';
//console.log(sum(10,45));

//import soma from './utils'; // importando e alterando o nome do método default
//console.log(soma(20,45));

import soma, {sub, multiplicar, div as dividir, PI} from './utils'; 
console.log(soma(20,45));
console.log(sub(45,20));
console.log(multiplicar(45,20));
console.log(dividir(4,2));
console.log(PI);
