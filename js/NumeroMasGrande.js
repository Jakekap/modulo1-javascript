const numeros = [7, 15, 3, 22, 8, 10, 5];

function findLargest(lista) {
  let numeroMasGrande = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > numeroMasGrande) {
      numeroMasGrande = lista[i];
    }
  }

  return numeroMasGrande;
}

console.log("El número más grande es:", findLargest(numeros));
