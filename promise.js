let aceitar = true

console.log('pedir uber')
const promessa = new Promise ((resolve, reject) => {
  if (aceitar){
  return resolve('Pedido aceito')
} else {
  return reject('Pedido negado')
}
})

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizado'));

console.log('aguardando')

