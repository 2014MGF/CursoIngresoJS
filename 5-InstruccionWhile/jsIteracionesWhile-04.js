/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num = 0;

	num = parseInt(prompt("Ingrese un número entre 0 y 9 inclusive."));

	while(num > 9){
		alert("Número incorrecto, intente nuevamente.");
		num = parseInt(prompt("Ingrese un número entre 0 y 9 inclusive."));
	}
	document.getElementById("txtIdNumero").value = num;
}//FIN DE LA FUNCIÓN