function mostrar()
{
  let articulo,
    cantidad,
		precioArena=40,
		precioCal=50,
		precioCemento=60,
    sumaArena=0,
    sumaCal=0,
    sumaCemento=0,
    tarifaArena,
    tarifaCal,
    tarifaCemento,
    cantidadTotal,
    totalBruto,
    totalDescuento,
		respuesta = "si";

	respuesta = prompt("Quiere ingresar un articulo? si/no");

	while(respuesta == "si"){
    articulo = prompt("Ingrese articulo.");

    if (articulo == "arena" || articulo == "cal" || articulo == "cemento") {
      cantidad = parseInt(prompt("Ingrese cantidad."));
      if (articulo == "arena"){
        sumaArena += cantidad;
        tarifaArena = precioArena * sumaArena;
      } else if (articulo == "cal"){
        sumaCal += cantidad;
        tarifaCal = precioCal * sumaCal;
      } else {
        sumaCemento += cantidad;
        tarifaCemento = precioCemento * sumaCemento;
      }
    }
		respuesta = prompt("Quiere seguir ingresando articulos? si/no");
	}
  cantidadTotal = sumaArena + sumaCal + sumaCemento;
  precioTotal = precioArena + precioCal + precioCemento;
	if (cantidadTotal > 30){
    totalBruto = precioTotal * 0.75;
  } else if (cantidadTotal > 10 && cantidadTotal < 30){
    totalBruto = precioTotal * 0.85;
  }
}
