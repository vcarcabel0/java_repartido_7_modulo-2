//Ejercicio1----------Peliculas favoritas 1

/*var pelicula =[
    {nombre: "Resident Evil 5: La venganza ", año: 2012, director: "Paul W. S. Anderson", personajes: "Alice Abernathy y Leon Scott Kennedy", duracion: "95 minutos", genero: "Terror"},
]
 for(let i=0; i < pelicula.length;i++){
    var peli=pelicula[i];
    document.write("Nombre: " + peli.nombre + "<br>" + " Año: " + peli.año + "<br>" + " Director: " + peli.director + "<br>" + "Personajes: " + peli.personajes + "<br>" + "Duracion: " + peli.duracion + "<br>" + "Genero: " + peli.genero + "<br>" + "<br>"); 
};*/

//Ejercicio2----------Peliculas favoritas 2

/*pelicula.origen = "Alemania Estados Unidos Canadá"
pelicula.idioma = "Ingles"
pelicula.atp = "No es apto para todo publico"

function imprimir (x){
    document.write("origen: " + pelicula.origen + "<br>" + "Idioma: " + pelicula.idioma + "<br>" + pelicula.atp + "<br>" );
}
imprimir(pelicula)
delete pelicula.genero;
document.write(pelicula.genero);*/


//Ejercicio3----------Calculadora cientifica

/*var operacion=parseFloat(prompt("OPERACIONES"+ "\n" + "\n" + "1-Adición" +"\n" + "2-Sustracción" +"\n" + "3-Multiplicacion" +"\n" + "4-división" + "\n" + "5-Raíz cuadrada" +"\n" + "6-Logaritmo" +"\n" + "7-Potencia" +"\n" + "\n" + "¿Que operacion quiere hacer?"));

switch(operacion){
    case 1:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        var num2 = parseFloat(prompt("Ingrese otro numero"));
        resultado = num1 + num2;
        document.write("<h1> La suma de " + num1 + " + " + num2 + " es: " + resultado + "</h1>")
    break;

    case 2:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        var num2 = parseFloat(prompt("Ingrese otro numero"));
        resultado = num1 - num2;
        document.write("<h1> La resta de " + num1 + " - " + num2 + " es: " + resultado + "</h1>")
    break;

    case 3:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        var num2 = parseFloat(prompt("Ingrese otro numero"));
        resultado = num1 * num2;
        document.write("<h1> La multiplicacion de " + num1 + " x " + num2 + " es: " + resultado + "</h1>")
    break;

    case 4:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        var num2 = parseFloat(prompt("Ingrese otro numero"));
        resultado = num1 / num2;
        document.write("<h1> La división de " + num1 + " / " + num2 + " es: " + resultado + "</h1>")
        break;
    case 5:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        resultado = Math.sqrt(num1)
        document.write("<h1> La raíz cuadrada de " + num1 + " es: " + resultado + "</h1>")
        break;
    case 6:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        resultado = Math.log(num1,10)
        document.write("<h1> El logartimo de " + num1 + " es: " + resultado + "</h1>")
        break;
    case 7:
        var num1 = parseFloat(prompt("Ingrese un numero"));
        var num2 = parseFloat(prompt("Ingrese otro numero"));
        resultado = Math.pow(num1,num2)
        document.write("<h1> La potencia de " + num1 + " por el exponente " + num2 + " es: " + resultado + "</h1>")
        break;
}*/


//Ejercicio4----------En qué mes estamos?
/*var numeromes = parseInt(prompt("Ingrese un numero para saber a que mes corresponde: "));
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
alert(meses[numeromes-1])*/
//i need help because i don't understand nothing
 var estudiantes = [
    {nombre:"Pablo", edad: 21 , curso:"Programacion", gustos: deporte: "ping-pong"},
    {nombre:"Nahuel", edad: 19, curso: "Robotica", gustos: deporte: "ping-pong"},
    {nombre:"Tamara", edad: 20, curso: "Diseño", gustos: deporte: "ping-pong"},
    {nombre:"Gabriel", edad: 22, curso: "Canto", gustos: deporte: "ping-pong"},
    {nombre:"Valentin", edad: 18, curso: "Desarrollo", gustos: deporte: "ping-pong"},
    {nombre:"Franco", edad: 23, curso: "Medicina", gustos: deporte: "ping-pong"}
]
for(let i = 0; i < estudiantes.length; i++){
    var estudiante = estudiantes[i];
    document.write("nombre: " + estudiante.nombre +  "/" + " edad: "+ estudiante.edad + "/" +  " curso: " + estudiante.curso + "/" + " gustos " + estudiantes.gustos.deporte + "/" + "<br>" + "<br>");
};