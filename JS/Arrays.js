//Ejercicio1----------Nombres de famosos

/*var personaje = [' Lara Croft' , ' Spider-man' , ' Jack Sparrow']
var personajedos = personaje.push (prompt("Ingrese un personaje famoso: "));
alert(personaje)*/


//Ejercicio2----------Revertir cadena

/*var palabra = prompt("Escribe una palabra para darla vuelta")

function separa (eso){
    let separar = eso.split("").reverse().join("");
    alert(separar);
};
separa(palabra)*/


//Ejercicio3----------Ordenar palabra

/* var palabra = prompt("Ingrese una palabra")

function alfabetico(algo){
    let alfa = algo.split("").sort().join("");
    alert(alfa);
};
alfabetico(palabra); */


//Ejercicio4----------Números pares

var numeros = [];


function contador(x){
    var multiplicador = 0
    while(multiplicador <= 50){
        x.push(multiplicador);
        multiplicador++ ;
    }

    let pares = x.filter(numeros => numeros % 2 == 0);
    document.write(pares);
    
}
contador(numeros)


//Ejercicio5----------Crear cadena

var nombres = ["Tamara" , "Franco" , "Nahuel" , "Pablo" , "Valentin"];
var cadena = nombres.join(".");
alert(cadena)