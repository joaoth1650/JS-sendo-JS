function aVeryBigSum(ar) {
  let soma = 0;
    //a baixo eu começo com index = 0 pois preciso nao ter nada no começo logo em seguida vemos que enquanto index < que arrey.infito; index ira acrescentar 1 a si mesmo até que ele seja maior que arrey.length
  for (let index = 0; index < ar.length; index += 1) {
    soma = soma + ar[index];
    // a cima o (for) esta pegando o arrey(lista) na posiçao (index) que no primeiro loop é o primeiro item da arrey [0, 1, 2, 3] em seguida o (soma) ira receber o valor (index[0])
  }
 return soma;
}
console.log(aVeryBigSum([10, 20, 30, 40, 50]))
