//carro
let xCarros = [600, 600, 600,600, 600, 600];
let yCarros = [40, 98, 150, 210, 260, 310];
let velocidadesCarros = [1, 1, 1, 1, 1, 1];
let comprimentoCarros = [50, 50, 80, 50, 50, 80];
let altura = 40;



function mostraCarro(){
  //print("Quantidade de carros: "+imagemCarros.lenght);
 for(let i=0; i< imagensDoCarros.length; i++){
  image(imagensDoCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], altura);

 }
}
  function movimentaCarro(){
    for(let i=0; i < imagensDoCarros.length; i++){
    xCarros[i] -= velocidadesCarros[i];   
    if(xCarros[i] < -50){
      xCarros[i] = 600; //volta á posiçao inicial
    }  
   }
  }
    

