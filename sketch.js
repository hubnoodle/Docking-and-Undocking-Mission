var bgImg;
var iss, issImg;
var spacecraft0, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked = false;
var block;
var text, textImg;


function preload(){
bgImg = loadImage("spacebg.jpg");
spacecraftImg1 = loadImage("spacecraft1.png");
spacecraftImg2 = loadImage("spacecraft2.png");
spacecraftImg3 = loadImage("spacecraft3.png");
spacecraftImg4 = loadImage("spacecraft4.png");
issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);

  spacecraft0 = createSprite(400, 300, 50, 50);
  spacecraft0.addImage(spacecraftImg1);
  spacecraft0.scale = 0.1;

  block = createSprite(340, 230, 20, 20);
  block.visible = false
  
}

function draw() {
  background(bgImg); 
  
  

  if(keyDown('Right_Arrow')){
  spacecraft0.addImage(spacecraftImg4);
  spacecraft0.x = spacecraft0.x + 4;
}

if(keyDown('Left_Arrow')){
  spacecraft0.addImage(spacecraftImg3);
  spacecraft0.x = spacecraft0.x - 4;
}

if(keyDown('Down_Arrow')){
  spacecraft0.addImage(spacecraftImg1);
  spacecraft0.y = spacecraft0.y + 4;
}
if(keyDown('Up_Arrow')){
spacecraft0.addImage(spacecraftImg2);
spacecraft0.y = spacecraft0.y - 4;
}
if(spacecraft0.isTouching(block)){
  hasDocked = true

  fill("white");
  textSize(25)
  text("Docking Successful",250,350);
  
}

  drawSprites();
}

