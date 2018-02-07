function Mostrar()
{
  var importe;

  importe =prompt(importe);
  importe = importe*0.21;

  /*para restar un porcentaje a un importe agregarle el porcentaje a 0
  para sumar porcentaje a un importe restarle el porcentaje a 0
  mediante la multiplicacion */
  
  document .getElementById('importeFinal').value=importe;

}
