function main() {
  const numeroTexto = prompt("Escriba un número ");
  const numero = parseInt(numeroTexto);

  const resultado = convertirDecimalABinario(numero);

  alert("El resultado es: " + resultado);
}

function convertirDecimalABinario(numero) {
  let binario = 0;
  let base = 10;
  let exponente = 0;

  while (numero > 0) {
    const digitoBinario = numero % 2;
    binario = digitoBinario * Math.pow(base, exponente) + binario;
    exponente++;
    numero = Math.floor(numero / 2);
  }

  return binario;
}