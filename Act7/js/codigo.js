function main() {
  const cantidadEurosTexto = prompt("Escriba la cantidad de '€' que quiere cambiar ");
  const cantidadEuros = parseFloat(cantidadEurosTexto);

  const divisa = prompt("A qué divisa quiere hacer el cambio?\nLibras\nDólares\nYenes").toLowerCase();

  switch (divisa) {
    case "libras":
      const libras = cambioMonedaLibra(cantidadEuros);
      alert(`${cantidadEuros}€ son ${libras.toFixed(2)} Libras`);
      break;

    case "dolares":
      const dolares = cambioMonedaDolar(cantidadEuros);
      alert(`${cantidadEuros}€ son ${dolares.toFixed(2)} Dólares`);
      break;

    case "yenes":
      const yenes = cambioMonedaYen(cantidadEuros);
      alert(`${cantidadEuros}€ son ${yenes.toFixed(2)} Yenes`);
      break;

    default:
      alert("DIVISA INCORRECTA");
  }
}

function cambioMonedaLibra(euros) {
  return euros * 0.86;
}

function cambioMonedaDolar(euros) {
  return euros * 1.28611;
}

function cambioMonedaYen(euros) {
  return euros * 129.852;
}

main();
