/************************************************************
     Codigo Validacion de Elio
     ****************************************************/
console.log('estoy en la concsola arriba')
var perro = {};
async function probando (){

    parra = await fetch("http://localhost:5252/registroClasico/recibir", {
  body: JSON.stringify(),
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})   
  .then(function(data) {
    
    console.log('pruebadeconsola')
    perro = data.json;
    return data.json(correo);

  })
  .then(function(res) {
    console.log(res);
    console.log(perro)
  })
  .catch(function(err) {
    console.log(err);
  });

  console.log('2donde estoy')
  console.log(perro.json)
}
probando();

console.log('estoy en al consola abajo');



async function enviar() {
  let datos = ["nombre", "apellido", "edad", "correo", "tipoCedula", "cedula"];
  let valores = {};
  let aprobado = false;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  for (let dato of datos) {
    valores[dato] = document.getElementById(dato).value;
  }
  for (let i in valores) {
    if (valores[i] == "" || !regexCorreo.test(valores.correo)) {
      alert("Debe llenar todos los campos de manera correcta");
      aprobado = false;
      break;
    } else {
      console.log("Enviado");
      aprobado = true;
    }
  }
  console.log(valores.nombre);
  if (aprobado) {
    fechy = await fetch("http://localhost:5252/registroClasico/insertar", {
      body: JSON.stringify(valores),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(data) {
        return data.json();
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });

    alert("Se ha creado su cuenta con exito");
    window.location.href = "index.html";
  }
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
