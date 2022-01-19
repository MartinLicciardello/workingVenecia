/*Mejorar el estilo del formulario desde el Dom */
$("#formularioSeccion").prepend('<h2 class="dato">Teléfono: 42469875</h2><br><h2 class="dato">Dirección: 9 de Julio 1680</h2>')
$(".dato").css({ "border": "solid white 2px",
                         "font-size": "40px",    "text-align": "center", "color" : "black"
                        })


//FORMULARIO 

/*Se empleo el uso de un modal para que los datos ingresados en el form sean mostrados a traves de este. */
   
$("#formulario").submit(function(e){
    e.preventDefault();
    let nombre = $('#nombre').val();
    let apellido = $('#apellido').val();
    let email = $('#email').val();
    let consulta = $('textarea').val();
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(consulta);

    let modalBody = $('.modal-body');
    modalBody.append(`
            <p>Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}</p>
            <p>Email: ${email}</p>
            <p>Consulta: ${consulta}</p>
    `)

    $('#modal-button').trigger('click');
   
})

// function captura(){
//   let nombreIngresado = document.getElementById("nombre").value;
// }










//Aplicacion de evento al submit del formulario
   //salida por consola del llenado del form

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit",validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();

//     let formulario = e.target

//     console.log(formulario.children[0].value);

//     console.log(formulario.children[3].value);

//     console.log(formulario.children[6].value);

//     console.log(formulario.children[9].value);


// }




