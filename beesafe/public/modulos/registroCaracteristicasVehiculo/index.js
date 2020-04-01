
function probando() {
    fetch("http://localhost:5252/registroCaracteristicaVehiculo/recibir", {
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
        console.log();
  
        console.log("segundo then");
  
        console.log(res.length)
        console.log(res[1])
        let objeto = {}
        objeto = res;
        console.log(objeto.length)
       
        for (let i = 0; i <= objeto.length; i++) {
         
          document.getElementById("prueba").innerHTML = objeto[i].nombre;     
        }
  
  
      })
      .catch(function(err) {
        console.log(err);
      });
  
  }
  probando();
  