let preco = 60;
let avista = 0;
let parcela = 3;
const dezporcento = preco * 0.1

avista = preco - dezporcento 

parcela = (preco / parcela)

console.log ('Temos duas formas de pagamento, avista ou parcelado')


console.log ('O valor total deste produto é: R$' + preco + ',00')

console.log('O valor á vista tem desconto de 10% então você pagara: R$' + avista + ',00')

console.log ('O valor parcelado em 3x é: R$' + parcela + ',00')
