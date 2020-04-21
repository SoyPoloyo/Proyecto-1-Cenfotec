function registro() {
    let datos = ["ruta", "asistencia", "tipoSiniestro","descripcion"];
    let valores = {};
    let aprobado = false;

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
            aprobado = true;
        }
    }


    }
        const formData = new FormData();
        formData.append('rutas', document.getElementById('ruta').value);
        formData.append('asistencia', document.getElementById('asistencia').value);
        formData.append('tipoAsistencia', document.getElementById('tipoSiniestro').value);
        formData.append('descripcion', document.getElementById('descripcion').value);

        
        fetch('/reporteSiniestro/insertar', {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success:', response));

      
  
