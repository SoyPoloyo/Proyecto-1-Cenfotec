function validarNombre(){
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
}