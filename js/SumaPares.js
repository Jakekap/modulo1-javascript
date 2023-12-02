function sumarPares(array) {
  const sumaPares = array.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
      return acumulador + numero;
    } else {
      return acumulador;
    }
  }, 0);

  return sumaPares;
}

const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("La suma de números pares es:", sumarPares(numerosEjemplo));
