/* Elabore um algoritimoque calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos sa tabela a seguir para ler qual a consição de pagamento escolhida e efetuar o cálculo adequado

Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - A cima de duas vezes, preço norma de etiqueta mais juros de 10%*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log((precoEtiqueta * 0.1) - precoEtiqueta)
} else if (formaDePagamento === 2){
    console.log((precoEtiqueta * 0.15) - precoEtiqueta)
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta)
} else  {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}