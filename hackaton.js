// Author: Daniel Aguado
// Language: javascript
// Path: hackaton.js

// EJERCICIO #1
// Trabajando con variables
// Declare dos variables: admin and name.
let admin;
let name;

// Asignar el valor "John" to name.
name = 'John';

// Copie el valor de name to admin.
admin = name;

// Muestre el valor de admin usando alert (debe salir “John”).
alert(admin);


// EJERCICIO #2
// Dar el nombre correcto
// Crea una variable con el nombre de nuestro planeta. ¿Cómo nombraría una variable así?
const planet = 'Earth';

// Cree una variable para almacenar el nombre de un visitante actual de un sitio web. ¿Cómo nombrarías esa variable?
let visitorName;

// EJERCICIO #3
// ¿Const mayúscula?
// Examine el siguiente código:
// const birthday = '18.04.1982';
// const age = someCode(birthday);
// Aquí tenemos una constante birthday date y age se calcula a partir de birthday con la ayuda de
// algún código (no se proporciona por brevedad y porque los detalles no importan aquí).
// ¿Sería correcto usar mayúsculas para birthday? para age? ¿O incluso para ambos?
// const BIRTHDAY = '18.04.1982'; // make uppercase?
// const AGE = someCode(BIRTHDAY); // make uppercase?

// Response:
console.log("No, porque no es necesario según las convenciones de nomenclatura de variables en Javascript camelCase")


// EJERCICIO #4
// Cadenas
// ¿Cuál es el resultado del script?

// let name = "Ilya";
// alert(`hello ${1}`);
console.log("hello 1");
// alert(`hello ${"name"}`); // hello name
console.log("hello name");
// alert(`hello ${name}`); // hello Ilya
console.log("hello Ilya");


// EJERCICIO #5
// Hola, objeto
// Escribe el código, una línea para cada acción:
// 1. Crea un objeto vacío user.
let user = {};

// 2. Añade la propiedad name con el valor John.
user.name = 'John';

// 3. Añade la propiedad username con el valor Smith.
user.username = 'Smith';

// 4. Cambiar el valor del name por Pete.
user.name = 'Pete';

// 5. Quitar la propiedad name del objeto.
delete user.name;


// Ejercicio #6
// Compruebe si está vacío
// Escribe la función isEmpty(obj) que regresa true si el objeto no tiene propiedades, false de lo
// contrario.
// Debería funcionar así:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
let isEmpty = function(obj) {
    return Object.keys(obj).length == 0 ? true : false;
}
let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));


// EJERCICIO #7
// Propiedades de objeto de suma
// Tenemos un objeto que almacena los sueldos de nuestro equipo:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
// Escriba el código para sumar todos los salarios y guárdelo en la suma variable. Debería ser 390

let sumaVariables = function() {
    let suma = 0;
    for (let key in salaries) {
        suma += salaries[key];
    }
    return suma;
}
console.log(sumaVariables(salaries)); // 390
salaries = {}
console.log(sumaVariables(salaries)); //0
// en el ejemplo anterior.
// Si salaries está vacío, entonces el resultado debe ser 0.



// Ejercicio #8
// Multiplica los valores numéricos de las propiedades por 2
// Crea una función multiplyNumeric(obj) que multiplica todos los valores numéricos de propiedad de obj por 2.
// Por ejemplo:
// // before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
// multiplyNumeric(menu);
// // after the call
// menu = {
//  width: 400,
// height: 600,
//  title:
// "My menu"
// };
// Tenga en cuenta que multiplyNumeric no necesita devolver nada. Debería modificar el objeto in situ.
// PD Usar typeof para buscar un número aquí.
let multiplyNumeric = function(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu)
console.log(menu);