
var existentes;
function probando (){


    
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
       console.log(res);

       existentes = res;
       console.log('segundo then');
       console.log(existentes);
     })
     .catch(function(err) {
       console.log(err);
     });
   

   }
   probando();
   console.log('tercer then');
   console.log(existentes);