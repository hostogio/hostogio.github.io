// PARA PEDIR JOGAR - CLIQUE NA TELA
// MOVE A TABOA COM AS CHAVES DE SETA
// COMEÇAR USANDO A BARRA DE ESPAÇO

let moveMent = 280
let rightPress = false
let leftPress = false
let game = true
let dx = 6
let dy = 6
let score = 0
let lives = 2
let livesRestart = false
const bricks = []
const brickColors = ["#3ec27c","#3ec284","#3aba91","#3abaa0","#3abaad","#3aa9ba","#3a80ba","#3a60ba"];


const circle = {
  x: moveMent + 50,
  y: 380,
  radius: 20
}

function setup() {
  createCanvas(600, 400);
  createBricks()
}

//taboa config
function paddle() {
  stroke('white')
  fill('#40cae6')
  rect(moveMent, 385, 100, 15, 20)
  if (rightPress && moveMent < 500) {
    moveMent += 10
  }
  if (leftPress && moveMent > 0) {
    moveMent += -10
  }
}

//bola config

function ball() {
  noStroke()
  fill('#FBD8F8')
  ellipse(circle.x, circle.y, circle.radius, circle.radius)
  if (circle.y <= 0) {
    dy = -dy
   
  }
  if (circle.y >= height - 15 && circle.x > moveMent && circle.x <= moveMent + 50) {
    dy = -dy
    if (dx > 0) dx = -dx
    if (dx < 0) dx = dx
  }
  if (circle.y >= height - 15 && circle.x > moveMent + 50 && circle.x <= moveMent + 100) {
    dy = -dy
    if (dx > 0) dx = dx
    if (dx < 0) dx = -dx
  }
  if (circle.x >= width - 10 || circle.x <= 0) dx = -dx

  bricks.forEach((item, index) => {
  	if(checkCollisionBottom(circle, item)){
      dy = -dy
    	score++
      bricks.splice(index, 1)
    }
  })
  
  if (circle.y > height) {
    lives--
    livesRestart = true
    if (lives === 0) game = false
  }
  circle.x += dx
  circle.y += dy
}

//criação blocos
function createBricks() {
  const rows = 8
  const cols = 10
  const brickWidth = width / cols
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let brick = {
        x: i * 58 + 10,
        y: j * 12 + 30,
        w: 57,
        h: 10,
        color: brickColors[j]
      }
      bricks.push(brick)
    }
  }
}

//movimentação taboa e desenho blocos
function drawBricks() {
  bricks.forEach(brick => {
    fill(brick.color)
    rect(brick.x, brick.y, brick.w, brick.h)
  })
}

function keyPressed(value) {
  if (value.key === 'ArrowRight') {
    rightPress = true
  }
  if (value.key === 'ArrowLeft') {
    leftPress = true
  }
  if (value.keyCode === 32 && livesRestart) {
    livesRestart = false
    circle.x = moveMent + 50
    circle.y = 380
  }
  if (value.keyCode === 32 && !game) {
    game = true
    circle.x = moveMent + 50
    circle.y = 380
    score = 0
    lives = 3
    dy = -6
    moveMent = 250
    createBricks()
  }
}


function keyReleased(value) {
  if (value.key === 'ArrowRight') {
    rightPress = false
  }
  if (value.key === 'ArrowLeft') {
    leftPress = false
  }
}

//texto recomeçar
function restartGame() {
  fill('#40cae6')
  textAlign(CENTER);
  noStroke()
  textStyle(BOLD);
  textFont('Arial');
  textSize(38)
  text('Você Perdeu', 300, 170)
  textFont('Arial');
  textSize(28);
  text('Final score: ' + score, 300, 200);
  textSize(18);
  text('Presione o espaço para recomeçar', 300, 225);
}

//texto de morte
function lostLifeText() {
  fill('#FFEEEE')
  textAlign(CENTER);
  noStroke()
  textStyle(BOLD);
  textFont('Arial');
  textSize(36)
  text('Vida perdida', 300, 170)
  textFont('Arial');
  textSize(24);
  text('Agora você tem ' + lives + ' vidas restantes', 300, 200);
  textSize(18);
  text('Precione espaço para recomeçar', 300, 225);
}

//Texto de vida
function scoreText() {
  fill('#FFEEEE')
  textStyle(BOLD);
  textAlign(CENTER);
  noStroke()
  textFont('Arial');
  textSize(18);
  text('Pontos: ' + score, 520, 20);
}

function livesText() {
  textStyle(BOLD);
  textAlign(CENTER);
  noStroke()
  textFont('Arial');
  textSize(18);
  text('Vidas: ' + lives, 60, 20);
}

//colisão bola e bloco
function checkCollisionBottom(ball, brick) {
	if (ball.y - 20 < brick.y && ball.x > brick.x && ball.x <= brick.x + 58) {
  	return true
  }
}

function draw() {
  if(frameCount < 500){
  telaInicial();
  }else{//passou os 8 seg iniciais
  jogo();
  }
  }//FIM JOGO



function telaInicial(){

  textStyle(BOLD);
  fill("#797a8f");//preenchimento
  rect(0, 0, 500, 400 );
  textFont('Helvetica');
  fill("")
  textAlign(CENTER);
  textSize(18)
  text("SENAI - Serviço Nacional de Aprendizagem Industrial", 240, 50);
  textSize(20)
  text("Linguagem de programação de Web", 250,330)
  textSize(20)
  text("Professor: Tarcísio Nunes ", 250,360);
  textSize(20)
  text("Alunos: Hostógio, José e Pedro Tomaz", 250,       390);
    
  }


function jogo(){
   background("#000000");
  if (game && !livesRestart) ball()
  if (livesRestart && game) lostLifeText()
  if (!game && livesRestart) restartGame()
  if (game) {
    scoreText()
    livesText()
    drawBricks()
    paddle()    
}
}


