/* Calcule o IMC de uma pessoa adulta nas condições a baixo:
Abaixo de 18.5 abaixo do peso
entre 18.5 e 25 peso normal
entre 25 e 30 acima do peso
entre 30 e 40 obeso
acima de 40 obesidade grave */

const peso = 45;
const altura = 1.55;
const imc = peso / Math.pow(altura, 2);

console.log(imc);

//condições:

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade');
} else {
    console.log('Grau de obesidade grave');
}