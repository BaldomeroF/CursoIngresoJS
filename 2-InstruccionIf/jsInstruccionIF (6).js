function Mostrar()
{
//tomo la edad  
	var edad;

	edad= document .getElementById('edad').value;

	if(edad<=12)
	{
		alert("Sos un nene");
	}
	else
	{

		if(edad>17)
			alert("Sos un adulto");

		else
			alert("Sos un adolescente");
	}

}//FIN DE LA FUNCIÓN