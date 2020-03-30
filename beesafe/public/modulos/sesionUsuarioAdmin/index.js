
/************************************************************
     codigo para subir la imagen
     ****************************************************/

    function subirImagen() {
    
        console.dir(document.getElementById('iconoAgregado'));
          var archivo = document.getElementById("botonAgregarImagen").files[0];
          var reader = new FileReader();
          if (botonAgregarImagen) {
            reader.readAsDataURL(archivo);
            reader.onloadend = function () {
              document.getElementById("iconoAgregado").src = reader.result;
              document.getElementById("iconoAgregado").classList.add('imagen_subida');
          }
        }

        document.getElementById('muestraIcono').remove();
      }

      function mostrar(){

        var perro;
    
        fetch('/registroTipoSiniestro/mostrar', {
            body: JSON.stringify(),
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            } 
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response =>   console.log('Success:', response));
    
    
            console.log('esto es abajo');
            console.log(perro);
    }


    function registro(){

        document.getElementById('siniestro').appendChild(hidden);

  
  }
