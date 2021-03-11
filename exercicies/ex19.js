/* 19 - O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente */

function cardapio(item, quantidade) {
    switch(item) {
        case 100: {
            return "Você comprou " + quantidade + " cachorro(s) quente(s)" + " e custou o total de" + " R$" + 3 * quantidade
        }
        case 200: {
            return "Você comprou " + quantidade + " Hambúrguer(es) Simples" + " e custou o total de" + " R$" + 4 * quantidade
        }
        case 300: {
            return "Você comprou " + quantidade + " Cheeseburguer(es)" + " e custou o total de" + " R$" + 5.50 * quantidade
        }
        case 400: {
            return "Você comprou " + quantidade + " Bauru(s)" + " e custou o total de" + " R$" + 7.50 * quantidade
        }
        case 500: {
            return "Você comprou " + quantidade + " Refrigerante(s)" + " e custou o total de" + " R$" + 3.50 * quantidade
        }
        case 600: {
            return "Você comprou " + quantidade + " Suco(s)" + " e custou o total de" + " R$" + 2.80 * quantidade
        }
        default: {
            return "O produto não existe!"
        }
    }
}

console.log(cardapio(100, 3))
console.log(cardapio(200, 2))
console.log(cardapio(300, 5))
console.log(cardapio(400, 6))
console.log(cardapio(500, 1))
console.log(cardapio(600, 6))
console.log(cardapio(1500, 90))

