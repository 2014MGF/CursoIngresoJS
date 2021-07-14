function mostrar()
{
	let estacion, 
		destino, 
		tarifa, 
		aumento, 
		descuento, 
		resultado;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	tarifa = 15000;

	switch(destino){
		case "Bariloche":
			if (estacion == "Invierno") {
				aumento = tarifa * 0.20;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			} else if (estacion == "Verano") {
				descuento = tarifa * 0.20;
				resultado = tarifa - descuento;
				alert("La tarifa es: "+resultado);
			} else {
				aumento = tarifa * 0.10;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			}
		break;
		case "Mar del plata":
			if (estacion == "Verano") {
				aumento = tarifa * 0.20;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			} else if (estacion == "Invierno") {
				descuento = tarifa * 0.20;
				resultado = tarifa - descuento;
				alert("La tarifa es: "+resultado);
			} else {
				aumento = tarifa * 0.10;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			}
		break;
		case "Cordoba":
			if (estacion == "Verano") {
				aumento = tarifa * 0.10;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			} else if (estacionAño == "Invierno") {
				descuento = tarifa * 0.10;
				resultado = tarifa - descuento;
				alert("La tarifa es: "+resultado);
			} else {
				alert("La tarifa es: "+tarifa);
			}
		break;
		default:
			if (estacion == "Verano") {
				aumento = tarifa * 0.10;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			} else if (estacion == "Invierno") {
				descuento = tarifa * 0.10;
				resultado = tarifa - descuento;
				alert("La tarifa es: "+resultado);
			} else {
				aumento = tarifa * 0.10;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			}
	}
}//FIN DE LA FUNCIÓN