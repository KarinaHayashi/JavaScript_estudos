/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela a baixo
Média = (nota1 + nota2 + nota3) / 3;

Classificação:
Média menor que 5, reprovação
Média entre 5 e 7, recuperação
Média a cima de 7, passou de semestre
*/


const nota1 = 8;
const nota2 = 9;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Precisa estudar mais, o aluno reprovou');
} else if (media >= 5 && media <= 7 ) {
    console.log('Precisa esudar mais, o aluno esta de recupeação');
} else {
    console.log('Parabéns pelo seu esfoço, você passou de ano');
}

