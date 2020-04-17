  contenidoTablaRutas = document.getElementById(
    "contenidoTablaRutas"
  );
  
  
  fetch("http://localhost:5252/listarRutas/recibir", {
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
      let listadoRutas = {};
  
      listadoRutas = res;
  
      for (let listadoRuta of listadoRutas) {
        //console.log(valor);
        contenidoTablaRutas.innerHTML += `
                    <tr>
                      
                        <td>${listadoRuta.nombreRuta}</td>
                        <td>${listadoRuta.cordenadasRuta}</td>
                        <td>${listadoRuta.estado}</td>
                        <td><button class="botonBorrarEditar" onclick=""><i class="far fa-edit"></i></button></td>

                        <td><button class="botonBorrarEditar" onclick=""><i class="fas fa-trash"></i></button></td>
                       
                    
                     
                    </tr>    
                    `;
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  