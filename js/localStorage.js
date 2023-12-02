function guardarLocalStorage() {
  const dato = document.getElementById("datoInput").value;
  localStorage.setItem("datoGuardado", dato);
  alert("Dato guardado en localStorage.");
}

function guardarSessionStorage() {
  const dato = document.getElementById("datoInput").value;
  sessionStorage.setItem("datoGuardado", dato);
  alert("Dato guardado en sessionStorage.");
}

function recuperarLocalStorage() {
  const datoRecuperado = localStorage.getItem("datoGuardado");
  if (datoRecuperado) {
    alert("Dato recuperado de localStorage: " + datoRecuperado);
  } else {
    alert("No hay dato almacenado en localStorage.");
  }
}

function recuperarSessionStorage() {
  const datoRecuperado = sessionStorage.getItem("datoGuardado");
  if (datoRecuperado) {
    alert("Dato recuperado de sessionStorage: " + datoRecuperado);
  } else {
    alert("No hay dato almacenado en sessionStorage.");
  }
}
