function enviar() {
    let datos = ['nombre', 'descripcion'];
    let valores = {};
    let aprobado = false;
    for (let dato of datos){
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores){
        if (valores[i] == "" ){
            alert("Debe completar todos los campos de manera correcta");
            aprobado = false;
            break
        }
        else{
            (console.log("enviado"))
            aprobado = true
        }
    }
    if (aprobado){
        fetch("http://localhost:5252/caracteristicasVehiculo/insertar", {
            method:"POST",
            body: JSON.stringify(valores),
            headers:{
                'content-Type': 'application/json'
            }
        })     .then(function(data){
            return data.json()
        })
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

alert("Se ha creado su cuenta con exito")     
    }
}
