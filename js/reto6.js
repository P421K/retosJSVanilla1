/*
6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21%
*/

let precioProducto = +prompt("indica su precio para calcular el iva: ");
const iva = precioProducto / 21;
let precioFinal = parseInt (precioProducto + iva);

console.log(`El precio con iva es de : ${precioFinal}`);
