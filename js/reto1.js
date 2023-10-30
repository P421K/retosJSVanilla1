//**RETO1**
/*1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.*/

//ingreso datos
let num1 = +prompt(`ingresar numero 1: `);
let num2 = +prompt(`ingresar numero 2:`);

//comparacion de numeros
if (num1 > num2) {
    console.log(`el primer numero ${num1} , es mayor que el segundo numero. ${num2} .`)
    
}else if(num1 < num2){
    console.log(`el primer numero ${num1} , es menor que el segundo numero. ${num2} .`)
}else if(num1 == num2){
    console.log(`el numero 1 ${num1} , es igual que numero 2 ${num2} .`)
}
