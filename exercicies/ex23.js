/* 23- Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function approved(exam1, exam2, exam3) {
    average = exam1 + exam2 + exam3 / 3;
    if (average >= 5) {
        return "APROVADO"
    } else {
        return "REPROVADO"
    }
}

console.log(approved(4,3,3))
console.log(approved(1,1,1))
console.log(approved(4,2,3))
console.log(approved(0,0,0))