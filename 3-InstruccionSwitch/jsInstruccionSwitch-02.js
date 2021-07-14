function mostrar()
{
	//tomo el mes
	let meses;

	meses = document.getElementById("txtIdMes").value;

	switch(meses){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
	}
}//FIN DE LA FUNCIÓN