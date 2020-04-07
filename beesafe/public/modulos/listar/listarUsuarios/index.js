contenidoTablaUsuarios = document.getElementById("contenidoTablaUsuarios");


console.log("probandoconsola")

function buscar(){

  tipoUsuario = document.getElementById('tipoUsuarios').value
  console.log(tipoUsuario);

  valor = {
    tipoUsuario:tipoUsuario
  }

  fetch("http://localhost:5252/listarUsuarios/recibir", {
    body: JSON.stringify(valor),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function(data) {
      return data.json();
    })
    .then(function(res) {
      let listadoUsuarios = {};
      console.log(tipoUsuario);
      listadoUsuarios = res;
      console.log(res)
      
      contenidoTablaUsuarios.innerHTML ="";
    
      for (let i of listadoUsuarios) {
        //console.log(valor);
        contenidoTablaUsuarios.innerHTML += `
                    <tr>
                       
                        <td>${i.tipoUsuario}</td>
                        <td>${i.nombre}</td>
                        <td>${i.apellido}</td>
                        <td>${i.edad}</td>
                        <td>${i.correo}</td>
                        <td>${i.tipoCedula}</td>
                        <td>${i.cedula}</td>
                        <td>${i.tipoAsistencia}</td>
                    </tr>    
                    `;
      }
  
    })
    .catch(function(err) {
      console.log(err);
    });

}



