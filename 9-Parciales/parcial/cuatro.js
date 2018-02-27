function Mostrar()
{
//no se puede usar if, ingreso 3 numeros, mostrar promedio
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroFinal;

	numeroUno = prompt("Ingrese el primer número");
	numeroDos = prompt("Ingrese el segundo número");
	numeroTres = prompt("Ingrese el tercer número");

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	numeroTres= parseInt(numeroTres);

	if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
		alert("El "+numeroUno+" es el mayor numero");
	}
	else
	{
		if(numeroDos>numeroUno && numeroDos>numeroTres)
		{
			alert("El "+numeroDos+" es el mayor numero");
		}
		else
		{
			alert("El "+numeroTres	+" es el mayor numero");
		}
	}

	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		alert("El "+numeroUno+" es el menor numero");
	}
	else
	{
		if(numeroDos<numeroUno && numeroDos<numeroTres)
		{
			alert("El "+numeroDos+" es el menor numero");
		}
		else
		{
			alert("El "+numeroTres	+" es el menor numero");
		}
	}
}