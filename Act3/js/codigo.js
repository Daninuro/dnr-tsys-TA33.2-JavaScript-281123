function main() {
    const numeroTexto = prompt("Escriba un número ");
    const numero = parseInt(numeroTexto);

    const esPrimo = validarNumeroPrimo(numero);

    alert(esPrimo ? "El número SI es primo" : "El número NO es primo");
}

function validarNumeroPrimo(x) {
    let primo = true;

    for (let contador = 2; contador < x; contador++) {
    if (x % contador === 0) {
        primo = false;
        break;
    }
    }

    return primo;
}