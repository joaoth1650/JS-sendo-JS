
function transformTemp(temperatura) {
  //lendo somente o C e/ou F para saber qual grau esta sendo dado 
  const celsius = temperatura.toUpperCase().includes('C')
  const fahrenheit = temperatura.toUpperCase().includes('F')


  //fluxo de erro
  if (!celsius && !fahrenheit) {
    throw new Error ('Grau não identificado')
  }

  //fluxo ideal, F -> C
    //Estou pedindo para ele pegar somente o numero e executar a formula em seguida definindo o tipo de grau que esta sendo lido (faço a carimbagem do tipo de grau no return)
  let atualizandoTemp = Number(temperatura.toUpperCase().replace("F", ""))
  let formula =(fahrenheit) => (fahrenheit - 32) * 5/9
  let tempSinal = 'C'

  //fluxo alternativo, C -> 
  if (celsius) {
     atualizandoTemp = Number(temperatura.toUpperCase().replace("C", ""))
     formula =(celsius) => celsius * 9/5 + 32
     tempSinal = 'F'
  }

  return formula(atualizandoTemp) + tempSinal

}
//lançar (lançando o valor de transformTemp)
try {
  console.log(transformTemp('10C'))
  console.log(transformTemp('50F'))
  transformTemp('50z')
  //pegar/catar(definindo oq ira acontecer quando ocorrer o erro)
} catch (error) {
  console.log(error.message)
}