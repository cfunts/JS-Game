/*1.
    Crea una lista vacía llamada "listaGenerica"
*/

let listaGeneriaca = [];
console.log(listaGeneriaca);

/*2.
    Crea una lista de lenguajes de programación llamada "lenguagesDeProgramación" con los siguientes elementos: 'JavaScript','C','C++','Kotlin' y 'Python'.
*/

let lenguagesDeProgramación = ['JavaScript','C','C++','Kotlin','Python'];
console.log(lenguagesDeProgramación);

/*3.
    Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
    'Java', 'Ruby' y 'GoLang'
*/

lenguagesDeProgramación.push('Java','Ruby','GoLang');
console.log(lenguagesDeProgramación);

/*4.
    Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/

function mostrarElementos (){
    console.log(lenguagesDeProgramación);
}
mostrarElementos();

/*5.
    Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/
let lenguagesDeProgramaciónInverso = [];
function mostrarElementosOrdenInverso (){
    lenguagesDeProgramaciónInverso = lenguagesDeProgramación.reverse();
    console.log(lenguagesDeProgramaciónInverso);
}
mostrarElementosOrdenInverso();

/*6.
    Crea una función que calcule el promedio de los elementos en una lista de números.
*/

let listaNumerosPromedio = [11,15,156,6,45,578,5,24,4867,875];
let promedio = 0;;

function calculoPromedio(){
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let sum = listaNumerosPromedio.reduce((previous, current) => current += previous);
    promedio = sum / listaNumerosPromedio.length;
    console.log(`El número promedio de la lista es ${promedio}`);
}

calculoPromedio();


/*7.
    Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/

let listaNumeros = [11,15,156,6,45,578,5,24,4867,875];
let numeroMayor = 0;
let numeroMenor = 0;

function comparacionNumerosLista(){
    numeroMayor = Math.max(...listaNumeros);//.. especificas q es un argumento
    numeroMenor = Math.min(...listaNumeros);
    console.log(`El número mayor de la lista es ${numeroMayor} y el número menor es ${numeroMenor}`);
}

comparacionNumerosLista();

/*8.
    Crea una función que devuelva la suma de todos los elementos en una lista.
*/

let listaNumerosSuma = [1,3,5];
let suma = 0;

function calculoSuma(){
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    suma = listaNumerosSuma.reduce((previous, current) => current += previous);
    console.log(`El resultado de la suma de la lista es ${suma}`);
}

calculoSuma();

/*9.
    Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/

function encontrarPosicion(lista, elemento) {
    let posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : "El elemento no está en la lista";
}

console.log("Posición de 'C': " + encontrarPosicion(lenguagesDeProgramación, 'C'));

/*10
    Crea una función que reciba dos listas de números del mismo tamaño 
    y devuelva una nueva lista con la suma de los elementos uno a uno.
*/

function sumarListas(lista1, lista2) {
    return lista1.map((elemento, index) => elemento + lista2[index]);
}
console.log("Suma de listas: " + sumarListas([1, 2, 3], [4, 5, 6]));

/*11
    Crea una función que reciba una lista de números 
    y devuelva una nueva lista con el cuadrado de cada número.
*/

function cuadradoDeLista(lista) {
    return lista.map(elemento => elemento * elemento);
}

console.log("Cuadrado de lista: " + cuadradoDeLista([2, 4, 6]));