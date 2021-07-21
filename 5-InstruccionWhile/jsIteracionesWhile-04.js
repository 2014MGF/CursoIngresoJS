/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = parseInt(prompt("Ingrese un número entre 0 y 9 inclusive."));

	while(num < 0 || num > 9){
		num = parseInt(prompt("Error. Reingrese un número entre 0 y 9 inclusive."));
	}
	document.getElementById("txtIdNumero").value = num;
}//FIN DE LA FUNCIÓN