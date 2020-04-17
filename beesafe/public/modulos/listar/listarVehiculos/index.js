contenidoTablaVehiculos = document.getElementById("contenidoTablaVehiculos");



function buscar(){


  valor = {
    identificador: localStorage.getItem('correo')
  };
  
  fetch("http://localhost:5252/listarVehiculo/recibir", {
    body: JSON.stringify(valor),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function(data) {
      return data.json();
    })
    .then(function(res) {
   
      listadoVehiculos = res;
      console.log(res)
      
      contenidoTablaVehiculos.innerHTML ="";
    
      for (let i of listadoVehiculos) {
    
        //console.log(valor);
        contenidoTablaVehiculos.innerHTML += `
                    <tr>
                       
                        <td>${i.marca_vehiculo}</td>
                        <td>${i.modelo}</td>
                        <td>${i.anno}</td>
                        <td>${i.placaVehi}</td>
             
                    </tr>    
                    `;
      }
  
    })
    .catch(function(err) {
      console.log(err);
    });

}

buscar()

/* router.post('/update', function(req, res) {
  siniestro.findByIdAndUpdate({ _id: req.body.id },{ icono: req.body.icono,nombre : req.body.nombre,descripcion: req.body.descripcion},
    function(err, result) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({
          succes: false,
          msg: 'El usuario no existe'
        }) 
      };
    }
  );
});
 */

