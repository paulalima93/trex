var quadrado;

function setup() {
 createCanvas (400,400);
 quadrado = createSprite (200,200,30,30)

}

function draw() 
{
   background(30);
  
   quadrado.setVelocity(0,0);
if(keyIsDown(UP_ARROW)){
quadrado.position.y = quadrado.position.y-5;
}

if(keyIsDown(DOWN_ARROW)){
  quadrado.velocityY = 5;
  }

  drawSprites();

}