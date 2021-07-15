function mostrar()
{
	/*
	let n1,
		n2,
		n3,
		n4,
		n5,
		suma,
		promedio;

	n1 = parseInt(prompt("Ingrese un número."));
	n2 = parseInt(prompt("Ingrese un número."));
	n3 = parseInt(prompt("Ingrese un número."));
	n4 = parseInt(prompt("Ingrese un número."));
	n5 = parseInt(prompt("Ingrese un número."));

	suma = n1+n2+n3+n4+n5;
	promedio = suma/5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
*/
	let num,
		contador = 0,
		acumulador = 0;

	while(contador < 5){
		num = parseInt(prompt("Ingrese un número."));
		acumulador += num;
		contador ++;
	}
	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN