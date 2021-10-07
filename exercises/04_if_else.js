// a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
// mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un
// alerta con el mensaje “Lower than 0,5”.
// b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los
// siguientes mensajes de alerta:
// i) “Bebe” si la edad es menor a 2 años;
// ii) “Nino” si la edad es entre 2 y 12 años;
// iii) “Adolescente” entre 13 y 19 años;
// iv) “Joven” entre 20 y 30 años;
// v) “Adulto” entre 31 y 60 años;
// vi) “Adulto mayor” entre 61 y 75 años;
// vii) “Anciano” si es mayor a 75 años.

if (Math.random() > 0, 5) {
    console.log('Greater than 0,5');
}
else {
    console.log('Lower than 0,5');
}

var Age = Math.random()*100;
console.log(Age);
if(Age > 75){
    console.log('Anciano');
}
else if (Age > 60) {
    console.log('Adulto mayor');
}
else if (Age > 30) {
    console.log('Adulto');
}
else if (Age > 19) {
    console.log('Joven');
}
else if (Age > 12) {
    console.log('Adolescente');
}
else if (Age > 1) {
    console.log('Nino');
}
else if (Age >= 0) {
    console.log('Bebe');
}