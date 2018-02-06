/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
	var nombre;
	alert(nombre);
	alert("nombre");
	nombre = "Baldomero Fiorentino";
	alert(nombre);
    var person = prompt("Please enter your name", "Harry Potter");
    */

    var persona;
    persona = prompt("Escribi tu nombre", "");
    //1er texto entre comillas, será el texto mostrado en pantalla
    alert("Tu nombre es: "+persona);
}