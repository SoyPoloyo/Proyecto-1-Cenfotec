function enviar() {
    var aprobado = false;
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;

    if (nombre == "" && descripcion == "")
        alert("Debe completar todos los campos de manera correcta");
    else aprobado = true;

    if (aprobado) {

        fetch('http://localhost:5252/caracteristicasVehiculo/insertar', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success:', response));
    }
}



