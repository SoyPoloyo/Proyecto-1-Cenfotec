/************************************************************
     Codigo Validacion de Elio
     ****************************************************/
  

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

      let existente;
    
      fetch1 = await fetch("http://localhost:5252/registroUsuarioRutas/recibir", {
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

         fetch2 = await fetch("http://localhost:5252/registroUsuarioRutas/insertar", {
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
    