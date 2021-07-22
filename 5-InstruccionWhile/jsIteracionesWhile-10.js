/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero,
		acumuladorPositivos = 0,
		acumuladorNegativos = 0,
		contadorPositivos = 0,
		contadorNegativos = 0,
		contadorCeros = 0,
		contadorNumPares = 0,
		promedioPositivos = 0,
		promedioNegativos = 0,
		diferencia,
		respuesta;


	do {
		numero = parseInt(prompt("Ingrese un número:"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Reingrese número:"));
		}
		if (numero > 0) {
			acumuladorPositivos += numero;
			contadorPositivos++;
		} else if (numero < 0) {
			acumuladorNegativos += numero;
			contadorNegativos++;
		} else {
			contadorCeros++;
		}
		if (numero % 2 == 0) {
			contadorNumPares++;
		}
		respuesta = prompt("Quiere seguir ingresando números? s/n").toLowerCase();
	} while (respuesta == `s`);
	if (contadorPositivos != 0) {
		promedioPositivos = acumuladorPositivos/contadorPositivos;
	}
	if (contadorNegativos != 0){
		promedioNegativos = acumuladorNegativos/contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;

	console.log("1-Suma de los negativos."+acumuladorNegativos);
	console.log("2-Suma de los positivos."+acumuladorPositivos);
	console.log("3-Cantidad de positivos."+contadorPositivos);
	console.log("4-Cantidad de negativos."+contadorNegativos);
	console.log("5-Cantidad de ceros."+contadorCeros);
	console.log("6-Cantidad de números pares."+contadorNumPares);
	console.log("7-Promedio de positivos."+promedioPositivos);
	console.log("8-Promedios de negativos."+promedioNegativos);
	console.log("9-Diferencia entre positivos y negativos."+diferencia);

}//FIN DE LA FUNCIÓN