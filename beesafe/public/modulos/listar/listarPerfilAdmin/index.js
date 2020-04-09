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
                    <p class="fondosG izquierda">
                    ${usuario.nombre}
                    </p>

                    <p class="fondosG izquierda">
                    ${usuario.apellido}
                    </p>

                    <br> <br> <br>

                    <h4>Edad y Cedula</h4>
                    <p  class="fondosG izquierda">
                    ${usuario.edad}
                    </p>

                    <p  class="fondosG izquierda">
                    ${usuario.cedula}
                    </p>

                    <br> <br> <br>

                    <h4>Correo Electronico</h4>
                    <p  class="fondosG largoFondos">
                    ${usuario.correo}
                    </p>    

      `;
  })
  .catch(function(err) {
    console.log(err);
  });