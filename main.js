//EJERCICIOS FUNCIONES: 

function resta(a, b) {
    return a - b

}
console.log(resta(10, 4));


//2
function clasificarNota() {
    // Pedir al usuario que introduzca una nota utilizando un prompt

    let nota = parseInt(prompt("Introduce una nota del 0 al 10:"));

    // Validar si la nota está dentro del rango permitido (0 a 10)
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log("Por favor, introduce un número válido entre 0 y 10.");
        return;
    }

    // El switch se usa para clasificar la nota deacuerdo a los valores
    switch (true) {
        case (nota >= 0 && nota <= 4):
            console.log("Insuficiente");
            break;
        case (nota >= 5 && nota <= 6):
            console.log("Suficiente");
            break;
        case (nota >= 7 && nota <= 8):
            console.log("Notable");
            break;
        case (nota >= 9 && nota <= 10):
            console.log("Sobresaliente");
            break;
        default:
            console.log("Error en la clasificación.");
    }
}
clasificarNota();
//switch: Estructura de control que evalúa diferentes casos basados en una expresión.
//break: Detiene la ejecución del bloque de código en el caso actual y sale del switch.

//3
function duplicaNumero(numero) {
    if (typeof numero === 'number') {
        return numero * 2;
    } else {
        return 'Debo ser ejecutada con un número';
    }
}
console.log(duplicaNumero(4));

//4
function caracterInicial(texto) {
    if (typeof texto !== 'string') {
        return 'Debo ser ejecutada con un string';
    } else if (texto === '') {
        return 'Debo ser ejecutada con un string no vacío';
    } else {
        return texto.charAt(0);
    }
    //.charAt(0): Método que obtiene el carácter en la posición 0 de la cadena.
}
console.log(caracterInicial())
//5
function ultimoCaracter(texto) {
    if (typeof texto !== 'string') {
        return 'Debo ser ejecutada con un string';
    } else if (texto === '') {
        return 'Debo ser ejecutada con un string no vacío';
    } else {
        return texto.charAt(texto.length - 1);
    }
    // - 1:Resta 1 a la longitud para obtener el último índice de la cadena.
}


//6
function cuentaCaracteres(texto) {
    if (typeof texto !== 'string') {
        return 'Debo ser ejecutada con un string';
    } else {
        return texto.length;
    }
    //.length:Propiedad que devuelve el número de caracteres de la cadena.
}

//7
function esPalindromo(texto) {
    if (typeof texto !== 'string' || texto === '') {
        return 'no es un formato correcto';
    }

    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
    /*.split(''): Método que divide la cadena en un array de caracteres.
    .reverse(): Método que invierte el orden de los elementos en un array.
    .join(''): Método que une los elementos de un array en una cadena de texto.*/
}
//8
function getPrecioMostrar(precio) {
    if (typeof precio !== 'number') {
        return 'no es un formato correcto';
    }
    return precio.toFixed(2) + ' €';
}
/*.toFixed(2): Método que formatea un número a 2 decimales.
+: Operador de concatenación. Combina el número formateado con el símbolo ' €'*/


//9
function division(a, b) {
    if (b === 0) {
        return 'No se puede dividir por 0';
    } else {
        return a / b;
    }
}

//10
function filtraNumerosMayoresA5(arr) {
    return arr.filter(num => num >= 5);
}

let numeros = [3, 6, 8, 2];
console.log(filtraNumerosMayoresA5(numeros)); // [6, 8]
//.filter(): Método que filtra los elementos de un array según una condición.

//11
function esPrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numeroPrimo = parseInt(prompt("Introduce un número para verificar si es primo:"));
console.log(esPrimo(numeroPrimo));


