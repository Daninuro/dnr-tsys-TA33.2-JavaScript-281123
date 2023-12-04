function main() {
  const tamañoArray = 10;
  const num = new Array(tamañoArray);

  console.log("--Introduce 10 valores para rellenar el Array--");

  rellenarArray(num);
  mostrarArray(num);
}

function rellenarArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    const numTexto = prompt(`Posicion - ${i+1} - Introduce el número:`);
    lista[i] = parseInt(numTexto);
  }
}

function mostrarArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`En la posicion - ${i+1} - está el valor: ${lista[i]}`);
  }
}