function mostrar()
{
	//tomo el mes
	let meses;

	meses = document.getElementById("txtIdMes").value;

	switch(meses){
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.");
			break;
		default:
			alert("Este mes tiene 31 días.");
	}



}//FIN DE LA FUNCIÓN