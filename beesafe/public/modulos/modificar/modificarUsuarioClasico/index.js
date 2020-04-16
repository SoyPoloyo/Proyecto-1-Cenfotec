contenidoUsuario = document.getElementById("contenidoUsuario");



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
  .then(function(data) {
    return data.json();
  })
  .then(function(res) {
  
    usuario = res[0];
    console.log(res);

    contenidoUsuario.innerHTML += `

      
                    <h4>Nombre y Apellidos</h4>
                    <input class="fondosG izquierda" type="text" value="" placeholder="${usuario.nombre}" name="nombre" id="nombre">
                    
                    <input class="fondosG izquierda" type="text" value="" placeholder="${usuario.apellido}" name="nombre" id="nombre">

                    <br> <br> <br>

                    <h4>Edad y Cedula</h4>

                    <input class="fondosG izquierda" type="text" value="" placeholder="${usuario.edad}" name="nombre" id="nombre">

                    <input class="fondosG izquierda" type="text" value="" placeholder="${usuario.cedula}" name="nombre" id="nombre">


                    <br> <br> <br>
                    

                    <h4>Correo Electronico</h4>
                    <input class="fondosG largoFondos " type="text" value="" placeholder="${usuario.correo}" name="nombre" id="nombre">

      `;
  })
  .catch(function(err) {
    console.log(err);
  });
