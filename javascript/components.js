/*PROPÓSITO: Funcion que retorna una plantilla literal con los datos de las ceramicas enviadas por parametro.Cada *producto va a tener asignado un modal, a traves del cual se podra ver información mas detallada del producto seleccionado.*/

 function componenteCard(producto){
    return `<div class="card m-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${producto.imagen}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <button id=${producto.id} type="button" class="btn btn-primary btn-producto">Agregar</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${producto.id}">
                    Info
                    </button>
                    <div class="modal fade" id="exampleModal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Ceramica</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <h5 >Nombre: ${producto.nombre}</h5>
                        <h5 >Marca: ${producto.marca}</h5>
                        <h5 >Precio: $${producto.precio}</h5>
                        <img src="${producto.imagen}" class="img-thumbnail">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>`
  }
/*SE QUITARON PROPIEDADES IMPLEMNTADAS DESDE UN CSS, ESPECIFICO PARA CERAMICAS, PARA MEJORAR LA VISUALIDAD DESDE EL DOM*/ 
  $("#bodyCeramica").css({ "margin-right":"auto",
  "margin-left": "auto","background-image": "url(ImagenesPag/fondoPoniendoCeramica9.jpg)"})

                      