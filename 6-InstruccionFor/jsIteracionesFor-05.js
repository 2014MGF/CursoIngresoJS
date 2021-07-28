function mostrar()
{
	let num;

	num = parseInt(prompt("Ingrese un numero:"));
	
	while(isNaN(num)){
		num = parseInt(prompt("No es un numero. Ingrese un numero:"));		
	}
	/*while(num != 9){
		num = parseInt(prompt("Ingrese un numero:"));
	}*/
	for (num; ;){
		num = parseInt(prompt("Ingrese un numero:"));

		if (num == 9){
			break;
		}

	}
}//FIN DE LA FUNCIÓN