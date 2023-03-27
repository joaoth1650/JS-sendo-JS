let pessoas = [
  {name: 'joao', nota: 68},
  {name: 'maria', nota: 88},
  {name: 'gustavo', nota: 90},
  {name: 'fernando', nota: 74}
];


 let nota = pessoas[0].nota

if( nota >= 90) {
  console.log('A')
}else if( nota <= 89 && nota >=80){
  console.log('B')
}else if( nota <= 79 && nota >=70){
  console.log('C')
}else if( nota <= 69 && nota >= 60){
  console.log('D')
}else if( nota < 60){
  console.log('F')
}