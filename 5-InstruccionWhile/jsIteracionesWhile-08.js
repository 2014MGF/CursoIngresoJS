/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero,
		negativo=-1,
		positivo=0,
		promedio,
		respuesta = "si";

	respuesta = prompt("Quiere ingresar un número? si/no");

	while(respuesta == "si"){
		numero = parseInt(prompt("Ingrese un número:"));
		
		if (numero > 0) {
			positivo += numero;
		} else {
			negativo *= numero;
		}

		respuesta = prompt("Quiere ingresar un número? si/no");
	}
	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;

}//FIN DE LA FUNCIÓN