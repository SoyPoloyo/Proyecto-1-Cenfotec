contenidoTablaTarjetas = document.getElementById("contenidoTablaTarjetas");



function buscar(){


  valor = {
    identificador: localStorage.getItem('correo')
  };
  
  fetch("http://localhost:5252/listarMetodoPago/recibir", {
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
   
      listadoTarjetas = res;
      console.log(res)
      
      contenidoTablaTarjetas.innerHTML ="";
    
      for (let i of listadoTarjetas) {
    
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

