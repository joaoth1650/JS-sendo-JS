// function timeConversion(s) {
//   // Write your code here
//   s.split('')
//   let horas = parseInt(s[0] + s[1])
//   let minutos = s[3] + s[4] + s[5] + s[6] + s[7];
//   let ampm = s[s.length - 2]
//   if (horas <= 12 && ampm == 'P') {
//     horas = horas + 12
//   } else {
//     return (`0${horas}:${minutos}`)
//   }
//   return (`${horas}:${minutos}`)
// }


      // function mordena
const converterHoras = (s) => {
    let split = s.replace('PM', '').replace('AM', '').split(':');
    if(s.includes('PM')){
      split[0] = (split[0] === '12') ? 12 : parseInt(split[0]) + 12;
    }else{
      //ternario
      split[0] = (split[0] === '12') ? 0 : parseInt(split[0]);
    }
    return split.map(
      x => String(x).length === 1 ? '0'+x : x 
    ).join(':'); 
}


//  console.log('final',timeConversion('11:40:33AM'))
//  console.log('final',timeConversion('04:40:33PM'))

 console.log('converterHoras',converterHoras('11:40:33AM'))
 console.log('converterHoras',converterHoras('04:40:33PM'))
 console.log('converterHoras',converterHoras('12:40:33PM'))
 console.log('converterHoras',converterHoras('12:45:54PM'), '12:45:54')
 console.log('converterHoras',converterHoras('12:05:39AM'), '00:05:39')