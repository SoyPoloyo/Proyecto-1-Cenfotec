let deck = [];
const tipos = ['C','D','H','S'];

const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {

        for (var tipo of tipos) {
            deck.push(i+tipo);
        }        
    }
    console.log(deck);

    let datos = ['quemacocos'];
    let valores = {}; 
    let aprobado = false;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    datos.push('hola');
    console.log(valores)
    console.log

    for (let dato of datos) {         
        valores[dato] = document.getElementById('caracteristica').value;
    }
    for (let i in valores) {
      
       if(valores[i] == "" || !regexCorreo.test(valores.correo) ){
           alert("Debe llenar todos los campos de manera correcta");
           aprobado= false;
           break
       }
       else{
     (console.log("Enviado"))
     aprobado = true
    }       
    }
}

crearDeck();

function agregarCaracteristica () {   

    let datos = [quemacocos, 'quemacocos'];
    let valores = {}; 
    let aprobado = false;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    datos.push({recibido});
    console.log(valores)
    console.log

    for (let dato of datos) {         
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores) {
      
       if(valores[i] == "" || !regexCorreo.test(valores.correo) ){
           alert("Debe llenar todos los campos de manera correcta");
           aprobado= false;
           break
       }
       else{
     (console.log("Enviado"))
     aprobado = true
    }       
    }

}