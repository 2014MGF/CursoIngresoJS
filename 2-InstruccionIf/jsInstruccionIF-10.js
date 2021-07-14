function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numAleatorio;

	numAleatorio = Math.floor(Math.random() * 10+1);

	if (numAleatorio >=9) {
		alert(numAleatorio);
		alert("EXCELENTE");
	}
	else if (numAleatorio <4) {
			alert(numAleatorio);
			alert("Vamos, la proxima se puede");
		}
	else {
		alert(numAleatorio);
		alert("APROBÓ");
	}
}//FIN DE LA FUNCIÓN