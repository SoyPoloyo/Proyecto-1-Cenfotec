contenidoTablaCaracteristicas = document.getElementById(
  "contenidoTablaCaracteristicas"
);

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
    let listadoCaracteristicas = {};

    listadoCaracteristicas = res;

    for (let listadoCaracteristica of listadoCaracteristicas) {
      //console.log(valor);
      contenidoTablaCaracteristicas.innerHTML += `
                  <tr>
                    
                      <td>${listadoCaracteristica.nombre}</td>
                      <td>${listadoCaracteristica.descripcion}</td>
                  
                   
                  </tr>    
                  `;
    }
  })
  .catch(function(err) {
    console.log(err);
  });
