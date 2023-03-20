function staircase(n){

   let espaco = '';
   let asterisco = '*';
   let posicao = n - 1;
    //o primeiro loop ira sempre acrescentar-se +1 (pular para prox linha) depois que o loop2 ver que a primeira linha (n) esta cheia 
   for (let linha = 0; linha < n; linha += 1){
    //o segundo loop  ira sempre acrescentar-se +1 (pular para a proxima posicao da linha que esta atuando) depois que o if ou o else for executado
    for (let coluna = 0; coluna < n; coluna += 1){
     // o if esta dizendo que sempre que a coluna for < (menor que) a posicao ele ira acrescentar um (_espaco) ao espaco em branco que os loops estao 
      if (coluna < posicao){
       espaco += ' ';
     } 
     // else esta fizendo que sempre que se o if for *falso* entao no lugar de um (_espaco) ele ira acrescentar um (asterisco= '*')
     else {
       espaco += asterisco;
     }
     }
     // este console.log (ler isto) esta dentro do primeiro loop pois eu quero que ele leia linha por linha, entao toda vez que o loop2 for finalizado ele ira imprimir a linha e pular para a proxima 
     console.log(espaco); 
     espaco = '';
     posicao -= 1; 
   }
}
 staircase(6)