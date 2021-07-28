
function mostrar()
{
	let tipo,
		cantidad,
		precio,
		marca,
		fabricante,
		precioMinAl = 0,
		cantAlBarato,	
		fabAlBarato,
		flagA = 1,
		contadorB = 0,
		contadorJ = 0,
		contadorA = 0,
		acumB = 0,
		acumA = 0,
		acumJ = 0,
		maxUnidades,
		promedio;

	for (let i=0; i<1; i++){
		tipo = prompt("Ingrese tipo (Barbijo/Alcohol/Jabon)").toLowerCase();
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt("No es un tipo valido. Ingrese tipo de (Barbijo/Alcohol/Jabon)").toLowerCase();
		}
		precio = parseInt(prompt("Ingrese precio (entre 100 y 300)"));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Precio invalido. Ringrese precio (entre 100 y 300)"));
		}
		cantidad = parseInt(prompt("Ingrese cantidad (hasta 1000 unidades."));
		while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000){
			cantidad = parseInt(prompt("Cantidad invalida. Reingrese cantidad (hasta 1000 unidades.)"));			
		}
		marca = prompt("Ingrese marca: ");
		while(marca == ""){
			marca = prompt("Error. Reingrese marca: ");
		}
		fabricante = prompt("Ingrese fabricante: ");
		while(fabricante == ""){
			fabricante = prompt("Error. Reingrese fabricante: ");
		}
		if (tipo == "alcohol"){
			acumA += cantidad;
			contadorA++;
			if (flagA || precio < precioMinAl){
				precioMinAl = precio;
				fabAlBarato = fabricante;
				cantAlBarato = cantidad;
				flagA = 0;
			}			
		} else if (tipo == "barbijo"){
			acumB += cantidad;
			contadorB++;
		} else{
			acumJ += cantidad;
			contadorJ++;
		}
	}
	if (acumJ > acumA && acumJ > acumB){
		maxUnidades = "jabon";
		promedio = acumJ / contadorJ;
	} else if(acumA >= acumJ && acumA > acumB){
		maxUnidades = "Alcohol";
		promedio = acumA / contadorA;
		
	} else{
		maxUnidades = "barbijo";
		promedio = acumB / contadorB;
	}
	document.write("Precio alcohol barato " + precioMinAl + " Fabricante: " + fabAlBarato + " cantidad: " + cantAlBarato + "<br>");
	document.write("Tipo con mas unidades: " + maxUnidades + "<br>");
	document.write("Cantidad de jabones: " + contadorJ + "<br>");
}
