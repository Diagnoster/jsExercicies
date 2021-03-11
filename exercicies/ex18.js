/* 18 - Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function numExtenso(numero) {
    switch (numero) {
        case 1: {
            return "Número um";
        }
        case 2: {
            return "Número dois";
        }
        case 3: {
            return "Número três";
        }
        case 4: {
            return "Número quatro";
        }
        case 5: {
            return "Número cinco";
        }
        case 6: {
            return "Número seis";
        }
        case 7: {
            return "Número sete";
        }
        case 8: {
            return "Número oito";
        }
        case 9: {
            return "Número nove";
        }
        case 10: {
            return "Número dez";
        }
        default: {
            return "Número fora do intervalo!"
        }
    }
}

console.log(numExtenso(1))
console.log(numExtenso(2))
console.log(numExtenso(3))
console.log(numExtenso(4))
console.log(numExtenso(5))
console.log(numExtenso(6))
console.log(numExtenso(7))
console.log(numExtenso(8))
console.log(numExtenso(9))
console.log(numExtenso(10))
console.log(numExtenso(56))


