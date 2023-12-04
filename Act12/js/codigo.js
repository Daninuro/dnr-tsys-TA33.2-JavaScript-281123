function main() {
  const tamañoTexto = prompt("Introduce un tamaño");
  const tamaño = new Array(parseInt(tamañoTexto));

  let ultimoDigito;

  const ultimoDigitoTexto = prompt("Introduce un número entre 0 y 9");
  ultimoDigito = parseInt(ultimoDigitoTexto);

  numAleatorio(tamaño, 1, 300);

  const terminadosEn = numTerminadosEn(tamaño, ultimoDigito);

  console.log("--- Los números generados terminados en " + ultimoDigito + " son ---\n");
  muestraTerminadosEn(terminadosEn);
}

function numAleatorio(lista, valorMinimo, valorMaximo) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
  }
}

function muestraTerminadosEn(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] !== 0) {
      console.log("El número " + lista[i] + " acaba en el número escrito anteriormente");
    }
  }
}

function numTerminadosEn(num, ultimoNumero) {
  const terminadosEn = new Array(num.length);

  for (let i = 0; i < terminadosEn.length; i++) {
    const numeroFinal = num[i] % 10;

    if (numeroFinal === ultimoNumero) {
      terminadosEn[i] = num[i];
    }
  }

  return terminadosEn;
}

main();
