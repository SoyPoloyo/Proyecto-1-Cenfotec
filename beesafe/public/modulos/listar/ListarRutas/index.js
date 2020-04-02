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
                      
                        <td>${listadoRuta.nombre}</td>
                        <td>${listadoRuta.apellido}</td>
                        <td>${listadoRuta.edad}</td>
                        <td>${listadoRuta.correo}</td>
                        <td>${listadoRuta.tipoCedula}</td>
                        <td>${listadoRuta.cedula}</td>
                        <td>${listadoRuta.tipoAsitencia}</td
                    
                     
                    </tr>    
                    `;
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  