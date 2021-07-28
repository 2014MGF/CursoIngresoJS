function mostrar()
{
	let num;
	let cont = 0;

	num = parseInt(prompt("Ingrese numero:"));

	while(isNaN(num)){
		num = parseInt(prompt("No es un numero. Ingrese numero:"));
	}
	for(let i = 1;i <= num;i++){
		if (num%i){
			continue;
		}
		cont++;
		console.log("Numeros divisores: " + i);
	}
	console.log("Cantidad de numeros divisores: " + cont);

}//FIN DE LA FUNCIÓNx	