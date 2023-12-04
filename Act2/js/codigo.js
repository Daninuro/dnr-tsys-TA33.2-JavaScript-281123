

function main() {
    const cantidad = prompt('Introduzca cuántos números aleatorios quiere generar:');
    console.log('--Introduzca entre qué dos números quiere generar--');

    const num1Texto = prompt('Introduce el primer numero:');
    const num2Texto = prompt('Introduce el segundo numero:');

    const numeroMinimo = parseInt(num1Texto);
    const numeroMaximo = parseInt(num2Texto);

    const resultado = generarNumerosAleatorios(cantidad, numeroMaximo, numeroMinimo);

    console.log(resultado);
}


function generarNumerosAleatorios(cantidad, maximo, minimo) {
    let numerosAleatorios = [];

    for (let contador = 1; contador <= cantidad; contador++) {
      let numRandom = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    numerosAleatorios.push(numRandom);
    console.log(numRandom + ', ');
    }

    return numerosAleatorios;
}

