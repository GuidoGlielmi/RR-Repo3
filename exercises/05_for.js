// a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
// JavaScript para mostrar una alerta utilizando cada una de las palabras.
// b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
// alerta por cada palabra modificada.
// c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
// punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la
// variable sentence. Al final mostrar una única alerta con la cadena completa.
// d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el
// número de la repetición, es decir que al final de la ejecución del bucle for debería
// haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar
// por la consola del navegador el array final (utilizar console.log).

var myArray = ['este', 'array', 'contiene', 'cinco', 'palabras'];
for (var i = 0; i <= myArray.length - 1; i++) {
  console.log('alerta: ' + myArray[i]);
}

for (var i = 0; i <= myArray.length - 1; i++) {
  myArray[i] = myArray[i].substring(0, 1).toUpperCase() + myArray[i].substring(1, myArray[i].length);
  console.log('alerta: ' + myArray[i]);
}

var sentence = [''];
myArray = ['este', 'array', 'contiene', 'cinco', 'palabras'];
for (var i = 0; i <= myArray.length - 1; i++) {
    sentence[i] = myArray[i];
}
console.log('alerta: ' + sentence);