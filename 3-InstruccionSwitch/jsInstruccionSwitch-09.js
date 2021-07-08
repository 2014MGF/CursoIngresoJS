function mostrar()
{
	let estacionAño, destino, tarifa, aumento, descuento, resultado;

	estacionAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	tarifa = 15000;

	switch(destino){
		case "Bariloche":
			if (estacionAño == "Invierno") {
				aumento = tarifa * 0.20;
				resultado = tarifa + aumento;
				alert("La tarifa es: "+resultado);
			}
		break;
		/*case "Invierno","Cataratas":
		case "Invierno","Cordoba":
			descuento = tarifa * 0.10;
			resultado = tarifa - descuento;
			alert("La tarifa es: "+resultado);
		break;
		case "Invierno","Mar del plata":
			descuento = tarifa * 0.20;
			resultado = tarifa - descuento;
			alert("La tarifa es: "+resultado);
		break;*/
	}
	/*switch(estacionAño, destino){
		case "Verano","Bariloche":
			descuento = tarifa * 0.20;
			resultado = tarifa - descuento;
			alert("La tarifa es: "+resultado);
		break;
		case "Verano","Cataratas":
		case "Verano","Cordoba":
			aumento = tarifa * 0.10;
			resultado = tarifa + aumento;
			alert("La tarifa es: "+resultado);
		break;
		case "Verano","Mar del plata":
			aumento = tarifa * 0.20;
			resultado = tarifa + aumento;
			alert("La tarifa es: "+resultado);
		break;
	}*/

}//FIN DE LA FUNCIÓN