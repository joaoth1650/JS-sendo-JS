function miniMaxSum(arr) {
  // Write your code here
    // os 0(zero) estao entre conchetes pois a questao pedia para somar numeros dentro de uma ARRAY 
   let minimo = arr[0];
   let maximo = arr[0];
   let soma =   0;

   for (let index = 0; index < 5; index++) {
      
    // nessa array de baixo estou pegando o menor numero por exemplo se o maximo é menor que o arr em questao, entao o maximo ira acatar um novo numero para mais pra frente ser subtraido pela soma total de todos os numeros do arr e assim descubro qual o maior RESULTADO que posso alcançar no arr em questao 
      if (arr[index] < maximo){
        maximo = arr[index]
      } 
    // a mesma exata coisa esta acontecendo aqui, porem a variavel MINIMO esta acatando o maior numero 
      else if (arr[index] > minimo) {
        minimo = arr[index] 
      }
    // toda vez que o loop roda 1 index(posicao) dentro da array a soma se acrescenta +1 
      soma += arr[index]
   }
   let sominha = soma - minimo
   let somona = soma - maximo
   console.log(sominha + " " + somona);
}
