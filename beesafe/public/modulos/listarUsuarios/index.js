
var existentes = [];
function  probando (){
    
    fetch("http://localhost:5252/registroUsuarioClasico/recibir", {
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

      
       console.log('segundo then');
      for (let i in res) {
        if (res[i]) {
           existentes = push.res[i];
          
        }
      }
      console.log(existentes);
       document.getElementById("prueba").innerHTML = res[2].tipoUsuario
       
     })
     .catch(function(err) {
       console.log(err);
     });
    
       console.log(existentes);
   
  }
   probando();
 