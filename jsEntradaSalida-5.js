/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var edad;
	var nombre;
	nombre=document .getElementById('elNombre').value;
	edad=document .getElementById('laEdad').value;
	alert("Usted se llama "+nombre+" y su edad es "+edad);
}

