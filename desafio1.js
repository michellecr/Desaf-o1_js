
//Pedir nombre y saludo
var nombre = prompt ("Ingrese su nombre");
console.log ("Hola " + nombre );

// Pedir un numero y sumarlo a otro guardardo (parseado) y sumarlos
var num1 = 55;
var num2 = prompt ("ingrese un numero");
var num2 = parseInt(num2);
var result = num1 + num2;
console.log ("la suma de los numeros es: " + result);

// Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alert
var dia = prompt ("¿Cual es tu día favorito de la semana?");
var hobbies = prompt ("¿Que haces en tu tiempo libre?");
alert ("Tu dia favorito es el " + dia + "y te gusta " + hobbies);
