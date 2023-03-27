let family = {
  receita: [2000, 1500, 500, 6000],
  despesas: [2000, 800, 1400, 3000]
}

function somar(array) {
  let total = 0;

  for(let valor of array) {
    total += valor
  }

  return total;
}

function equilibrioDeCalculo () {
  const calcularReceita = somar(family.receita)
  const calcularDespesa = somar(family.despesas)

  const total = calcularReceita - calcularDespesa;
  const itsOk = total >= 0

  let equilibrioDeText = "negativo"

  if (itsOk) {
    equilibrioDeText = "positivo"
  }

  console.log(`Seu saldo é ${equilibrioDeText}: ${total} Reais`)
}

equilibrioDeCalculo()





















// let family = {
//   receitas:  [2500, 1000, 1000],
//   despesas: [1000, 1000, 1000]
// }
//   let receitaTotal = 0;
//   let despesaTotal = 0;
//   let resultado = 0;

// function familyDimDim(receitas, despesas) {
//     receitaTotal = receitas[0] + receitas[1] + receitas[2] //4000
//     despesaTotal = despesas[0] + despesas[1] + despesas[2] //2300

//     resultado = receitaTotal - despesaTotal; //1700
//     if (despesaTotal > receitaTotal) {
//       console.log('A familia esta pobre :(')
//     } else {
//       return resultado;
//     }
// }
// console.log(familyDimDim(family.receitas,family.despesas))