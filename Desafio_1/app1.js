//Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
//OK

//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function consoleButtom (){
    console.log("El botón Console fue clicado");
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function promptButtom(){
    let nombreCiudad = prompt("Indique el nombre de una ciudad en Brasil");
    alert(`Estuve en ${nombreCiudad} y me acorde de ti`);
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function alertButtom(){
    alert(`Yo amo JS`);
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function sumaButtom(){
    let sumando1 = parseInt(prompt("Indique el valor del primer numero"));
    let sumando2 = parseInt(prompt("Indique el valor del segundo número"));
    let resultado = sumando1 + sumando2;
    alert(`El resultado de ${sumando1} + ${sumando2} es: ${resultado}`);
}