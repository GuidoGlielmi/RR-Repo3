// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
// consola los meses 5 y 11 (utilizar console.log).
// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
// e) Invertir el orden del array (utilizar reverse).
// f) Unir todos los elementos del array en un único string donde cada mes este separado
// por un guión - (utilizar join).g) Crear una copia del array de meses
// que contenga desde Mayo hasta Noviembre (utilizar slice).

var myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(myArray[4]);
console.log(myArray[10]);

console.log(myArray.sort());

myArray.push('elemento1');
myArray.unshift('elemento2');
console.log(myArray);

myArray.shift();
myArray.pop();
console.log(myArray);

console.log(myArray.reverse());

var myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var myString = myArray.join(" - ");
var myArrayCopy = myArray.slice(4,11);
console.log(myString);
console.log(myArrayCopy);