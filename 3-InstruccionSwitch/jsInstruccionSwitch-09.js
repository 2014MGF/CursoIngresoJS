function mostrar()
{
	let estacion, 
		destino, 
		tarifa, 
		resultado;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	tarifa = 15000;

	switch(destino){
		case "Bariloche":
			if (estacion == "Invierno") {
				resultado = tarifa + tarifa * 0.20;
			} else if (estacion == "Verano") {
				resultado = tarifa - tarifa * 0.20;
			} else {
				resultado = tarifa + tarifa * 0.10;
			}
		break;
		case "Mar del plata":
			if (estacion == "Verano") {
				resultado = tarifa + tarifa * 0.20;
			} else if (estacion == "Invierno") {
				resultado = tarifa - tarifa * 0.20;
			} else {
				resultado = tarifa + tarifa * 0.10;
			}
		break;
		case "Cordoba":
			if (estacion == "Verano") {
				resultado = tarifa + tarifa * 0.10;
			} else if (estacion == "Invierno") {
				resultado = tarifa - tarifa * 0.10;
			} else {
				resultado = tarifa;
			}
		break;
		case "Cataratas":
			if (estacion == "Verano") {
				resultado = tarifa + tarifa * 0.10;
			} else if (estacion == "Invierno") {
				resultado = tarifa - tarifa *0.10;
			} else {
				resultado = tarifa + tarifa * 0.10;
			}
			break;
	}
	alert("El precio final es $ " + resultado);
}//FIN DE LA FUNCIÓN