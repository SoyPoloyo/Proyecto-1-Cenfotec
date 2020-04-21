async function postTipoVehiculo(id) {
    valor = { _id: id }
    const res = await fetch('/listarMetodoPago/recibir', {
        method: 'POST',
        body: JSON.stringify(valor),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data;
}//fin de postCategoriaIncidente 

let id = localStorage.getItem('id');
console.log(id);

var enlace = ("/modificarMetodoPago/editar/" + id);
console.log(enlace);


let nombre = document.getElementById('nombre');
let caracteristica = document.getElementById('caracteristica');
let descripcion = document.getElementById('descripcion');

async function llenarCampos() {
    var response = await postTipoVehiculo();
    console.log(response);

    /*  nombre.placeholder = response[0].nombre;
     caracteristica.value = response[0].caracteristica;
     descripcion.value = response[0].descripcion; */

}

llenarCampos();
console.log(nombre.placeholder)


function modificar() {
    let datos = ["nombre", "numeroTarjeta", "fecha", "cvv"];
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
            title: "Modificación Correcta",
            text: "Campos completados de manera correcta",
            icon: "success",
            button: "Continuar",
        });

        setTimeout(() => {
            window.location.replace(
                "../../listar/listarMetodoPago/index.html"
            )
        }, 3333);


    }

}//fin de registro