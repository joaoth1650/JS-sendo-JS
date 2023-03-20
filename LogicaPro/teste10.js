function timeConversion(s) {
  // Write your code here
   s.split('');
   let horas = parseInt(s[0] + s[1])
   let minutos = s[3] + s[4]
   let segundos = s[6] + s[7]
   let ampm = s[s.length - 2]
   
   if (horas >= 12 && ampm == 'A'){
      horas = horas -12
   } else if (horas < 12 && ampm == 'P'){
      horas = horas + 12
   }
   
   if (horas < 10) {
      return (`0${horas}:${minutos}:${segundos}`)
   } else {
      return (`${horas}:${minutos}:${segundos}`)
   }
   
}
 console.log('final',timeConversion('04:40:33AM'))
 console.log('final',timeConversion('04:40:33PM'))

   // let horas = parseint();
   // let minutos = 0;
   // let segundos = 0;
   // let ampm = s.length - 2;

   // if (ampm === A ) {

   // }
      
   // if (segundos == 3) {
   //    horas += 12
   // }
   // console.log(horas, minutos, segundos)