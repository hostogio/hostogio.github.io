//ator.js
let yAtor = 366;
let xAtor = 100;
let colidiu = false;
let placar = 0;

//ator2
let xAtor2 = 366;
let yAtor2 = 366;
let colidiu2 = false;
let placar2 = 0;


function mostraPlacar(){//marca ponto!
 if(yAtor < 15) {
   voltaAtorParaPosicaoInicial();
   placar +=1;
   somPonto.play();
  }
 
textAlign(CENTER);
textSize(25);
fill(color(255,240,60));
text("Placar:"+ placar,50, 30);
}

function mostraPlacar2(){
  if(yAtor2 < 15) {
   voltaPosicaoInicial()
   placar2 +=1;
   somPonto.play();
  }
textAlign(CENTER);
textSize(25);
fill(color(255,240,60));
text("Placar:"+ placar2, 450, 30);
}


function verificaColisao(){
for(let i=0; i< imagensDoCarros.length; i++){
  //pergunta se colidiu, recebe resposta "true ou false"
  colidiu =
collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor,yAtor,15);
  
  if(colidiu){
    console.log("Colidiu");
    voltaAtorParaPosicaoInicial();
    somColidiu.play();
  if(placar > 0)//so tira ponto se for maior que zero
    placar -=1;
    
    //perde ponto
  }//fim do if
 }// fim do for
}//fim da funtion

 function voltaAtorParaPosicaoInicial(){
 yAtor = 366;
 }


function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);

  }
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
 
    if (yAtor > 5)
    yAtor -=3;
}
  if (keyIsDown(DOWN_ARROW)){
    if (yAtor< 366)
    yAtor +=3;
  } 
   if (keyIsDown(87)){

    if (yAtor2 > 5)
    yAtor2 -=3;
}
  if (keyIsDown(83)){
    if (yAtor2< 366)
    yAtor2 +=3;
  }  

}

//ator 2

 function mostraAtor2(){
 image(imagemDoAtor2, xAtor2, yAtor2, 30, 30);
 }

function mostraPlacar2(){
  if(yAtor2 < 15) {
   voltaPosicaoInicial()
   placar2 +=1;
   somPonto.play();
  }
textAlign(CENTER);
textSize(25);
fill(color(255,240,60));
text("Placar:"+ placar2, 450, 30);
}

function voltaPosicaoInicial(){
 yAtor2 = 366;
 }

function verificaColisao2(){
for(let i=0; i< imagensDoCarros.length; i++){
  //pergunta se colidiu, recebe resposta "true ou false"
  colidiu2 =
collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor2,yAtor2,30);
  
  if(colidiu2){
    console.log("Colidiu");
    voltaPosicaoInicial();
    somColidiu.play();
  if(placar2 > 0)//so tira ponto se for maior que zero
    placar2 -=1;
  }
 }
}

//Mostrar Vencedor
 function mostraVencedor(){
    if(placar >= 10){
    textAlign(CENTER);
    fill(0);//Texto preto
    noStroke();
    textSize(30);
    text("Player 1 é campeão",250,200);
  }else{//copia e cola tudo ali de cima!
    textAlign(CENTER);
    noStroke();
    fill(0);//Texto preto
    textSize(30);
    text("Player 2 é campeão",250,200);
    }
}


  



