

/*const numero = 13;
const numeroPar = numero % 2 === 0; // isso significa que se o resto da divisão é igual a zero o restltado é par

console.log(numeroPar);

if (numeroPar) {
    console.log('par')
} else {
    console.log('impar')
}

= é para atribuição (igualdade)
== também
===  para comparar alguma coisa em igualdade

Faça um progrma para alclaovalore m viagem

Vocêerá cci variaveis sendo elas:
1 - peço oetanol;
2 - Preço da gasolina;
3 - o tipo do combustivel do seu carro
4 - Gasto médio de comutivel por km
5 - distanaem km da viagem

Imprima no console o valor que erá gsto pararalzar esta viagem */

const precoEtanol = 5.79;
const precoGaolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else { 
    const valorGasto = litrosConsumidos * precoGaolina;
    console.log(valorGasto.toFixed(2));
}
