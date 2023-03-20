function birthdayCakeCandles(candles) {
  // Write your code here
   let maiorVela = 0;
   let conta = 0;

   candles.sort((a, b) => b - a)
   maiorVela = candles[0]

   for (let index = 0; index < candles.length; index++) {
    if (maiorVela <= candles[index]) {
        conta += 1
    }
   }
    return conta
}
  console.log(birthdayCakeCandles([9 ,4 ,3 ,6 , 1999 ,1999, 34]))