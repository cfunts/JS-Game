//Crear una función que muestre "¡Hola, mundo!" en la consola.

function mensajeConsola(){
    console.log("¡Hola, mundo!");
    return;
}
mensajeConsola();


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

let nombre = prompt("Ingrese su nombre");
function nombreConsola (nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}
nombreConsola(nombre);


//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

let numeroUsuario = parseInt(prompt("Ingrese un número entero positivo"));
let numeroDuplicado = 0;
function duplicarNumero (numeroDeUsuario){
    numeroDuplicado = 2*numeroUsuario;
    return numeroDuplicado;
}

duplicarNumero(numeroUsuario);
console.log(numeroDuplicado);


//Crear una función que reciba tres números como parámetros y devuelva su promedio.

let numeroPromedio =0;
function promedio(a,b,c){
    numeroPromedio = (a+b+c)/3;
    return numeroPromedio;
}
promedio(1,5,6);
console.log(numeroPromedio);


//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor (a,b){
    if (a>b){
        console.log(`El numero mayor es ${a}`);
        return a;
    } else {
        if(a<b){
            console.log(`El numero mayor es ${b}`);
            return b;
        } else {
            alert("Los numeros son inguales");
            return;
        }
    }
}

numeroMayor(5,5);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.


let numUsuario = parseInt(prompt("Ingrese un número entero positivo"));
let numPot = 0;
function potenciaNumero (numUsuario){
    numPot = numUsuario*numUsuario;
    return numPot;
}

potenciaNumero(numUsuario);
console.log(numPot);