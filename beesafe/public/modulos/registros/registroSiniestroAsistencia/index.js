let table = document.getElementById("contenidoTablaUsuarios");
let valor = { correo: localStorage.getItem('correo') };
id=localStorage.getItem('id')
contenidoUsuario = document.getElementById("contenidoUsuario");
contenidoBotones = document.getElementById("listadoUsuarios");
usuarioSolicitante = localStorage.getItem('correo');
console.log(usuarioSolicitante)






function habilitar(){
  
  habilita =document.getElementById('habilitar').value
  if (habilita == 1) {
    document.getElementById('tarjetasDisponibles').removeAttribute('hidden',false)
    document.getElementById('tipoVehiculo').removeAttribute('hidden',false)
  }else{
      document.getElementById('tarjetasDisponibles').setAttribute('hidden',true)
  document.getElementById('tipoVehiculo').setAttribute('hidden',true)
  }


}
function subirImagen() {
    
  console.dir(document.getElementById('imagenAgregada'));
    var archivo = document.getElementById("image").files[0];
    var reader = new FileReader();
    if (image) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
        document.getElementById("imagenAgregada").src = reader.result;
        document.getElementById("imagenAgregada").classList.add('imagenAgregada');
        document.getElementById('muestraIcono').remove()
        
      
    }
  } 
  
 console.log(image)

}



/* function guardar() {

  fetch("http://localhost:5252/listarUsuario/recibir", {
    body: JSON.stringify(valor),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (res) {
  
      usuario = res[0];
  
  
     
        var nombre= usuario.nombre
        var apellido= usuario.apellido
        var password=usuario.password
        var edad=usuario.edad
  
        console.log(nombre + 'probando');
  
        var enlace = ("/modificarUsuario/editarFoto/" + id);
         console.log(enlace);

  
  const formData = new FormData();
  formData.append('tipoAsistencia',nombre);
  formData.append('usuarioSolicitante', apellido);
  formData.append('descripcion', password);
  formData.append('ruta', edad);
  
  formData.append('image', document.getElementById('image').files[0]);

  fetch(enlace, {
      method: 'PUT',
      body: formData,
  }).then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => console.log('Success:', response));

  swal({
      title: "Modificación Correcta",
      text: "Campos completados de manera correcta",
      icon: "success",
      button: "Continuar",
  });

  
  setTimeout(() => {
    location.reload()
}, 3333);
  
  
    })
    .catch(function (err) {
      console.log(err);
    });
     
    
}//fin de modificar
 */
async function enviar() {
      
  let datos = ['tarjetasDisponibles', 'tipoVehiculo'];
  let valores = new FormData();
  let aprobado = false;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  for (let dato of datos) {
   valores.append( dato, document.getElementById(dato).value);
   console.log(dato)
  }
  
  for (let par of valores.entries()) {
    // mostramos los pares de valores
    console.log(par[0]+ ', '+ par[1]);
    if (par[1] == "") {

      swal({
        title: "Registro Incorrecto",
        text: "Debe completar todos los campos de manera correcta",
        icon: "warning",
        button: "Continuar",
      });
      aprobado = false;
      break;
    } else {

  
      aprobado = true;
    }
  }
  
  if (aprobado) {

    valores.append( 'usuarioSolicitante' ,usuarioSolicitante);

  valores.append( 'image' , document.getElementById('image').files[0]);


     fetch("http://localhost:5252/registroSiniestroAsistencia/insertar", {
      body: valores,
      method: "POST",

    })
      .then(function(data) {
        return data.json();
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });

      swal({
        title: "Registro Correcto",
        text: "Registro Exitoso",
        icon: "success",
        button: "Continuar",
      });
      

      setTimeout(() => {
        window.location.replace(
        "../../sesiones_perfiles/sesionUsuarioClasico/index.html"
      )
      }, 2333);
  
  
    
  }
}