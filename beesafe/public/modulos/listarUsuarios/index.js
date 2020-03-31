function probando() {
  fetch("http://localhost:5252/registroUsuarioClasico/recibir", {
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
      console.log();

      console.log("segundo then");

      console.log(res.length)
      console.log(res[1])
      let objeto = {}
      objeto = res;
      console.log(objeto)
     
      document.getElementById("prueba").innerHTML = res[2].tipoUsuario;
    })
    .catch(function(err) {
      console.log(err);
    });

}
probando();
