function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numAleatorio;

	numAleatorio = Math.floor((Math.random() * (11-1))+1);

	if (numAleatorio >=9) {
		alert(numAleatorio);
		alert("EXCELENTE");
	}
	if (numAleatorio >=4 && numAleatorio <9) {
		alert(numAleatorio);
		alert("APROBÓ");
	}
	if (numAleatorio <4) {
		alert(numAleatorio);
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN