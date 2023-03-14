function staircase(n) {
  // Write your code here

  for (let index = 1; index <= n.length; index++){
      let linha = ''
  for (let under = 1; under <= n.length; under++){
    if (under <= n - index){
      linha += ' '
    } 
    else {
      linha += '*'
    }
    }
  }
   console.log(a);
}



// for (let i = 1; i <= n; i++) {
//   let row = '';
//   for (let j = 1; j <= n; j++) {
//     if (j <= n - i) {
//       row += ' ';
//     } else {
//       row += '*';
//     }
//   }
//   console.log(row);
// }