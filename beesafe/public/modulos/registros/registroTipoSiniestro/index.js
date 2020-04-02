
/*function registro() {
    var aprobado = false;
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var imageNombre = document.getElementById('image').value;
    var image = document.getElementById('image').files; //enviar image como .files 

    //console.log(typeof imageNombre);

    if (nombre == "" && descripcion == "" && imageNombre == "") 
        alert("Debe completar todos los campos de manera correcta");
    else aprobado = true;

    if (aprobado) {
        const formData = new FormData();  //envio el archivo como formData,como obj tambien se puede me imagino
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('image', image[0]); //imagen poner siempre el [0] 

        fetch('/registroTipoSiniestro/insertar', {
            method: 'POST',
            body: formData,  //necesitar poner el formData que acabas de crear 
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success:', response));
    }
}*/
function subirImagen() {
    
    console.dir(document.getElementById('imagenAgregada'));
      var archivo = document.getElementById("image").files[0];
      var reader = new FileReader();
      if (image) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
          document.getElementById("imagenAgregada").src = reader.result;
          document.getElementById("imagenAgregada").classList.add('imagen_subida');
      }
    }

    document.getElementById('muestraIcono').remove();
  }
  
function registro(){
    let datos = ["nombre","descripcion","image"];
    let valores = {};
    let aprobado = false;

    for (let dato of datos) {
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores) {
        if (valores[i] == "" ) {
            alert("Debe llenar todos los campos de manera correcta");
            aprobado = false;
            break;
        } else {
            aprobado = true;
        }
    }
    if(aprobado){
        const formData = new FormData();
        formData.append('nombre', document.getElementById('nombre').value);
        formData.append('descripcion', document.getElementById('descripcion').value);
        formData.append('image', document.getElementById('image').files[0]);

        fetch('/registroTipoSiniestro/insertar', {
            method: 'POST',
            body: formData, 
        }).then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => console.log('Success:', response));
    
    }

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

mostrar();



