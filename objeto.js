// é uma coleção de dinamica de chave e valor

class Pessoa {
    nome;
    idade;

    consuctor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        consolg('Meu nome é ${this.nome} e minha idade é ${this.idade}')
    }

}
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guera';
vitor.idade = 25;

const Maria = new Pessoa();
Maria.nome = 'Maria Joaquina';
Maria.idade = 80;

console.log(vitor);
console.log(Maria);




