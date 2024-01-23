/*
    Crea una función que calcule el índice de masa corporal (IMC) 
    de una persona a partir de su altura en metros y peso en kilogramos,
    que se recibirán como parámetros.
*/

let alturaUsario = parseFloat(prompt('Ingrese su altura en metros (m)'));
let pesoUsuario = parseFloat(prompt('Ingrese su peso en kilogramos (kg)'));
let imc_valor = 0;

function calculoIMC(_alturaUsario,_pesoUsuario){
    imc_valor = _pesoUsuario/(_alturaUsario*_alturaUsario);
    alert(`El valor de tu IMC es de: ${imc_valor}`);
    return imc_valor;
}
calculoIMC(alturaUsario,pesoUsuario);
console.log(imc_valor)


//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let numeroFactorial = parseInt(prompt('ingrese el número del que desea saber su factorial'));
let resultadoFactorial = 1;
let contador = 1;

function calculoFactorial (n){
    if (n===0 || n===1){
        resultadoFactorial = 1;
        return resultadoFactorial;
    } else {
        if (n>1){
            while(contador <= n){
                resultadoFactorial = resultadoFactorial * contador;
                contador = contador + 1;
                console.log(resultadoFactorial);
            }
            return resultadoFactorial;
        } else {
            alert('El numero ingresado no es positivo');
        }
    }
}
calculoFactorial(numeroFactorial);
alert(`El resultado es ${resultadoFactorial}`);



/*
    Crea una función que convierta un valor en dólares, pasado como parámetro, 
    y devuelva el valor equivalente en reales(moneda brasileña,
    si deseas puedes hacerlo con el valor del dólar en tu país). 
    Para esto, considera la cotización del dólar igual a R$4,80.
*/

alert('El siguiente ejercicio tomara como referencia el valor de 1$ US con referencia a su moneda local');
let monedaConvertir = prompt('Ingrese el nombre de la moneda para la cual quiera convertir sus dolares ');
let tasaConversión = parseInt(prompt('Cual es el valor de 1 dolar US en su moneda'));
let cantidadDolares = parseInt(prompt('Ingrese la cantidad de dolares a convertir'));
let resultadoConversion = 0;

function conversionMoneda(n){
    resultadoConversion = (tasaConversión/1)*(cantidadDolares);
    return resultadoConversion;
}

conversionMoneda(tasaConversión);
console.log(resultadoConversion);

alert(`El valor de ${cantidadDolares} en ${monedaConvertir} es de: ${resultadoConversion}`);



/*
    Crea una función que muestre en pantalla el área y 
    el perímetro de una sala rectangular, 
    utilizando la altura y 
    la anchura que se proporcionarán como parámetros
*/

let areaRectangulo = 0;
let perimetroRectangulo = 0;
let altura = parseFloat(prompt('Ingrese la altura del rectangulo'));
let anchura = parseFloat(prompt('Ingrese la anchura del rectangulo'));

function calculoDimensiones(_altura,_anchura){
    areaRectangulo = _altura * _anchura;
    perimetroRectangulo = 2*_altura + 2*_anchura;
    return areaRectangulo,perimetroRectangulo;
}

calculoDimensiones(altura,anchura);
alert(`El rectangulo cuenta con las siguientes dimensiones: area de ${areaRectangulo} y perimetro de ${perimetroRectangulo}`);



/*
    Crea una función que muestre en pantalla el área y 
    el perímetro de una sala circular, 
    utilizando su radio que se proporcionará como parámetro. 
    Considera Pi = 3,14.
*/

const pi = 3.14;
let areaCirculo = 0;
let perimetroCirculo = 0;
let radio = parseFloat(prompt('Ingrese el radio del círculo'));

function calculoDimensiones(_radio){
    areaCirculo = pi *( _radio*_radio);
    perimetroCirculo = (2*_radio)*pi;
    return areaCirculo,perimetroCirculo;
}

calculoDimensiones(radio);
alert(`El círculo cuenta con las siguientes dimensiones: area de ${areaCirculo} y perimetro de ${perimetroCirculo}`);


/*
    Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

let resultado = 0;
let numeroTabla = parseInt(prompt('Ingrese el número positivo del cual desea cononcer su tabla de multipliacación de 0 a 10'));

function tablaMultiplicar (n){
    for(let i = 0; i<=10; i++){
        resultado = n * i;
        console.log(`${i} x ${numeroTabla} = ${resultado}`);
    }
}

tablaMultiplicar(numeroTabla);