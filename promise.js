// let aceitar = true

// console.log('pedir uber')
// const promessa = new Promise ((resolve, reject) => {
//   if (aceitar){
//   return resolve('Pedido aceito')
// } else {
//   return reject('Pedido negado')
// }
// })

// promessa
// .then(result => console.log(result))
// .catch(erro => console.log(erro))
// .finally(() => console.log('finalizado'));

// console.log('aguardando')

fetch ('https://api.github.com/users/joaoth1650')
 .then(response => response.json())
 .then (data =>  fetch(data.repos_url))
 .then( res =>res.json())
 .then( d => console.log(d))
 .catch(err => console.log(err))