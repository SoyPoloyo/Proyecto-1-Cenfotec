/*
async function getTipoVehiculo() { //fetch donde traigo el .json 
  var response = await fetch('/listarTipoVehiculo/recibir');
  var data = await response.json();
  return data;
}

var contenidoTablaVehiculo = document.getElementById('contenidoTablaVehiculo');
var listadoVehiculo = await getTipoVehiculo();
console.log(listadoVehiculo);
contenidoTablaVehiculo.innerHTML = '';


for (var i = 0; i < listadoVehiculo.length; i++) {
  contenidoTablaVehiculo.innerHTML += `
                  <tr>   
                      <td>${listadoVehiculo[i].nombre}</td>
                      <td>${listadoVehiculo[i].caracteristica}</td>
                      <td>${listadoVehiculo[i].descripcion}</td>
                  </tr>    
                  `;
}

for (let i of listadoVehiculo) {
  contenidoTablaVehiculo.innerHTML += `
              <tr>
                  <td>${i.nombre}</td>
                  <td>${i.caracteristica}</td>
                  <td>${i.descripcion}</td>
              </tr>    
              `;
}
*/

let contenidoTablaVehiculo = document.getElementById('contenidoTablaVehiculo');

fetch('/listarTipoVehiculo/recibir', {
    body: JSON.stringify(),
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(function (data) {
        return data.json();
    })
    .then(function (res) {
        let listadoVehiculo = {};

        listadoVehiculo = res;
        console.log(res)
        /*
        for (let i = 0; i < listadoVehiculo.length; i++) {
          contenidoTablaVehiculo.innerHTML += `
                      <tr> 
                          <td>${listadoVehiculo[i].nombre}</td>
                          <td>${listadoVehiculo[i].caracteristica}</td>
                          <td>${listadoVehiculo[i].descripcion}"</td>
                      </tr>    
                      `;
    
        }
        */
        for (let i of listadoVehiculo) {
            contenidoTablaVehiculo.innerHTML += `
                  <tr>
                      <td>${i.nombre}</td>
                      <td>${i.caracteristica}</td>
                      <td>${i.descripcion}</td>
                      <td><button class="botonBorrarEditar" onclick=""><i class="far fa-edit"></i></button></td>

                      <td><button class="botonBorrarEditar" onclick=""><i class="fas fa-trash"></i></button></td>
                  </tr>    
                  `;
        }

    })
    .catch(function (err) {
        console.log(err);
    });