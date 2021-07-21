/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero,
		negativo=1,
		positivo=0,
		flag=1,
		respuesta;

	do{
		numero = parseInt(prompt("Ingrese un número:"));
		
		if (numero >= 0) {
			positivo += numero;
		} else {
			negativo *= numero;
			flag = 0;
		}
		respuesta = prompt("Quiere ingresar un número? si/no").toLowerCase();
	}
	while(respuesta == "si")

	if (flag){
		negativo = 0;
	}
	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;

}//FIN DE LA FUNCIÓN