let table = document.getElementById("contenidoTablaUsuarios");
let valor = { correo: localStorage.getItem("correo") };
id = localStorage.getItem("id");
contenidoUsuario = document.getElementById("contenidoUsuario");
contenidoBotones = document.getElementById("listadoUsuarios");
usuarioSolicitante = localStorage.getItem("correo");
/* console.log(usuarioSolicitante); */

longitud = parseFloat(localStorage.getItem("longitud"));
latitud = parseFloat(localStorage.getItem("latitud"));
console.log(longitud);
console.log(latitud);

var enlace = ("/listarSiniestroAsistencia/editar/" + id);
console.log(enlace);

async function getSiniestroAsistencia() {
  //valor = { identificador: localStorage.getItem('correo') };

  valor = { id: localStorage.getItem("id") };
  const res = await fetch("/listarSiniestroAsistencia/recibirIndividual", {
    method: "POST",
    body: JSON.stringify(valor),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
} //fin de getTipoAsistencia

llenarDatos();

async function llenarDatos() {
  var siniestroAsistencia = await getSiniestroAsistencia();
  console.log(siniestroAsistencia);

  // los mostramos
  for (var i = 0; i < siniestroAsistencia.length; i++) {
    document.getElementById("tipoAsistencia").value =
      siniestroAsistencia[i].tipoAsistencia;

    document.getElementById("rutaIncidente").value =
      siniestroAsistencia[i].rutaIncidente;

    document.getElementById("categoriaIncidente").value =
      siniestroAsistencia[i].categoriaIncidente;

    document.getElementById("metodoPago").value =
      siniestroAsistencia[i].metodoPago;
      
    document.getElementById("descripcionIncidente").value =
      siniestroAsistencia[i].descripcionIncidente;
       
    document.getElementById("imagenAgregada").src =
    siniestroAsistencia[i].image;

     //los guardamos en variables:

   


  }


 
} //fin



async function buscarIcono() {
  var incidenteSelect = document.getElementById("categoriaIncidente").value;
  var incidente = await getCategoriaIncidente();
  for (i = 0; i < incidente.length; i++) {
    if (incidente[i].nombre == incidenteSelect) {
      var image = incidente[i].image;
      console.log(image);
      return image;
    }
  }
} //fin



 async function enviar() {

  var siniestroAsistencia = await getSiniestroAsistencia();
  for (var i = 0; i < siniestroAsistencia.length; i++) {
   

     //los guardamos en variables:

   var ENVcategoriaIncidente = siniestroAsistencia[i].categoriaIncidente;
  var ENVrutaIncidente= siniestroAsistencia[i].rutaIncidente;
  var ENVdescripcionIncidente= siniestroAsistencia[i].descripcionIncidente; 
  var  ENViconoIncidente= siniestroAsistencia[i].iconoIncidente;
  var ENVimage= siniestroAsistencia[i].image; 
   var ENVlongitud= siniestroAsistencia[i].longitud; 
  var ENVlatitud= siniestroAsistencia[i].latitud; 
  var ENVmetodoPago= siniestroAsistencia[i].metodoPago;
   var ENVtipoAsistencia= siniestroAsistencia[i].tipoAsistencia;
  var ENVusuarioSolicitante= siniestroAsistencia[i].usuarioSolicitante; 
  var  ENVusuarioEspecializado= localStorage.getItem('correo');
  


  }
console.log(ENVlongitud)
valor2 = {
  
  /* 'descripcionIncidente':ENVcategoriaIncidente,
  'rutaIncidente':ENVrutaIncidente,
  'descripcionIncidente':ENVdescripcionIncidente,
  'iconoIncidente':ENViconoIncidente,
  'longitud':ENVlongitud,
  'latitud':ENVlatitud,
  'metodoPago':ENVmetodoPago,
  'tipoAsistencia':ENVtipoAsistencia,
  'usuarioSolicitante':ENVusuarioSolicitante,
  'usuarioEspecializado':localStorage.getItem('correo'), */
  'estado':1,
  /* 'image':ENVimage */

}

 /*  const formData = new FormData();
  formData.append('descripcionIncidente', ENVcategoriaIncidente);
  formData.append('rutaIncidente', ENVrutaIncidente);
  formData.append('descripcionIncidente', ENVdescripcionIncidente);
  formData.append('iconoIncidente', ENViconoIncidente);
  formData.append('longitud', ENVlongitud);
  formData.append('latitud', ENVlatitud);
  formData.append('metodoPago', ENVmetodoPago);
  formData.append('tipoAsistencia', ENVtipoAsistencia);
  formData.append('usuarioSolicitante', ENVusuarioSolicitante);
  formData.append('usuarioEspecializado',ENVusuarioEspecializado);
 
  formData.append('image', ENVimage); */
  console.log({valor2})
  fetch(enlace, {
      method: 'PUT',
      body:JSON.stringify(valor2) ,
  }).then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => console.log('Success:', response));
     
  swal({
      title: "Modificación Correcta",
      text: "Campos completados de manera correcta",
      icon: "success",
      button: "Continuar",
  });

  /* setTimeout(() => {
      window.location.replace(
          "../../listar/listarCategoriaIncidente/index.html"
      )
  }, 2033); */



} //fin de enviar

function mostrarIcono() {
  var longitud = parseFloat(localStorage.getItem("longitud"));
  var latitud = parseFloat(localStorage.getItem("latitud"));
  console.log(longitud);
  console.log(latitud);

  var incidente = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [longitud, latitud],
        },
        properties: {
          title: "Incidente",
          description: "Incidente Reportado",
        },
      },
    ],
  };

  // add markers to map
  incidente.features.forEach(function (marker) {
    var el = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", "../../../assets/img/mapbox-icon.png");
    image.classList.add("icon");
    el.appendChild(image);
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  });
} //fin de mostrarIcono
