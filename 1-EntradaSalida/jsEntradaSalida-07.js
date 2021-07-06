/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1, numero2, suma;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = numero1 + numero2;

	alert("La suma es: " + suma);

}

function restar()
{
	var numero1, numero2, resta;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = numero1 - numero2;

	alert("La resta es: " + resta);

}

function multiplicar()
{ 
	var numero1, numero2, multiplicacion;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicacion = numero1 * numero2;

	alert("La multiplicación es: " + multiplicacion);
}

function dividir()
{
	var numero1, numero2, division;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	division = numero1 / numero2;

	alert("La división es: " + division);
}

