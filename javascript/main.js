
//----------------------------------CLASES----------------------------------//
class Producto {
    constructor(datos){
      this.id = datos.id;
      this.nombre = datos.nombre;
      this.moneda = datos.marca;
      this.precio = datos.precio,
      this.cantidad = 1;
    }
    addCantidad(){
      this.cantidad++;
    }
    getTotal(){
      return (this.cantidad *  this.precio);
    }
  }
  //DOM CARGADO EFECTIVAMENTE
  $(document).ready(function(){
    console.log("Dom cargado");
  })
  //Almacenar datos con (clave,valor) de ceramicas

 const guardarLocal = (clave,valor) =>{localStorage.setItem(clave,valor)};

    //Recuperacion de datos
    guardarLocal("listaProductos", JSON.stringify( DATOSCERAMICAS));

    let muestraGuardarLocal = JSON.parse(localStorage.getItem("listaProductos"));
    console.log(muestraGuardarLocal);

  //----------------------------------FUNCIONES----------------------------------//
  //AGREGAMOS UNA ESTRUCTURA HTML AL CONTENEDOR DE ID contenidoGenerado
  function generarHTMLJQ(ceramica){
    //UTILIZAMOS EL METODO DE jQUERY PREPEND PARA AGREGAR
    $('#contenidoGenerado').prepend(componenteCard(ceramica))
  }
  //----------------------------------EVENTOS----------------------------------//
  //ASOCIAMOS EN READY LOS EVENTOS SOBRE EL HTML GENERADO
  $(document).ready(function () {
    $(".btn-producto").click(function (e) { 
      //VER SI EL PRODUCTO YA ESTA EN EL CARRITO CON FIND
      let producto = SELECCIONADOS.find(producto => producto.id == e.target.id);
      if(producto != undefined){
        //ESTA EN EL CARRITO, ENTONCES NO ES NECESARIO BUSCAR LA INFORMACION EN EL ARRAY DE DATOS, SUMAMOS UNA CANTIDAD
        producto.addCantidad();
      }else{
        //NO ESTA EN EL CARRITO, ENTONCES LO BUSCAMOS EN EL ARRAY DE DATOS
        let seleccionado = DATOSCERAMICAS.find(producto => producto.id == e.target.id);
        SELECCIONADOS.push(new Producto(seleccionado));
      }
      
      //SALIDA DEL CARRITO SEGUN LA INFORMACION DEL ARRAY DE SELECCIONADOS.
      
      
      $("#compras").empty();
      for (const producto of SELECCIONADOS) {
          $("#compras").append(`<h3>${producto.nombre}- Cantidad ${producto.cantidad} Total: $${producto.getTotal()}</h3>`);
      }
    });
  });
  //----------------------------------PROGRAMA PRINCIPAL----------------------------------//
  //POR CADA ELEMENTO EN "DATOSCERAMICAS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML ASOCIADA.
  for(let ceramica of DATOSCERAMICAS){
    //LLAMADA A LA FUNCIÓN DE generarHTML PARA CADA CERAMICA. PASAMOS LA INFORMACION DE "ceramica" POR PARÁMETRO.
    generarHTMLJQ(ceramica);
  }
  //AGREGAR CLASE A ELEMENTO CON jQUERY
  $('#contenidoGenerado').addClass("miNuevaClase");
  
  //MODAL
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



//Implementamos el uso de AJAX, PARA LA FUNCIONALIDAD SINCRONICA UTILIZADA

 $(document).ready($.getJSON("ceramica.json",function(datos,estado){
    console.log(datos);
    console.log(estado);
  }))
  