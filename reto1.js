let imc = function(peso, altura) {
    return peso / (altura * altura);
}

const weight = prompt("Ingrese su peso");
const height = prompt("Ingrese su altura");
let yourImc = imc(weight, height);
alert(`Su IMC es: ${yourImc}`)