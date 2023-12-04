function main() {
  const tamañoArrayTexto = prompt("--Introduce el tamaño del array--");
  const tamañoArray = parseInt(tamañoArrayTexto);
  const num = new Array(tamañoArray);

  rellenarNumPrimosAleatorioArray(num, 1, 100);
  mostrarArray(num);

  const primoMayor = numMayorPrimo(num);
  console.log("El primo más grande es el " + primoMayor);
}

function rellenarNumPrimosAleatorioArray(lista, valorMinimo, valorMaximo) {
  let i = 0;

  while (i < lista.length) {
    const num = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
    if (esPrimo(num)) {
      lista[i] = num;
      i++;
    }
  }
}

function esPrimo(numero) {
  if (numero <= 0 || numero === 1 || numero === 4) {
    return false;
  }
  for (let i = 2; i <= Math.floor(numero / 2); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function mostrarArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`En la posición - ${i} - está el valor: ${lista[i]}`);
  }
}

function numMayorPrimo(lista) {
  let numMayor = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > numMayor) {
      numMayor = lista[i];
    }
  }
  return numMayor;
}