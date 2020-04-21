let table = document.getElementById("contenidoTablaUsuarios");
let valor = { correo: localStorage.getItem('correo') };

async function postListarUsuario() {
  const res = await fetch('/listarUsuario/recibir', {
      method: 'POST',
      body: JSON.stringify(valor),
      headers: {
          "Content-Type": "application/json"
      }
  });
  const data = await res.json();
  return data;
}//fin

 


document.addEventListener("DOMContentLoaded", async function renderListarUsuario() {

  let listarUsuario = await postListarUsuario();
  console.log(listarUsuario);

  for (let i = 0; i < listarUsuario.length; i++) {

    let tr = document.createElement("tr");

    //nombre
    let td_nombre = document.createElement("td");
    let texto_nombre = document.createTextNode
      (listarUsuario[i].nombre);
    td_nombre.appendChild(texto_nombre);
    tr.appendChild(td_nombre);
    table.appendChild(tr);

    //apellido
    let td_apellido = document.createElement("td");
    let texto_apellido = document.createTextNode
      (listarUsuario[i].apellido);
    td_apellido.appendChild(texto_apellido);
    tr.appendChild(td_apellido);
    table.appendChild(tr);

    //edad
    let td_edad = document.createElement("td");
    let texto_edad = document.createTextNode
      (listarUsuario[i].edad);
    td_edad.appendChild(texto_edad);
    tr.appendChild(td_edad);
    table.appendChild(tr);

    //cedula
    let td_cedula = document.createElement("td");
    let texto_cedula = document.createTextNode
      (listarUsuario[i].cedula);
    td_cedula.appendChild(texto_cedula);
    tr.appendChild(td_cedula);
    table.appendChild(tr);

     //correo
     let td_correo = document.createElement("td");
     let texto_correo = document.createTextNode
       (listarUsuario[i].correo);
     td_correo.appendChild(texto_correo);
     tr.appendChild(td_correo);
     table.appendChild(tr);

    //modificar
    let td_modificar = document.createElement("td");
    let anchor_modificar = document.createElement("a");
    anchor_modificar.classList.add("iconoEditarBorrar");

    let image_modificar = document.createElement("img");
    image_modificar.setAttribute("src", "../../../assets/img/edit.png");
    anchor_modificar.appendChild(image_modificar);

    anchor_modificar.addEventListener('click', () => {
      localStorage.setItem('id', listarUsuario[i]._id);
      window.location.href = '../../modificar/modificarUsuarioClasico/index.html';
    });

    td_modificar.appendChild(anchor_modificar);
    tr.appendChild(td_modificar);
    table.appendChild(tr);

    

  }//fin de for

}); //fin de renderListarUsuario
