/*
RETO 9
Pedir al usuario que ingrese un numero y luego que escriba las palabras de la cantidad anterior,
imprimirlas por pantalla y en consola.
*/

// Pide al usuario ingresar una cantidad menor a 4
let cantidadPalabras = prompt("Ingrese una cantidad de palabras (menor a 4):");

// Verifica que la cantidad ingresada sea un número y menor a 4
if (!isNaN(cantidadPalabras) && cantidadPalabras > 0 && cantidadPalabras < 4) {
  let palabras = [];

  // Pide al usuario ingresar las palabras según la cantidad ingresada
  for (let i = 0; i < cantidadPalabras; i++) {
    let palabra = prompt("Ingrese una palabra:");
    palabras.push(palabra);
  }

  // Imprime las palabras en la pantalla
  document.write("<p>Palabras ingresadas:</p>");
  for (let i = 0; i < palabras.length; i++) {
    document.write(`<br \> ${palabras[i]} <br \>`);
    console.log(palabras[i]);
  }
} else {
  alert("Por favor, ingrese un número válido menor a 4.");
}

/*
  // Imprime las palabras en la pantalla
  document.write("<p>Palabras ingresadas:</p>");
  document.write("<ul>");
  
  for (let i = 0; i < palabras.length; i++) {
    document.write("<li>" + palabras[i] + "</li>");
    console.log(palabras[i]);
  }

    document.write("</ul>");
  } else {
    alert("Por favor, ingrese un número válido menor a 4.");
*/
