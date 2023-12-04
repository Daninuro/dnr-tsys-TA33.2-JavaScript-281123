function main() {
    var elijeAreaTexto = prompt("--Introduzca qué área quiere calcular--\n    Circulo     Triangulo    Cuadrado");

    switch (elijeAreaTexto.toLowerCase()) {
        case "circulo":
            calculoCirculo();
            break;
        case "triangulo":
            calculoTriangulo();
            break;
        case "cuadrado":
            calculoCuadrado();
            break;
        default:
            alert("Opción no válida");
    }
}

function calculoCirculo() {
    var numRadioTexto = prompt("--Introduzca el valor del radio--");
    var radioNum = parseFloat(numRadioTexto);
    var resultArea = (Math.pow(radioNum, 2) * Math.PI);
    alert("El área del círculo es de: " + Math.round(resultArea * 100.0) / 100.0);
}

function calculoTriangulo() {
    var numBaseTexto = prompt("--Introduzca el valor de la base--");
    var numAlturaTexto = prompt("--Introduzca el valor de la altura--");
    var baseNum = parseFloat(numBaseTexto);
    var alturaNum = parseFloat(numAlturaTexto);
    var resultArea = (baseNum * alturaNum) / 2;
    alert("El área del triángulo es de: " + Math.round(resultArea * 100.0) / 100.0);
}

function calculoCuadrado() {
    var numLadoTexto = prompt("--Introduzca el valor del lado--");
    var ladoNum = parseFloat(numLadoTexto);
    var resultArea = ladoNum * ladoNum;
    alert("El área del cuadrado es de: " + Math.round(resultArea * 100.0) / 100.0);
}

