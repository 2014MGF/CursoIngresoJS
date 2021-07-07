function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("En su destino hace frio.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En su destino hace calor.");
			break;
	}

}//FIN DE LA FUNCIÓN