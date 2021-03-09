
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var title,button,button2,start;
var name1
var player,robot;
var gameState=0;
var count=1
function preload(){
  bgImage=loadImage("bg.png")
  dodge=loadAnimation("dodge.png")
  punch=loadAnimation("punch1.png","punch2.png")
  gameover=loadAnimation("gameover.png")
  start1 = loadAnimation("start.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  title=createElement("h2")
  title.html("BOXING GAME")
  button=createButton("SINGLE PLAYER")
  title.position(400,10)
  button.position(500,10)
  button2=createButton("MULTI PLAYER")
  button2.position(550,10)
 
  button.mousePressed(()=>{
    button.hide()
    button2.hide()
    start=createButton("START")
  input=createInput("Name")
    input.position(350,10)
    name1=input.value()
    start.position(300,10)
    start.mousePressed(()=>{
      input.hide()
      start.hide()
      player=createSprite(200,300,10,10)

      robot=createSprite(700,300,10,10)
      gameState=1
      
      })
  })
}


function draw() {
  background("white");  
  if(gameState==1){
    if(keyDown("left")){
      player.x=player.x+1
    }
    if(keyDown("space")&& count==1){
      player.addAnimation("dod",dodge)
      player.changeAnimation("dod",dodge)
      count=0
    }
    if(player.x===robot.x-20){
      player.addAnimation("sta",punch)
    }
    robot.x=Math.round(random(300,400))
    console.log(count)
  }
  drawSprites();
}