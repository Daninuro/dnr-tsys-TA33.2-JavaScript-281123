function main() {
  const tamañoArrayTexto = prompt("--¿Qué tamaño quieres que tenga el Array?--");
  const tamañoArray = parseInt(tamañoArrayTexto);
  const num = new Array(tamañoArray);

  rellenarNumsAleatoriosArray(num, 0, 9);
  mostrarArrayySuma(num);
}

function rellenarNumsAleatoriosArray(lista, valorMinimo, valorMaximo) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
  }
}

function mostrarArrayySuma(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`En la posición - ${i} - está el valor: ${lista[i]}`);
  }

  const sum = lista.reduce((acc, num) => acc + num, 0);
  console.log(`La suma de los valores del array es = ${sum}`);
}