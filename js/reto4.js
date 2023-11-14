/*
4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.

*/

let radio = +prompt(`Introduce el radio.`);
// let num = parseInt(radio);
const pi = Math.PI;
let area = pi * radio ** 2;
let resultado = parseInt(area);

console.log(resultado);
