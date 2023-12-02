function sumaFuncion(a, b) {
  return a + b;
}

const sumaArrowFunction = (a, b) => a + b;

const num1 = 10;
const num2 = 5;

console.log("Usando la función tradicional:", sumaFuncion(num1, num2));
console.log("Usando la función flecha:", sumaArrowFunction(num1, num2));
