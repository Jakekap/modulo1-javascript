const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const campoEntrada = document.getElementById("campoEntrada");
  const datoIngresado = campoEntrada.value.trim();
  if (datoIngresado === "") {
    alert("Por favor, ingrese un dato válido.");
  } else {
    console.log({ dato: datoIngresado });
    alert("Formulario correctamente diligenciado");
  }
});
