contenidoTablaUsuarios = document.getElementById("contenidoTablaUsuarios");

fetch("http://localhost:5252/listarUsuarios/recibir", {
  body: JSON.stringify(),
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(function(data) {
    return data.json();
  })
  .then(function(res) {
    let listadoUsuarios = {};

    listadoUsuarios = res;

  
    for (let listadoUsuario of listadoUsuarios) {
      //console.log(valor);
      contenidoTablaUsuarios.innerHTML += `
                  <tr>
                      <td>${listadoUsuario._id}</td>
                      <td>${listadoUsuario.tipoUsuario}</td>
                      <td>${listadoUsuario.nombre}</td>
                      <td>${listadoUsuario.apellido}</td>
                      <td>${listadoUsuario.edad}</td>
                      <td>${listadoUsuario.correo}</td>
                      <td>${listadoUsuario.tipoCedula}</td>
                      <td>${listadoUsuario.cedula}</td>
                      <td>${listadoUsuario.tipoAsistencia}</td>
                  </tr>    
                  `;
    }

  })
  .catch(function(err) {
    console.log(err);
  });
