/* 1 Crie uma class para representar carros 
Os carros possuem uma marca, uma cor e um gasto médio de combustivél por km rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos de o valor de gasto em reais para realizar esse percurso*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor ( marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat', 'prata',1/12);

console.log(uno.calcularGastoDePercurso(70,5));