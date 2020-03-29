
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