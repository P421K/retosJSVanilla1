/*
5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
            debemos indicarlo.
*/

let num = +prompt(`introducir un numero: `);
let operacion = num % 2;
if (operacion == 0) {
  console.log(`es divisible por dos`);
} else {
  console.log(`no es divisble entre dos`);
}
