document.addEventListener("DOMContentLoaded", function () {
  function cambiarColorFondo() {
    const elementoObjetivo = document.getElementById("elementoObjetivo");
    const colorAleatorio =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    elementoObjetivo.style.backgroundColor = colorAleatorio;
  }

  const cambiarColorBtn = document.getElementById("cambiarColorBtn");

  cambiarColorBtn.addEventListener("click", cambiarColorFondo);
});
