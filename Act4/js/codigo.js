function main() {
    const numeroTexto = prompt("Escriba un número ");
    const numero = parseInt(numeroTexto);

    const resultado = operacionFactorial(numero);

    alert("El resultado es: " + resultado);
}

function operacionFactorial(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++) {
      fact = fact * i;
    }

    return fact;
}