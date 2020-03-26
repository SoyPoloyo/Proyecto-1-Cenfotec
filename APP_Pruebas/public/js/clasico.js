/************************************************************
     Codigo Validacion de Elio
     ****************************************************/

    function enviar () {   
        let datos = ['nombre', 'apellido', 'edad'];
        let valoresPrueba = {}; 
        let aprobado = false;
    
        for (let dato of datos) {         
            valoresPrueba[dato] = document.getElementById(dato).value;;
        }
        for (let i in valoresPrueba) {
           if(valoresPrueba[i] == ""){
               alert("Debe llenar todos los campos");
               aprobado= false;
               break
           }else{
         (console.log("Enviado"))
         aprobado = true
        }       
        }

        if(aprobado){
              fetch("http://localhost:5252/registroClasico/insertar", {
                        body: JSON.stringify(valoresPrueba),
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(function(data){
                        return data.json()
                    })
                    .then(function(res){
                        console.log(res)
                    })
                    .catch(function(err){
                        console.log(err)
                    })
        }
        alert("Se ha creado su cuenta con exito")    
    }
     

    /************************************************************
     Codigo normal - No contiene Validacion*
     ****************************************************/

     /*

function enviar () {
    console.log('probando');
    var nombre, apellido, edad;
    nombre = document.getElementById('nombre').value;
     apellido = document.getElementById('apellido').value;
     edad = document.getElementById('edad').value;
   
    var valores = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
    };
    console.log(valores);
    
    fetch("http://localhost:5252/registroEspecializado/insertar", {
        body: JSON.stringify(valores),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(data){
        return data.json()
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}

*/