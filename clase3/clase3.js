// 1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
// usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
// que es.
//Arrow Function
const tipoDeDato=(dato)=>{
    return typeof(dato)
}

console.log("Ejercicio 1: ", tipoDeDato(23))
// 2. Dado dos números ingresados por el usuario, se pide realizar una función que
// devuelve la resta de ambos números. Mostrar el resultado por la consola.
//Sin arrow function
function resta (x,y){
    return x-y;
}
console.log("Ejercicio 2: ",resta(3,2))

// 3. Generar una función que le ingresen por parámetro dos valores distintos en dos
// variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
// Pasarlo a a y mostrarlos.

const pasaje=(a,b)=>{
    let aux=a;
    a=b;
    b=aux;
    console.log("Ejercicio 3: a: ",a,"b: ",b)
}
pasaje(5,10);
// 4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
// calcular su perímetro, su superficie, e informar los mismos en consola.
const cuadrado =(lado) =>{
    let perimetro = lado*4;
    let superficie = Math.pow(lado,2);
    console.log("El perímetro es: ",perimetro,"Su área es: ",superficie);
}
cuadrado(2)


// 5. Generar una función que dada una temperatura en grados fahrenheit los convierta a
// grados celsius.

const fahrenheitToCelsius = (fahrenheit)=>{
    return ((fahrenheit-32)*5)/9;
}
console.log(fahrenheitToCelsius(600))

// 6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
// número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
// consola.

const factorial = (x)=>{
    let resultado = 1;
    if (x<=10){
        for (let i = 1; i<=x ;i++){
            resultado = resultado*i;            
        }
        return resultado;
    }else{
        return "Debe ingresar un valor menor o igual a 10"
    }
}
console.log(factorial(9));
// 7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”.

//Tiene que haber otra forma de saber si es palindroma o no
const invertirCadena= (cadena)=>{
    let cadenaMinuscula=cadena.toLowerCase()
    let cadenaSinEspacios = cadenaMinuscula.replace(/ /g, "")
    let arrayCadena = cadenaSinEspacios.split("");
    let arrayInvertido = arrayCadena.reverse();
    let stringResultante = arrayInvertido.join("");
    if (cadenaSinEspacios === stringResultante){
        return "La cadena es palintroma"
    }else
    {
        return "La cadena NO ES PALINDROMA"
    }
}
console.log(invertirCadena("Somos o no somos"))


// 8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
// Javascript.


const mayusMinuscula = (cadena)=>{
    let minuscula = cadena.toLowerCase();
    let mayuscula = cadena.toUpperCase();
    return "Minuscula: "+minuscula+" Mayuscula: "+mayuscula
}
console.log(mayusMinuscula("oajwd"))




// 9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
// calificación resultante según la nota ingresada:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente


const evaluar =(nota)=>{
    if (nota>0 && nota <=3){
        return "Muy Deficiente";
    }else if (nota>3 && nota <=5){
        return "Insuficiente"
    }else if (nota>5 && nota <=6){
        return "Suficiente"
    }else if (nota>6 && nota <=7){
        return "Bien"
    }else if (nota>7 && nota <=9){
        return "Notable"
    }else if (nota>9 && nota <=10){
        return "Sobresaliente"
    }else{
        return "Ingrese una opcion valida"
    }
}
console.log(evaluar(9))

// 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.

const diasDelMes = (numeroMes) =>{
    switch (numeroMes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "Este mes tiene 31 dias"                
        case 4:
        case 6:
        case 9:
        case 11:
            return "Este mes tiene 30"   
        case 2:
            return "Febrero tiene 28 dias"                                                                                                                                          
        default:
            break;
    }
}

console.log(diasDelMes(1))



// 11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
// 1
// 12
// 123
// 1234
// 12345
// 123456


const contarNumerosHasta = (n)=>{
    for (let i = 1; i <= n; i++) {
        console.log(i)        
    }
}
contarNumerosHasta(5);

// 12. Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.

const contadorStock = (bultos,cantidadPorCaja)=>{
    const cajasLlenas = bultos/cantidadPorCaja;
    const bultosSobrantes = bultos % cantidadPorCaja;
    console.log("Cantidad de cajas llenas: "+Math.trunc(cajasLlenas));
    console.log("Cantidad de bultos sobrantes: "+bultosSobrantes);
}

contadorStock(65,9);


// 13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
// Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
// Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
// través de su código y el script saca el descuento correspondiente por la consola.


const venderCoche = (nombre,precio) =>{
    if (nombre.toLowerCase()==="fiesta"){
        return precio-(precio*0.05)
    }else if (nombre.toLowerCase()==="focus"){
        return precio-(precio*0.10)
    }else{
        return precio;
    }
}

console.log(venderCoche("fiesta",3000))
console.log(venderCoche("focus",3000))
console.log(venderCoche("camaro",3000))

