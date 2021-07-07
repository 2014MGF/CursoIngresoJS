function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Su destino se encuentra al Este.");
			break;
		case "Cataratas":
			alert("Su destino se encuentra al Norte.");
			break;
		case "Mar del plata":
			alert("Su destino se encuentra al Oeste.");
			break;
		case "Ushuaia":
			alert("Su destino se encuentra al Sur.");
			break;
	}

}//FIN DE LA FUNCIÓN