
function registro() {
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
}