// 10-  Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

function divisivel(numero) {
   let x = false
    if (numero % 3 == 0) {
        let x = true
        console.log(x)
    } else {
        let x = false
        console.log(x)
    }
}

console.log(divisivel(9))