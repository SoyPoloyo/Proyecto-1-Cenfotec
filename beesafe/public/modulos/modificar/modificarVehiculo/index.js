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


contenidoUsuario = document.getElementById("contenidoUsuario");
valor = {
    id: localStorage.getItem('id')
  };
  
  fetch("http://localhost:5252/listarVehiculo/recibir3", {
    body: JSON.stringify(valor),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function(data) {
      return data.json();
    })
    .then(function(res) {
    
      usuario = res[0];
      console.log(res);
  
      contenidoUsuario.innerHTML += `
  
        
                      <h4>Numero de placa</h4>
                      <input class="fondosG " type="text" value="${usuario.placaVehi}"  name="placaVehi" id="placaVehi">
                      <br> <br> 
  
                      <h4>Modelo</h4>
                      <input class="fondosG " type="text" value="${usuario.modelo}"  name="modelo" id="modelo">
                      <br><br>
  
                      <h4>Año</h4>
                      <input class="fondosG " type="text" value="${usuario.anno}"  name="anno" id="anno">
                      <br><br>

                      <h4>Marca vehiculo</h4>
                      <input class="fondosG " type="text" value="${usuario.marca_vehiculo}"  name="marca_vehiculo" id="marca_vehiculo">
                      <br><br>
  
                      <h4>Conductor</h4>
                      <input class="fondosG " type="text" value="${usuario.chofer}"  name="chofer" id="chofer">
  
                     
  
        `;
    })
    .catch(function(err) {
      console.log(err);
    });
  

function modificar() {
    let id = localStorage.getItem('id');
    console.log(id);
    var enlace = ("/modificarVehiculo/editar/" + id);
    console.log(enlace);

    let datos = ["placaVehi", "modelo", "anno", 'marca_vehiculo', 'chofer'];
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
