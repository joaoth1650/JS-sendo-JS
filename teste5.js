function diagonalDifference(arr) {
    var soma = 0;
    var soma1 = 0;
    // soma na diagonal index 0 para que comece na 1linha horizontal e vertical     index<arr.length para tornar a soma infinita enquanto index for menor que o final da arrey ele vai sempre somar em seguida eu defini o quanto ele vai somar, neste caso 1     
    for (let index = 0; index < arr.length; index += 1) {
      soma += arr[index][index];
      
    }
    for (let index = 0; index < arr.length; index++) {
      soma1 += arr[index].reverse()[index];
      console.log(arr[index][index])
    }

    return soma1 - soma;
}