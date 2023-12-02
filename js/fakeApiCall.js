document
  .getElementById("solicitudGET")
  .addEventListener("click", realizarSolicitudGET);
document
  .getElementById("solicitudPOST")
  .addEventListener("click", realizarSolicitudPOST);

async function realizarSolicitudGET() {
  try {
    const respuesta = await fetch("http://localhost:3000/usuarios");
    const datos = await respuesta.json();
    mostrarResultados(datos);
  } catch (error) {
    console.error("Error al realizar la solicitud GET:", error);
  }
}

async function realizarSolicitudPOST() {
  const nombreUsuario = document.getElementById("nombreUsuario").value;

  if (!nombreUsuario) {
    alert("Por favor, ingrese el nombre del nuevo usuario.");
    return;
  }

  const nuevoUsuario = { nombre: nombreUsuario };

  try {
    const respuesta = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    });

    const datos = await respuesta.json();
    mostrarResultados(datos);
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
  }
}

function mostrarResultados(datos) {
  const resultadosDiv = document.getElementById("users");
  resultadosDiv.innerHTML = "";

  datos.forEach((usuario) => {
    const usuarioDiv = document.createElement("div");
    usuarioDiv.textContent = `ID: ${usuario.id}, Nombre: ${usuario.nombre}`;
    resultadosDiv.appendChild(usuarioDiv);
  });
}
