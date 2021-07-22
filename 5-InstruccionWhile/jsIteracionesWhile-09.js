/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	
	let numero = 0,
		maximo,
		minimo,
		flag = 0,
		respuesta;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, ingrese nuevamente:"));
		}
		if (flag == 0) {
			minimo = numero;
			maximo = numero;
			flag = 1
		} else if (minimo > numero){
			minimo = numero;
		} else if (maximo < numero){
			maximo = numero;
		}
		respuesta = prompt("Quiere ingresar otro numero? (s/n)").toLowerCase();
	} while (respuesta == "s");
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN