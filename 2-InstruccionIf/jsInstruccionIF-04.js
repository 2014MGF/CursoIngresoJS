function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >=13 && edad <=17) {
		alert("Es un adolescente");
	} else {
		alert("No es un adolescente");
	}

}//FIN DE LA FUNCIÓN