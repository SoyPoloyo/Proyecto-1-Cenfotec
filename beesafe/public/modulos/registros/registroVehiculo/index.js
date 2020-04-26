

    async function getCaracteristicas() {
      var response = await fetch('/listarCaracteristicasVehiculo/recibir');
      var data = await response.json();
      return data;
    }//fin de getCaracteristicas
    

    llenarCaracteristicas();
    
    async function llenarCaracteristicas() {
    
      var incidente = await getCaracteristicas();
      console.log(incidente);
      var select = document.getElementById('caracteristicasVehiculo');
      console.log(select)
      saltoLinea=0
      for (var i = 0; i < incidente.length; i++) {
    

     if (saltoLinea == 2) {
      select.innerHTML += `                      
      
            `;
        saltoLinea=0
     }

          select.innerHTML += `                      
                          
          <input type="checkbox" id="caracteristica${i}" name="caracteristica${i}" value="${incidente[i].nombre}">
          
          <label for="caracteristica${i}">${incidente[i].nombre}</label>

`;
      
     saltoLinea++
      }
    
    }//fin

    async function gettipovehiculo() {
      var response = await fetch('/listarTipoVehiculo/recibir');
      var data = await response.json();
      return data;
    }//fin de gettipovehiculo
    

    llenarTipoVehiculo();
    
    async function llenarTipoVehiculo() {
    
      var incidente = await gettipovehiculo();
      console.log(incidente);
      var select = document.getElementById('tipo_vehiculo');
      console.log(select)
      saltoLinea=0
      for (var i = 0; i < incidente.length; i++) {
    
        var select = document.getElementById('tipo_vehiculo');
        var option = document.createElement('option');
        option.value = incidente[i].nombre;
        option.text = incidente[i].nombre;
        select.appendChild(option);
      }
    
    }//fin


async function enviar() {
  let datos = ['placaVehi', 'modelo', 'anno', 'marca_vehiculo'];
  let valores = {};
  let aprobado = false;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  for (let dato of datos) {

    valores[dato] = document.getElementById(dato).value;
  }
  for (let i in valores) {
    if (valores[i] == "") {
      swal({
        title: "Registro Incorrecto",
        text: "Debe completar todos los campos de manera correcta",
        icon: "warning",
        button: "Continuar",
      });//josue
      aprobado = false;
      break;
    } else {
      console.log("Enviado");
      aprobado = true;
    }
  }
  console.log(valores.nombre);

  if (aprobado) {

    console.log(valores);
    valores['identificador'] = localStorage.getItem("correo")
    fetch2 = await fetch("http://localhost:5252/registroVehiculo/insertar", {
      body: JSON.stringify(valores),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });

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
}

