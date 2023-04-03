// alterando estilos
//classlist 

/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
     .active{
      color :antiquewhite
     }

     .green {
      background-color :rgb(212, 117, 0)
     }
  </style>
</head>
<body>  

  <header> 
    <h1>Hello world!</h1>
  </header>

  <input type="text" value="Hello world!">
</body>
<script src="estilos.js"></script>
</html>
*/

const element = document.querySelector('body')
// element.style.backgroundColor = '#F9f3d2' // para colocar um atributo de estilo 
// console.log(element.style.backgroundColor) // para saber em rgb 
element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active') // se nao tiver a tal classe ele ira adicionar, se ja tiver ele ira remover 