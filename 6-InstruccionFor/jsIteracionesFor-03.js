function mostrar()
{
	let repet,
		mens = "Hola UTN FRA";
	
	repet = parseInt(prompt("Ingrese cantidad de repetición:"));
	
	while(isNaN(repet) || repet < 0){
		repet = parseInt(prompt("No es un numero. Ingrese cantidad de repetición:"));
	}
	for(let i=0;i<repet;i++){
	
		alert(mens);
	}

}//FIN DE LA FUNCIÓN