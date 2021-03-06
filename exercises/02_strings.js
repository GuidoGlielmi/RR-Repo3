// Strings
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
// mayúscula (utilizar toUpperCase).
var string = "variable de diez caracteres";
console.log((string = string.toUpperCase()));

// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
// substring).
var stringB = "variable de diez caracteres";
var substring = stringB.substring(0, 5);
console.log(substring);

// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
// substring).
var stringC = "variable de diez caracteres";
var substringEnd = stringC.substring(stringC.length - 3, stringC.length);
console.log(substringEnd);

// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
// una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var stringD = "variable de diez caracteres";
var capitalizedString = stringD.substring(0, 1).toUpperCase() + stringD.substring(1, stringD.length).toLowerCase();
console.log(capitalizedString);

// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
// indexOf).
var stringE = "variable de diez caracteres";
var firstWhiteSpace = stringE.indexOf(" ");
console.log(firstWhiteSpace);

// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
// espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
// nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
// letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
// operador +).
var stringF = "sobresaturacion interminable";
var pascalCase = stringF.substring(0, 1).toUpperCase();
pascalCase += stringF.substring(1, stringF.indexOf(" ") + 1).toLowerCase();
pascalCase += stringF.substring(stringF.indexOf(" ") + 1, stringF.indexOf(" ") + 2).toUpperCase();
pascalCase += stringF.substring(stringF.indexOf(" ") + 2, stringF.length).toLowerCase();
console.log(pascalCase);