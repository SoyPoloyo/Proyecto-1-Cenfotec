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
    console.log(res)

    for (let i = 0; i < listadoUsuarios.length; i++) {
      contenidoTablaUsuarios.innerHTML += `
                  <tr>
                      <td>${listadoUsuarios[i]._id}</td>
                      <td>${listadoUsuarios[i].tipoUsuario}</td>
                      <td>${listadoUsuarios[i].nombre}</td>
                      <td>${listadoUsuarios[i].apellido}</td>
                      <td>${listadoUsuarios[i].edad}</td>
                      <td>${listadoUsuarios[i].correo}</td>
                      <td>${listadoUsuarios[i].tipoCedula}</td>
                      <td>${listadoUsuarios[i].cedula}</td>
                      <td>${listadoUsuarios[i].tipoAsistencia}</td>
                  </tr>    
                  `;
      
    }
  
    for (let i of listadoUsuarios) {
      //console.log(valor);
      contenidoTablaUsuarios.innerHTML += `
                  <tr>
                      <td>${i._id}</td>
                      <td>${i.tipoUsuario}</td>
                      <td>${i.nombre}</td>
                      <td>${i.apellido}</td>
                      <td>${i.edad}</td>
                      <td>${i.correo}</td>
                      <td>${i.tipoCedula}</td>
                      <td>${i.cedula}</td>
                      <td>${i.tipoAsistencia}</td>
                  </tr>    
                  `;
    }

  })
  .catch(function(err) {
    console.log(err);
  });
