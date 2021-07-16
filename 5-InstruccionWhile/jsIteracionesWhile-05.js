/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m"){
		alert("Error, reintente.");
		sexoIngresado = prompt("ingrese f ó m .");
	}
	if (sexoIngresado == "f") {
		sexoIngresado = "Femenino";
	} else {
		sexoIngresado = "Masculino";
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN