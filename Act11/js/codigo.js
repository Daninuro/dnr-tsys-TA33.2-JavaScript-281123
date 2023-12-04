function main() {
  const tamañoTexto = prompt("\n --- Introduce un tamaño de array --- \n");
  const tamaño = parseInt(tamañoTexto);

  let array1 = new Array(tamaño);
  let array2;

  rellenarNumAleatorioArray(array1, 0, 100);

  array2 = [...array1];

  array1 = new Array(tamaño);

  rellenarNumAleatorioArray(array1, 0, 100);

  const arrayResultante = multiplicador(array1, array2);

  console.log("\n --- Array1 --- \n");
  mostrarArray(array1);

  console.log("\n --- Array2 --- \n");
  mostrarArray(array2);

  console.log("\n --- Array resultante de multiplicar 'Array 1' y 'Array 2' ---\n");
  mostrarArray(arrayResultante);
}

function rellenarNumAleatorioArray(lista, valorMinimo, valorMaximo) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
  }
}

function mostrarArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`En la posición - ${i} - está el valor: ${lista[i]}`);
  }
}

function multiplicador(array1, array2) {
  const arrayResultante = new Array(array1.length);
  for (let i = 0; i < array1.length; i++) {
    arrayResultante[i] = array1[i] * array2[i];
  }
  return arrayResultante;
}

