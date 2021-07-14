function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("En su destino hace frio.");
			break;
		default:
			alert("En su destino hace calor.");
	}

}//FIN DE LA FUNCIÓN