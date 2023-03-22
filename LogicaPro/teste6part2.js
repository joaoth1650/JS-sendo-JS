function plusMinus(arr) {
  // Write your code here
    let positivo = 0;
    let negativo = 0;
    let zero = 0;

    // positivo = positivo / arr.length 
    // negativo = negativo / arr.length
    // zero = zero / arr.length

   for (let index = 0; index < arr.length; index += 1) {
    
    if (arr[index] > 0 ){
      positivo += 1
    } 
    else if ( arr[index] < 0){
      negativo += 1
    } 
    else {
      zero += 1
    }
  }
  let positivo_porcentagem = (positivo / arr.length).toFixed(6)
  let negativo_porcentagem = (negativo / arr.length).toFixed(6)
  let zero_porcentagem = (zero / arr.length).toFixed(6)
  return [positivo_porcentagem, negativo_porcentagem, zero_porcentagem]
  // console.log((positivo / arr.length).toFixed(6))
  // console.log((negativo / arr.length).toFixed(6))
  // console.log((zero / arr.length).toFixed(6))
}

 let resultado = plusMinus( [1, 1, 0, -1, -1] );

 console.log(resultado)