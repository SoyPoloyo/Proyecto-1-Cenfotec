console.log(localStorage.getItem('correo'))
function enviar() {
    let datos = ['placaVehi', 'modelo','anno', 'marca_vehiculo'];
    let valores = {};
    let aprobado = false;
    for (let dato of datos){
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores){
        if (valores[i] == "" ){
            swal({
                title: "Registro Incorrecto",//josue
                text: "Debe completar todos los campos de manera correcta",//josue
                icon: "warning",//josue
                button: "Continuar",//josue
              });
            aprobado = false;
            break
        }
        else{
            (console.log("enviado"))
            aprobado = true
        }
    }
    if (aprobado){

        identificador = localStorage.getItem('correo');
        const formData = new FormData();

        formData.append('identificador', identificador);
        formData.append('placaVehi', document.getElementById('placaVehi').value);
        formData.append('modelo', document.getElementById('modelo').value);
        formData.append('anno', document.getElementById('anno').value);
        formData.append('marca_vehiculo', document.getElementById('marca_vehiculo').value);
       
        fetch("http://localhost:5252/registroVehiculo/insertar", {    
            method: 'POST',
            body: formData,    
        }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

}

}