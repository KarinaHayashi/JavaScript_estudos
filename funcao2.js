function escreverMeuNome(nome) {
    return'Meu nome é ' + nome;
}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Karina') + ', sou é responsavel pelos meus atos');
    } else {
        console.log(', ainda sou jovem de mais para responder pelos seus atos');
    }
}

verificarIdade(20);
