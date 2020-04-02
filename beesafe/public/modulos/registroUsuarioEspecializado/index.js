


/************************************************************
     Codigo Validacion de Elio
     ****************************************************/
 
     async function enviar() {
      
        let datos = ['nombre', 'apellido', 'edad', 'correo', 'tipoCedula','cedula', 'tipoAsistencia', 'iconoAgregado'];
        let valores = {};
        let aprobado = false;
        regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        for (let dato of datos) {
          valores[dato] = document.getElementById(dato).value;
        }
        for (let i in valores) {
          if (valores[i] == "" || !regexCorreo.test(valores.correo)) {
            swal({
              title: "Registro Incorrecto",
              text: "Debe completar todos los campos",
              icon: "warning",
              button: "Continuar",
            });
            aprobado = false;
            break;
          } else {
            console.log("Enviado");
            aprobado = true;
          }
        }
        console.log(valores.nombre);
   
  
        if (aprobado) {
  
        let existente;
        valores.image = document.getElementById('image').files[0];
        console.log(valores.image)
        console.log(valores);
        fetch1 = await fetch("http://localhost:5252/registroUsuarioEspecializado/recibir", {
        body: JSON.stringify(),
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })   
        .then(function(data) {
          return data.json();
        })
        .then(function(res) {
          console.log(res);
          existente = res[0].correo
        })
        .catch(function(err) {
          console.log(err);
        });
  
        if (existente == valores.correo) { 
  
          swal({
            title: "Registro Incorrecto",
            text: "Usuario ya registrado",
            icon: "warning",
            button: "Continuar",
          });
          
        } else{
          fetch2 = await fetch("http://localhost:5252/registroUsuarioEspecializado/insertar", {
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
      
            swal({
              title: "Registro Correcto",
              text: "Registro Exitoso",
              icon: "success",
              button: "Continuar",
            });
         
  
        }
        
          
        }
      }
      
 


    /************************************************************
     Validacion por Josue
     ****************************************************/

/**function validarNombre(){
    var validacion = true;
    if(document.getElementById("nombre").value==""){
        validacion=false;
        alert("Ingrese su nombre");
    }
    return validacion;
}
function validarApellido(){
    var validacion = true;
    if(document.getElementById("apellido").value==""){
        validacion=false;
        alert("Ingrese su apellido");
    }
    return validacion;
}
function validarEdad(){
    var validacion = true;
    if(document.getElementById("edad").value==""){
        validacion=false;
        alert("Ingrese su edad");
    }
    return validacion;
}
function validarCorreo(){
    var validacion = true;
    if(document.getElementById("correo").value==""){
        validacion=false;
        alert("Ingrese su correo");
    }
    return validacion;
}
function validatipoCedula(){
    var validacion = true;
    if(document.getElementById("tipoCedula").value==""){
        validacion=false;
        alert("Ingrese su tipo de Cedula");
    }
    return validacion;
}
function validarCedula(){
    var validacion = true;
    if(document.getElementById("cedula").value==""){
        validacion=false;
        alert("Ingrese su cedula");
    }
    return validacion;
}
function validarRegistro(){
    if(validarNombre()==true&&validarApellido()==true&&validarEdad()==true&&validarCorreo()==true
    &&validartipoCedula()==true&&validarCedula()==true)
    {
        var data={
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apelido").value,
            edad: document.getElementById("edad").value,
            correo: document.getElementById("correo").value,
            tipoCedula: document.getElementById("tipoCedula").value,
            cedula: document.getElementById("tipoCedula").value
        };
        alert("Formulario enviado exitosamente")
        console.log(data);
        fetch('/api')
    }
    **/
   