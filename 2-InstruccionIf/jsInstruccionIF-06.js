function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad > 0 && edad < 13) {
		alert("Usted es un niño");
	}
	if (edad >=13 & edad <=17) {
		alert("Usted es un adolescente");
	}
	if (edad >= 18) {
		alert("Usted es mayor de edad");
	}



}//FIN DE LA FUNCIÓN