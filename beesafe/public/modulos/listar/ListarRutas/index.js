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
                      
                        <td>${listadoRutas.nombre}</td>
                        <td>${listadoRutas.apellido}</td>
                        <td>${listadoRutas.edad}</td>
                        <td>${listadoRutas.correo}</td>
                        <td>${listadoRutas.tipoCedula}</td>
                        <td>${listadoRutas.cedula}</td>
                        <td>${listadoRutas.tipoAsitencia}</td>
                        <td>${listadoRutas.imagen}</td>

                    
                     
                    </tr>    
                    `;
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  