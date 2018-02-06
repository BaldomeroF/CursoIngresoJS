/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	nombre = document .getElementById('elNombre').value;
	//la opcion .getElementById tiene que estar acompañada de .value
	alert(nombre);
}


