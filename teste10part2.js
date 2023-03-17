let horas = "01:02:30 AM"


  let converter12para24 = (time24) => {
    let [ler, modifier] = time24.split ("AM")
    let [horas, minutos, segundos] = time24.split (":")
    // segundos = segundos.replace('AM', '')
    if(horas >= 12) {
      horas = horas -12;
    }
    if (modifier === "AM") {
      horas = parseInt(horas) + 12
    }

    return `${horas}:${minutos}`
    
  }
  console.log(converter12para24(horas))