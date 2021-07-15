/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave:");

	while(clave != "utn750"){
		alert("Error, ingrese la clave:");
		clave = prompt("Ingrese la clave:");
	}
	
}//FIN DE LA FUNCIÓN
