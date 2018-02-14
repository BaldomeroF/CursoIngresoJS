function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//noviembre con abril junio y septiembre solo uno de 28 y los demas de 31" 
	switch(mesDelAño)
	{	
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;

		case "Noviembre":				
		case "Abril":				
		case "Junio":				
		case "Septiembre":	
			alert("Este mes tiene 30 dias");
			break;

		default:
			alert("Este mes tiene 31 días");
			break;
	}	
	



}//FIN DE LA FUNCIÓN