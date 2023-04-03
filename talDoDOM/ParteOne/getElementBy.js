/// get element by ID  (element)
console.log(document.getElementById('titulo-blog'))


/// get elements by class name (htmlColection) nao funciona FOREACH

const element = document.getElementsByClassName('one');
console.log(element);

/// get elements by tag name (htmlColection) nao funciona FOREACH

const elemento = document.getElementsByTagName('meta')
console.log(elemento)

/// query selector (element)

const elementi = document.querySelector('[src]')
console.log(elementi)

/// query selector all (nodelist) funciona FOREACH

const elements = document.querySelectorAll('.owmeudeus')
console.log(elements)



