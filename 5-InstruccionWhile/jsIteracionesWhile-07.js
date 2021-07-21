/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numero,
		contador = 0,
		acumulador = 0,
		promedio,
		respuesta;

	do {
		numero = parseInt(prompt("Ingrese un número:"));
		acumulador += numero;
		contador++;
		respuesta = prompt("Quiere ingresar un número? si/no").toLowerCase();
	}
	while (respuesta == "si");

	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN