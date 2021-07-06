/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1, numero2, resto;

	numero1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = numero1 % numero2;

	alert("El resto de la división es: " + resto);
}
