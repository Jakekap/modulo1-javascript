function simularOperacionAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;

      if (exito) {
        const resultado = "¡Operación exitosa!";
        resolve(resultado);
      } else {
        const error = new Error("La operación ha fallado");
        reject(error);
      }
    }, 2000);
  });
}
document
  .getElementById("ejecutarOperacion")
  .addEventListener("click", async () => {
    try {
      const resultado = await simularOperacionAsincronica();
      document.getElementById(
        "resultados"
      ).innerText = `Resultado: ${resultado}`;
    } catch (error) {
      document.getElementById(
        "resultados"
      ).innerText = `Error: ${error.message}`;
    }
  });
