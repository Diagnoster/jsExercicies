function calcFatorial(numero) {
    var resultado=1;

  for(var count=1 ; count<=numero ; count++){
   resultado *= count;
   console.log(resultado)
  }


}

console.log(calcFatorial(5))