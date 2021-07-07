/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1, precio2, precio3, resultado;

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = precio1+precio2+precio3;

	alert("La suma de precios de los 3 productos es: "+resultado);

}
function Promedio () 
{
	let precio1, precio2, precio3, resultado;

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = (precio1+precio2+precio3)/3;

	alert("La promedio de los 3 productos es: "+resultado);

}
function PrecioFinal () 
{
	let precio1, precio2, precio3, resultado;

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = (precio1+precio2+precio3)*1.21;

	alert("La suma de precios de los 3 productos mas iva es: "+resultado);

}