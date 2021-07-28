function mostrar()
{
  let articulo,
      cantidad,
      acumArena=0,
      acumCal=0,
      acumCemento=0,
      acumImpArena,
      acumImpCal,
      acumImpCemento,
      precioArena=40,
      precioCal=50,
      precioCemento=60,
      flag = 0,
      cantTotal,
      importeBruto,
      importeNeto,
      descuento,
      respuesta;

      do {
        articulo = prompt("Ingrese articulo(arena/cal/cemento)").toLowerCase();
        while(articulo != "arena" && articulo !="cal" && articulo != "cemento"){
          articulo = prompt("El articulo no es valido. Reingrese.").toLowerCase();
        }
        cantidad = parseInt(prompt("Ingrese cantidad:"));
        while(isNaN(cantidad)){
          cantidad = parseInt(prompt("No es un numero. Reingrese cantidad:"));
        }
        if (articulo == "arena") {
          acumArena += cantidad;
          acumImpArena = precioArena * acumArena; 
        } else if (articulo == "cal"){
          acumCal += cantidad; 
          acumImpCal = precioCal * acumCal;         
        } else {
          acumCemento += cantidad;
          acumImpCemento = precioCemento * acumCemento;
        }
        cantTotal = acumArena + acumCal + acumCemento;
        importeBruto = acumImpArena + acumImpCal + acumImpCemento;
        if (cantTotal >= 30) {
          descuento = importeBruto * 0.30;
          importeNeto = importeBruto - descuento;
          flag = 1;
        } else if (cantTotal >= 10 && cantTotal < 30){
          descuento = importeBruto * 0.15;
          importeNeto = importeBruto - descuento;
          flag = 2;
        }
        if (flag == 0) {
          console.log("Importe total a pagar: $ " + importeBruto);
        } else {
          console.log("Su compra tiene un descuento de: $ " + descuento);                    
          console.log("Importe total a pagar: $ " + importeNeto);                    
        }




        respuesta = prompt("Quiere seguir ingresando articulos? s/n").toLowerCase();
      } while (respuesta == `s`);
      console.log(articulo);
      console.log(cantidad);
}
