/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let precio = 35,
        precioFinal,
        marca,
        cantidad,
        ingresoBruto;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad >= 6) {
        precioFinal = precio * cantidad * 0.50;
    } else {
        switch(marca){
            case "ArgentinaLuz":
                if (cantidad == 5) {
                   precioFinal = precio * cantidad * 0.60;
                } else if (cantidad == 4){
                    precioFinal = precio * cantidad * 0.75;
                } else if (cantidad == 3){
                    precioFinal = precio * cantidad * 0.85;
                } else{
                    precioFinal = precio * cantidad;
                }
                break;
            case "FelipeLamparas":
                if (cantidad == 5) {
                    precioFinal = precio * cantidad * 0.70;
                } else if (cantidad == 4){
                    precioFinal = precio * cantidad * 0.75;
                } else if (cantidad == 3){
                    precioFinal = precio * cantidad * 0.90;
                } else{
                    precioFinal = precio * cantidad;
                }
                break;
            default:
                if (cantidad == 5) {
                    precioFinal = precio * cantidad * 0.70;
                } else if (cantidad == 4){
                    precioFinal = precio * cantidad * 0.80;
                } else if (cantidad == 3){
                    precioFinal = precio * cantidad * 0.95;
                } else{
                    precioFinal = precio * cantidad;
                }
        }
    }
    
    if(precioFinal < 120){
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    } else{
        ingresoBruto = precioFinal * 0.10;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        alert("Usted pago: $ " + ingresoBruto + " de IIBB.");
    }
}
