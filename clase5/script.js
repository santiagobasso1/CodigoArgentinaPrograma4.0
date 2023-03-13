// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
const arrayColores = ["Rojo","Amarillo","Negro","Dorado","Azul"];
// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let negro = arrayColores[2];
// 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
// ejercicio 1.
console.log(arrayColores[0][0])
// 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
// función Math.random().
function randomNumber(minimo,maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}
console.log(randomNumber(0,100))
// 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
function rellenarArray(){
    const array = [];
    for (let i=0; i<=10; i++){
        array.push(i);
    }
    console.log(array)
}
rellenarArray();
// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
function rellenarArrayRandom(arraySize){
    const array = [];
    for (let i=0; i<=arraySize; i++){
        array.push(randomNumber(0,100));
    }
    return array;
}
// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
// consola.
const arrayCopiadoEjercicio6 = rellenarArrayRandom(10)
console.log(arrayCopiadoEjercicio6)
// 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// medio. 
function menuSinArray(){
    let opcion="";
    let cadenaResultante="";
    while (opcion.toLowerCase()!="cancelar"){
        cadenaResultante=cadenaResultante+"-"+opcion;
        opcion=prompt("Ingrese una nueva cadena");
    }
    return cadenaResultante;
}
// console.log(menuSinArray());
//Realizar la misma actividad, pero ahora almacenando los valores en un array y
// luego recorriendolo para mostrar el resultado deseado del ejercicio.
function menuConArray(){
    let opcion="";
    const arrayCadenas=[];
    let cadenaFinal="";
    while (opcion.toLowerCase()!="cancelar"){
        arrayCadenas.push(opcion)
        opcion=prompt("Ingrese una nueva cadena");
    }
    let i=0;
    arrayCadenas.forEach(resultado=>{
        if (i>1){
            cadenaFinal=cadenaFinal+"-"+resultado
        }else{
            i++;
            cadenaFinal=resultado;
        }
    })
    return cadenaFinal;
}
// console.log(menuConArray());


// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
// convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
// Mostrar el resultado elemento de html. 
// 10. Generar la inversa del ejercicio anterior (de pesos a dólares). 

let inputPesos = document.getElementById("pesos");
let inputDolares = document.getElementById("dolares");
let botonCambio = document.getElementById("btnCambiar");
inputDolares.addEventListener("click",()=>{
    inputPesos.value="";
})

inputPesos.addEventListener("click",()=>{
    inputDolares.value="";
}) 

botonCambio.addEventListener("click",(e)=>{
    e.preventDefault();
    if (inputDolares.value.length>0){
        inputPesos.value=inputDolares.value*300;
    }else if(inputPesos.value.length>0){
        inputDolares.value=inputPesos.value/300;
    }
})



// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
// ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
// son 86 grados fahrenheit.
let inputCentigrados = document.getElementById("centigrados");
let inputFahrenheit = document.getElementById("fahrenheit");
let botonCambioGrados = document.getElementById("btnCambiarGrados");
inputCentigrados.addEventListener("click",()=>{
    inputFahrenheit.value="";
})

inputFahrenheit.addEventListener("click",()=>{
    inputCentigrados.value="";
}) 

botonCambioGrados.addEventListener("click",(e)=>{
    e.preventDefault();
    if (inputCentigrados.value.length>0){
        inputFahrenheit.value=inputCentigrados.value*(9/5) + 32;
    }else if(inputFahrenheit.value.length>0){
        inputCentigrados.value=(inputFahrenheit.value-32) *(5/9)

    }
})



// 12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
// podremos especificar las características de la caja. Ejemplo (imagen adjunta)

// 13. A través de un formulario, el usuario debe introducir un número secreto que estará
// entre 0 y 5.
// El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
// juego.
// Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
// 14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
// desordenada a medida que se agregan.