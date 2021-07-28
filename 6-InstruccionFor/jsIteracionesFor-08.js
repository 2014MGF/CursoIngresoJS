function mostrar()
{
	let num;

	num = parseInt(prompt("Ingrese un numero."));

	while (isNaN(num)){
		num = parseInt(prompt("No es un numero. Ingrese un numero."));
	}
	for (;;){
		if (num%2 || num%num){
			console.log(num + " Es un numero primo");
			break;
		}
		console.log(num + " No es un numero primo");
		break;
	}

}//FIN DE LA FUNCIÓN