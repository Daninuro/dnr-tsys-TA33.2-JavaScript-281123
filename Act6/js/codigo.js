function main() {
  const numeroTexto = prompt("Escriba un número ");
  const numero = parseInt(numeroTexto);

  contarNumCifrasPositivo(numero);
}

function contarNumCifrasPositivo(numero) {
  let cantidad = 0;
  let temp = numero;

  if (numero > 0) {
    while (temp > 0) {
      temp = Math.floor(temp / 10);
      cantidad++;
    }
    alert(numero + " tiene " + cantidad + " dígitos");
  } else {
    alert("Error, el número debe tener un valor positivo");
  }
}