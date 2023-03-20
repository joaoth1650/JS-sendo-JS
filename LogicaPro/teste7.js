function staircase(n) {
  // Write your code here
    let simbolo ='_';
    let espacolinha = '';
    let posicao = n - 1;

    for (let indexlinha = 0; indexlinha < n; indexlinha += 1) {
      for (let indexcoluna = 0; indexcoluna < n; indexcoluna += 1){
         if (indexcoluna < posicao){
          espacolinha += '#';
         } 
         else {
          espacolinha += simbolo;
         }
      } 
      console.log(espacolinha);
      espacolinha = '';
      posicao -= 1; 
    }
}
 staircase(3)



  //     let linha = ''
  // for (let index = 0; index <= n; index++){
  // for (let under = 0; under <= n; under++){
  //   if (under <= n - index){
  //     linha += ' '
  //   } 
  //   else {
  //     linha += '*'
  //   }
  //   }
  // }
  //  console.log(linha);