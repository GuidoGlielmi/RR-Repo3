// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
// variable en la consola del navegador.
function sum(a, b) {
  return a + b;
}
var sumNum = sum(5, 8);
console.log(sumNum);

// b) A la función suma anterior, agregarle una validación para controlar si alguno de los
// parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
// tiene error y retornar el valor NaN como resultado.
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Error: Uno de los parámetros ingresados no es un número");
    return NaN;
  }
  return a + b;
}

// c) Crear una función validate integer que reciba un número como parámetro y devuelva
// verdadero si es un número entero.
function validateInteger(int) {
  return Number.isInteger(int);
}


// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
// sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
// número convertido a entero (redondeado).
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Error: Uno de los parámetros ingresados no es un número");
    return NaN;
  }
  if (!(Number.isInteger(a) && Number.isInteger(b))) {
    console.log("Se han ingresado números no enteros. La suma se hará con valores redondeados");
  }
  return Math.floor(a) + Math.floor(b);
}

// e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la
// función suma probando que todo siga funcionando igual
function validateNumber(n) {
  if (typeof n !== "number") {
    return NaN;
  }
  return true;
}
function sum(a, b) {
  if (validateNumber(a) && validateNumber(b)) {
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
      console.log("Se han ingresado números no enteros. La suma se hará con valores redondeados");
    }
    return Math.floor(a) + Math.floor(b);
  }
  console.log("Error: Uno de los parámetros ingresados no es un número");
  return NaN;
}