/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let numAleatorio = 1;
	let mensaje = "";

	while(numAleatorio <= 10){
		mensaje = mensaje + numAleatorio + " - ";
		numAleatorio ++;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN