const Motor =Matter.Engine,
Mundo = Matter.World,
Corpos = Matter. Bodies;

const SAT=Matter.SAT
var nivel=1

var plataformas=[];
function setup() {
createCanvas(windowWidth,windowHeight)

motor = Motor.create()
mundo = motor.world 

if(nivel===1){
levelUNO()

}
else if(nivel===2){
  levelTWO
}
}
function draw() {
  background("skyBlue")
Motor.update(motor)

translate(-Lord.corpo.position.x+width/2, -Lord.corpo.position.y+height/2)//
portal.mostrar()
Lord.mostrar()

colisaoPortal(Lord,portal)

for(var plataforma of plataformas){
  plataforma.mostrar()

  if(LordTocandoPlataforma(Lord,plataforma)){
    Lord.resetarPulos()

  }
  

}
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Lord.mover(0.05)
  }

  else if (keyCode===LEFT_ARROW){
    Lord.mover(-0.05)
  }

  else if (keyCode===UP_ARROW){
    Lord.pular()
  }
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}


function LordTocandoPlataforma(Lord,plataforma){//
  /*const posicaoLord=Lord.corpo.position;
const posicaoPlataforma=plataforma.corpo.position

const tocando =
     posicaoLord.y + Lord.altura / 2 >= posicaoPlataforma.y - plataforma.altura / 2 &&
     posicaoLord.x + Lord.largura / 2 >= posicaoPlataforma.x - plataforma.largura / 2 &&
     posicaoLord.x - Lord.largura / 2 <= posicaoPlataforma.x + plataforma.largura / 2;
 
   return tocando;*/
  const colisao=Matter.SAT.collides(Lord.corpo,plataforma.corpo)
if(colisao.collided){
  Lord.resetarPulos()
}
  }


  function colisaoPortal(Lord,portal){
    var colisao=SAT.collides(Lord.corpo,portal.corpo)
    if(colisao.collided){
      
      nivel++
    }
    if(nivel===1){
      levelUNO()
      
      }
      else if(nivel===2){
        levelTWO
      }
  }
  function removerTudo(){
    for(var plataforma of plataformas){
      if(plataforma.corpo){
        Mundo.remove(mundo,plataforma.corpo)
      }
    }
  
  plataformas=[]
if(portal.corpo){
Mundo.remove(mundo,portal.corpo)
}
  }
function levelUNO(){
  plataformas.push(new Plataforma(500,height-150,200,20))//1
  plataformas.push(new Plataforma(400,height-300,200,20))//2
  plataformas.push(new Plataforma(700,height-600,200,20))//4
  plataformas.push(new Plataforma(800,height-500,200,20))//3
  plataformas.push(new Plataforma(1000,height-800,200,20))
  plataformas.push(new Plataforma(1500,height-1000,200,20))
  plataformas.push(new Plataforma(1800,height-1500,200,20))
  Lord=new Jogador(450,height-200,50,50)
  portal=new Portal(1850,height-1550,100,100)
  
}



function levelTWO(){
removerTudo()
}

