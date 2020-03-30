async function probando (){



    fetch("http://localhost:5252/listadoUsuarios/mostrar", {
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


       console.log('segundo then');
     })
     .catch(function(err) {
       console.log(err);
     });
   

   }
   probando();
   
   console.log('estoy en al consola abajo');