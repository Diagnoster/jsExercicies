/* 08- Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). 
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/
function resultGame() {
    let result = [30, 25, 40, 32, 45, 39, 41]
    var maior = 0;
    var menor = 100;
    var melhorou = 0;
    for (var i = 0; i < result.length; i++) {
        if (result[i] < menor) {
            menor = result[i];
        }
        if (result[i] > maior) {
            melhorou = melhorou + 1
            maior = result[i];
        }
    }
    melhorou = melhorou - 1;
    console.log("Pior desempenho: " + menor + " pontos!")
    console.log("Melhorou sua pontuação " + melhorou + " vez(es)")
    var melhorPior = [melhorou, menor]
    console.log(results)

}

console.log(resultGame())
