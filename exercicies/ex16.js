/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores */

function calculadora(n1, n2, option) {
    var option
    switch(option) {
        case "soma": {
            console.log(n1 + n2)
            break
        }
        case "subtração": {
            console.log(n1 - n2)
            break
        }
        case "multiplicação": {
            console.log(n1 * n2)
        }
        case "divisão": {
            console.log(n1 / n2)
        }
        default: {
            console.log("Calculo inválido!")
        }
    }
}

console.log(calculadora(2,5,"divisão"))
console.log(calculadora(2,5,"soma"))
console.log(calculadora(2,5,"subtração"))
console.log(calculadora(2,5,"multiplicação"))