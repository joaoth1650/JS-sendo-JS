function converter12para24(h) {

  h.split('');
  let horas = parseInt(h[0] + h[1])
  let minutos = h[3] + h[4] + h[5] + h[6] + h[7]

  if(horas < 12) {
      horas = horas + 12;
    } else if(horas == 12) {
      horas = horas - 12
    }
  if (horas < 10) {
      return (`0${horas}:${minutos}`)
   }
  else {
      return (`${horas}:${minutos}`)
   }
}
  console.log(converter12para24('04:30:59AM'))


       // == PARA COMPARAR
      // = PARA ACRESCENTAR VALOR