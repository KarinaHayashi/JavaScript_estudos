
/* O FOR funciona para percorrer uma quantidade expecifica de vezes 
Primeira parte do for -> let index = 0 <- é a nossa variavel de controle o nosso index
Segunda parte do for -> index < array.length <- é a estruura condicional que retorna um booleano, que vai dizer se entra ou não dentro desse for  
Terceira parte é a condição para saber o que vai alterar no nosso for */

const nome = 'Jotaro Kujo';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}