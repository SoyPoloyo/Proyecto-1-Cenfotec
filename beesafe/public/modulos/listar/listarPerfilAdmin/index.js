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

      
                    <h4>Nombre</h4>
                    <p class="fondosG ">
                    ${usuario.nombre}
                    </p>
                    <br>
                    <h4>Apellidos</h4>
                    <p class="fondosG ">
                    ${usuario.apellido}
                    </p>

                    <br> 

                    <h4>Edad</h4>
                    <p  class="fondosG ">
                    ${usuario.edad}
                    </p>
                    <br>
                    <h4>Cedula</h4>
                    <p  class="fondosG ">
                    ${usuario.cedula}
                    </p>

                    <br> 

                    <h4>Correo Electronico</h4>
                    <p  class="fondosG ">
                    ${usuario.correo}
                    </p>    

      `;
  })
  .catch(function(err) {
    console.log(err);
  });
