function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad >=13 && edad <=17) {
		alert("Es ustedad un adolescente");
	} else {
		alert("Usted no es un adolescente");
	}

}//FIN DE LA FUNCIÓN