
var man1, man2, man3, man4, man5, man6, imposter1, imposter2, imposter3 ;
var pos=[100,220,340,460,580,600,720,840]
var score=0
var lives = 3 
var gameState= "play"
var manGroup,imposterGroup
function preload() {
    backgroundImg = loadImage("sprites/morningphase.jpg");
 
    manimage=loadImage("sprites/manedit.png");
    meImage= loadImage ("sprites/me.png");
}

function setup(){
     createCanvas(windowWidth,windowHeight);
   
     edges=createEdgeSprites();
     
   man1=createSprite(50,height-150,100,200);
   man1.addImage("man",manimage)
   man2=createSprite(50,height-150,100,200);
   man2.addImage("man",manimage)
   man3=createSprite(50,height-150,100,200);
   man3.addImage("man",manimage)
   man4=createSprite(50,height-150,100,200);
   man4.addImage("man",manimage)
   man5=createSprite(50,height-150,100,200);
   man5.addImage("man",manimage)
   imposter1=createSprite(50,height-150,100,200);
   imposter1.addImage("man",manimage)
   imposter2=createSprite(50,height-150,100,200);
   imposter2.addImage("man",manimage)
   imposter3=createSprite(50,height-150,100,200);
   imposter3.addImage("man",manimage)

   player=createSprite(50,height-150,100,100);
   player.addImage("player",meImage)
   player.scale=0.8
   man1.x=random(pos);
   man2.x=random(pos);
   man3.x=random(pos);
   man4.x=random(pos);
   man5.x=random(pos);
   imposter1.x=random(pos);
   imposter2.x=random(pos);
imposter3 .x=random(pos);
manGroup=new Group()
imposterGroup = new Group()

    
    manGroup.add(man1);
    manGroup.add(man2);
    manGroup.add(man3);
    manGroup.add(man4);
    manGroup.add(man5);
    imposterGroup.add(imposter1);
    imposterGroup.add(imposter2);
    imposterGroup.add(imposter3);

    textSize(30)
    fill(0)
}

function draw(){
    background(backgroundImg);

    if(gameState==="play"){

    
player.x=World.mouseX

    drawSprites();
if(score===50){
    text("you won!!! ",width/3,height/2)

}
}
if(gameState==="end"){
    text("GAME OVER!!!! BETTER LUCK NEXT TIME ",width/3,height/2)
}

text("SCORE: "+score,100,50)
text("LIVES: "+lives,100,100) 


}

function mousePressed(){
    if (manGroup.isTouching (player)){
score+=10
    }
    else if (imposterGroup.isTouching (player)){
        lives--
        if (lives>0){
            gameState="end"
        }
    }
    
}

