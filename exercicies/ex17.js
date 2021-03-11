/*17 - Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentoSalario(salario, option) {
    switch(option) {
        case "a": {
            return salario * 1.1
        }
        case "b": {
            return salario * 1.15
        }
        case "c": {
            return salario * 1.2
        }
        default: {
            return 'Opção inválida!!'
        }
    }
}

console.log(aumentoSalario(1500, "a"))
console.log(aumentoSalario(2000, "b"))
console.log(aumentoSalario(5000, "c"))
console.log(aumentoSalario(10000, "x"))