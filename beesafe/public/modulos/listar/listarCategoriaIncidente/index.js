/*
async function getCategoriaIncidente() { //fetch donde traigo el .json 
  var response = await fetch('/listarCategoriaIncidente/recibir');
  var data = await response.json();
  return data;
}

var contenidoTablaIncidente = document.getElementById('contenidoTablaIncidente');
var listadoIncidente = await getCategoriaIncidente();
console.log(listadoIncidente);
contenidoTablaIncidente.innerHTML = '';


for (var i = 0; i < listadoIncidente.length; i++) {
  contenidoTablaIncidente.innerHTML += `
                  <tr>   
                      <td>${listadoIncidente[i].nombre}</td>
                      <td>${listadoIncidente[i].descripcion}</td>
                      <td><img src="${'listadoIncidente[i].image}"></td>
                  </tr>    
                  `;
}

for (let i of listadoIncidente) {
  contenidoTablaIncidente.innerHTML += `
              <tr>
                  <td>${i.nombre}</td>
                  <td>${i.descripcion}</td>
                  <td><img src="${'i.image}"></td>
              </tr>    
              `;
}
*/

let contenidoTablaIncidente = document.getElementById("contenidoTablaIncidente");

fetch('/listarCategoriaIncidente/recibir', {
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
        let listadoIncidente = {};

        listadoIncidente = res;
        console.log(res)
       
        for (let i of listadoIncidente) {
            contenidoTablaIncidente.innerHTML += `
                  <tr>
                      <td>${i.nombre}</td>
                      <td>${i.descripcion}</td>
                      <td><img class="imagen" src="${i.image}"></td>
                      <td><button class="botonBorrarEditar" onclick=""><i class="far fa-edit"></i></button></td>
                      <td><button class="botonBorrarEditar" onclick=""><i class="fas fa-trash"></i></button></td>
           
                  </tr>    
                  `;
        }

    })
    .catch(function (err) {
        console.log(err);
    });