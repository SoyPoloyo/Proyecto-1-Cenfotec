contenidoTablaUsuarios = document.getElementById("contenidoTablaUsuarios");

fetch("http://localhost:5252/listarCaracteristicasVehiculo/recibir", {
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
                    
                      <td>${listadoUsuario.nombre}</td>
                      <td>${listadoUsuario.descripcion}</td>
                   
                   
                  </tr>    
                  `;
    }

  })
  .catch(function(err) {
    console.log(err);
  });
