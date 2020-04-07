contenidoTablaVehiculos = document.getElementById(
  "contenidoTablaVehiculos"
);

fetch("http://localhost:5252/listarVehiculo/recibir", {
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
    let listaVehiculos = {};

    listaVehiculos = res;

    for (let listaVehiculo of listaVehiculos) {
      //console.log(valor);
      contenidoTablaVehiculos.innerHTML += `
                  <tr>
                    
                      <td>${listaVehiculo.nombre}</td>
                      <td>${listaVehiculo.placa}</td>
                      <td>${listaVehiculo.modelo}</td>
                      <td>${listaVehiculo.ano}</td>
                      <td>${listaVehiculo.marca}</td>
                    
                 
                   
                  </tr>    
                  `;
    }
  })
  .catch(function(err) {
    console.log(err);
  });
