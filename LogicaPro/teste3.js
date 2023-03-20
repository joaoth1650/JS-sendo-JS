function compareTriplets(a, b) {

  var alice = 0
  var bob = 0
    //index seria a posição. Somente o (a) esta classificado no (for) pois estamos comparando a mesma posição de ambas arrays. Length é para definir o tamanho indefinido ainda kkk//
  for (let index = 0; index < a.length; index += 1) {
   if (a[index] > b[index]) {
      alice += 1
    }
   else if (a[index] < b[index]) {
      bob += 1
    }
  }
    return [alice, bob]
}
console.log(compareTriplets([33, 44, 56],[20, 44,90]))