/* async function postTipoVehiculo(id) {
    valor = { _id: id }
    const res = await fetch('/modificarTipoVehiculo/recibir', {
        method: 'POST',
        body: JSON.stringify(valor),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data;
}//fin de postCategoriaIncidente */


/* 
const nombre = document.getElementById('nombre');
const caracteristica = document.getElementById('caracteristica');
const descripcion = document.getElementById('descripcion');

async function llenarCampos() {
    var response = await postTipoVehiculo(id);
    console.log(response);

    nombre.value = response[0].nombre;
    caracteristica.value = response[0].caracteristica;
    descripcion.value = response[0].descripcion;
    
}
llenarCampos();
 */

function modificar() {
    let id = localStorage.getItem('id');
    console.log(id);
    var enlace = ("/modificarVehiculo/editar/" + id);
    console.log(enlace);

    let datos = ["placaVehi", "modelo", "anno", 'marca_vehiculo'];
    let valores = {};
    let aprobado = false;

    for (let dato of datos) {
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores) {
        if (valores[i] == "") {
            swal({
                title: "Modificación Incorrecta",
                text: "Debe completar todos los campos de manera correcta",
                icon: "warning",
                button: "Continuar",
            });//josue
            aprobado = false;
            break;
        } else {
            aprobado = true;
        }
    }
    if (aprobado) {

        fetch(enlace, {
            method: 'PUT',
            body: JSON.stringify(valores),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success:', response));

        swal({
            title: "Registro Correcto",
            text: "Registro Exitoso",
            icon: "success",
            button: "Continuar",
        });

        setTimeout(() => {
            window.location.replace(
                "../../listar/listarVehiculos/index.html"
            )
        }, 3333);
    }

}//fin de registro
