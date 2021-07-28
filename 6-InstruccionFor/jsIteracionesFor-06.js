function mostrar()
{
	let num;
	let cont = 0;

	num = parseInt(prompt("Ingrese numero."));
	
	while (isNaN(num)){
		num = parseInt(prompt("No es un numero. Ingrese numero."));
	}
	for(let i = 1;i <= num;i++){
		if(i%2){
			continue;
		}
		cont++
		console.log(i);
	}
	console.log("Cantidad de numeros pares:"+cont);


}//FIN DE LA FUNCIÓN