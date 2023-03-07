// Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
// usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
// que es. 

function tipoDeDatoDe(dato){
    console.log(typeof(dato));
}

// Dado dos números ingresados por el usuario, se pide realizar una función que
// devuelve la resta de ambos números. Mostrar el resultado por la consola.
function resta(x,y){
    return x-y;
}
console.log(resta(5,1))

// Generar una función que le ingresen por parámetro dos valores distintos en dos
// variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
// Pasarlo a a y mostrarlos.

function change(a,b){
    console.log("Valor de a antes del cambio: ",a);
    console.log("Valor de b antes del cambio: ",b);
    let aux;
    aux = a;
    a = b;
    b= aux;
    console.log("Valor de a despues del cambio: ",a);
    console.log("Valor de b despues del cambio: ",b);
}
change(1,2);

// Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
// calcular su perímetro, su superficie, e informar los mismos en consola.

function datosCuadrado(lado){
    let perimetro = lado*4;
    let area = lado*lado;
    console.log("El perímetro del cuadrado es: ",perimetro," El área del cuadrado es: ",area);
}
datosCuadrado(3);

// Generar una función que dada una temperatura en grados fahrenheit los convierta a
// grados celsius.
function fahrToCel(gradosF){
    return (gradosF - 32) *(5/9);
}
console.log(fahrToCel(300));


// Realizar una función que calcule el factorial de un número ingresado por el usuario (el
//     número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
//     consola.
function factorialDe(n){
    let resultado=1;
    for (let i = 1; i<=n; i++){
        resultado = resultado*i
    }
    return resultado;
}
console.log(factorialDe(10));

// Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos"
function esPalindromo(cadena) 
{
    let cadenaSinEspacios = cadena.replace(/ /g,'');
    let cadenaFormaArray=cadenaSinEspacios.split("");
    let arrayInverso = cadenaFormaArray.reverse();
    let cadenaInversa = arrayInverso.join("");
    return cadenaSinEspacios==cadenaInversa;
}
console.log(esPalindromo("somos o no somos"))

// Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
// Javascript.
function caracteresUpperLowerCase(cadena){
    console.log("Cadena en minúsculas: ",cadena.toLowerCase());
    console.log("Cadena en mayúsculas: ",cadena.toUpperCase());
}
caracteresUpperLowerCase("prueba PRUEBA");

// Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
// calificación resultante según la nota ingresada:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

function calificar (nota){
    switch (true) {
        case nota>=0 && nota<3:
            console.log("Muy deficiente")
        break;
        case nota>=3 && nota<5:
            console.log("Insuficiente")
        break;
        case nota>=5 && nota<6:
            console.log("Suficiente")
        break;
        case nota>=6 && nota<7:
            console.log("Bien")
        break;        
        case nota>=7 && nota<9:
            console.log("Notable")
        break;   
        case nota>=9 && nota<=10:
            console.log("Sobresaliente")
        break;                 
        default:
            console.log(nota," No es una nota valida")
            break;
    }
}
calificar(8.99999)


// 0. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.
function diasDelMes(mes){
    switch (true) {
        case mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12:
            console.log("Este mes tiene 31 dias");
        break;
        case mes==4 || mes==6 || mes==9 || mes==11:
            console.log("Este mes tiene 30");
        break;
        case mes == 2:
            console.log("Este mes tiene 28 dias");
        break;
        default:
            console.log(mes," No es un mes valido");
        break;
    }
}
diasDelMes(4)

// Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
function piramideNumerica (n)
{
    if (n<=10 && n>0){
        let piramide=1;
        for (let i = 2; i<=n; i++)
        {
            piramide=piramide+i.toString();
            console.log(piramide);
        }
            
    }else{
        console.log("No puede ingresar un numero mayor a 10 ni menor a 0")
    }
}
piramideNumerica(9)

// Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola
function contadorStock (bultos,cantidadPorCaja){
    const cajasLlenas = bultos/cantidadPorCaja;
    const bultosSobrantes = bultos % cantidadPorCaja;
    console.log("Cantidad de cajas llenas: "+Math.trunc(cajasLlenas));
    console.log("Cantidad de bultos sobrantes: "+bultosSobrantes);
}

contadorStock(65,9);

// Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
// Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
// Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
// través de su código y el script saca el descuento correspondiente por la consola.
function venderCoche (nombre,precio){
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
console.log(venderCoche("twingo",3000))