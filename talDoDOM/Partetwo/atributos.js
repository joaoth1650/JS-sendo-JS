// Manipulando elementos 
// atributos 
//lembrar do arquivo ATRIBUTOS.js que fizemos

const header = document.querySelector('header') // adicionar atributo
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id')) // posso ou nao pegar o atributo desejado usando getAttribute

header.removeAttribute('id') //remover atributo