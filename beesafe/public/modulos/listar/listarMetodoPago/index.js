contenidoTablaTarjetas = document.getElementById("contenidoTablaTarjetas");


console.log("probandoconsola")

function buscar(){


  fetch("http://localhost:5252/listarMetodoPago/recibir", {
    
    method: "GET"

  })
    .then(function(data) {
      return data.json();
    })
    .then(function(res) {
      let listadoUsuarios = {};
      console.log(res);
      listadoUsuarios = res;
      console.log(res)
      
      contenidoTablaTarjetas.innerHTML ="";
    
      for (let i of listadoUsuarios) {
    
        //console.log(valor);
        contenidoTablaTarjetas.innerHTML += `
                    <tr>
                       
                        <td>${i.nombre}</td>
                        <td>${i.numeroTarjeta}</td>
                        <td>${i.fecha}</td>
                        <td>${i.cvv}</td>
             
                    </tr>    
                    `;
      }
  
    })
    .catch(function(err) {
      console.log(err);
    });

}

buscar()

