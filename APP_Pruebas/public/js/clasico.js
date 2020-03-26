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
    
    fetch("http://localhost:5252/registroClasico/insertar", {
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