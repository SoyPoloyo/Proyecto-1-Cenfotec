let table = document.getElementById("contenidoTablaUsuarios");
let valor = { correo: localStorage.getItem('correo') };


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

}


async function postListarUsuario() {
  const res = await fetch('/listarUsuario/recibir', {
      method: 'POST',
      body: JSON.stringify(valor),
      headers: {
          "Content-Type": "application/json"
      }
  });
  const data = await res.json();
  return data;
}//fin




document.addEventListener("DOMContentLoaded", async function renderListarUsuario() {

  var listarUsuario = await postListarUsuario();
  console.log(listarUsuario);

  contenidoUsuario = document.getElementById("contenidoUsuario");
  contenidoBotones = document.getElementById("listadoUsuarios");



  valor = {
    correo: localStorage.getItem('correo')
  };
  
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
      console.log(res);


     

      contenidoUsuario.innerHTML += `
                      
                     
  
                      <div class="izquierda">
                      <h4>Nombre</h4>
                      <input class="fondosG " type="text" readonly value="${usuario.nombre}"  name="nombre" id="nombre">
                      <br> <br> 
  
                      <h4>Apellidos</h4>
                      <input class="fondosG " type="text" readonly value="${usuario.apellido}"  name="apellido" id="apellido">
                      <br><br>
  
                      <h4>Edad</h4>
                      <input class="fondosG " type="text" readonly value="${usuario.edad}"  name="edad" id="edad">
                      <br><br>
  
                      <h4>Cedula</h4>
                      <input class="fondosG " type="text" readonly value="${usuario.cedula}"  name="cedula" id="cedula">
  
                      <br> <br>
                      
                      <h4>Correo Electronico</h4>
                      <input class="fondosG  " type="text" readonly value="${usuario.correo}"  name="correo" id="correo">
                      <br> <br>
                      </div>

                      <div class="fotoperfilespacio">
                      <h4>Foto de perfil</h4>
                      <br> <br>

                      

                      <img class="fotoperfil" id="imagenAgregada" src="../../../../assets/uploads/${usuario.image}" alt="">
                      ${usuario.image == '' ? '<i class="far fa-image muestraIcono" id="muestraIcono"></i> <br> <br> ' : '<br><br>'} 
                      <img class="" id="imagenAgregada" alt=""> <br><br>
                  

                      
                      
                     

                    <input onchange="subirImagen()" class="estiloBoton" type="file" name="image" id="image"> <br> <br>
                      </div>

                      

                      <br>
                      <br>
          
                          
          
                        
  
        `;


     
    })


    .catch(function (err) {
      console.log(err);
    });


}); //fin de renderListarUsuario

 function obtenerId() {

  localStorage.setItem('id', usuario._id);
      window.location.href = '../../modificar/modificarUsuarioEspecializado/index.html';
      
      
}