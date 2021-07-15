/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero,
		i=0,
		suma=0,
		promedio,
		respuesta = "si";

	respuesta = prompt("Quiere ingresar un número? si/no");

	while(respuesta == "si"){
		numero = parseInt(prompt("Ingrese un número:"));
		suma += numero;
		i ++;
		respuesta = prompt("Quiere ingresar un número? si/no");
	}
	promedio = suma/i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN