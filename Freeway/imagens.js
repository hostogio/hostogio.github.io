//imagens.js
//Definiçao das variaveis 
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoAtor2;
let imagensDoCarros = [];//Array de imagens

//sons
let trilhaSonora;
let somColidiu;
let somPonto;

function preload(){
  //pre carregamento  dos sons
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
  
  //Pré-carregamento das imagens nas variáveis
  imagemDaEstrada = loadImage ("imagens/estrada.png");
  imagemDoAtor = loadImage ("imagens/ator-1.png");
  imagemDoAtor2 = loadImage ("imagens/galinha.png");
  imagensDoCarros[0] = loadImage("imagens/carro-1.png");
  imagensDoCarros[1] = loadImage("imagens/carro-2.png");
  imagensDoCarros[2] = loadImage("imagens/carro-3.png");
  imagensDoCarros[3] = loadImage("imagens/carro-1.png");
  imagensDoCarros[4] = loadImage("imagens/carro-2.png");
  imagensDoCarros[5] = loadImage("imagens/carro-3.png");
}
