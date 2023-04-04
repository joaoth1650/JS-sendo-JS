//definir 
 class Parafuso {
  constructor() {
    if (this.constructor === Parafuso) 
    throw new Error('Classe abstrata nao pode ser instanciada')
  }
  get tipo() {
    throw new Error('Metodo "get tipo()" precisa ser implementado')
  }
}
 class Fenda extends Parafuso {
  constructor() { super() }
  get tipo() {
    return 'fenda'
  }
}
        // extende tudo que herda de Parafuso
 class Philips extends Parafuso {
  constructor() { super() }
        //constructor fazendo a henraça usando super
  get tipo() {
    //agora com o implemento do metodo tipo() ele ira retornar somente philips
    return 'Philips'
  }
}
 class Allen extends Parafuso {}

 //criar e usar 
//  new Parafuso() // classe abstrata nao pode ser instanciada
 let fenda = new Fenda()
 let philips = new Philips()
 let allen = new Allen() 

 console.log(fenda.tipo, philips.tipo)
//  console.log(allen.tipo) // 'Metodo "get tipo()" precisa ser implementado'