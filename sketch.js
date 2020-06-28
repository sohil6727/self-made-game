const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground;
var catapult;
var ball1,ball2,ball3,ball4;
var player;
var chain;
var backgroundImg;
var goal;

function preload(){
  backgroundImg = loadImage("backgr.jpg");
}
function setup(){

  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,580,1200,20);
 catapult = new Catapult();
 ball1 = new npc(400,100);
 
ball2 = new npc(500,200);
ball3 = new npc(600,400);
ball4 = new npc(880,500);
player = new pc(75,150);
chain = new Chain(player.body,{x:100,y:370});
goal = new Box(1050,400,150,300);

  
}



function draw(){
 background(backgroundImg);
 Engine.update(engine);

 ground.display();
 catapult.display();
 ball1.display();
 
 ball2.display();
 ball3.display();
 ball4.display();
 player.display();
 //chain.display();
 goal.display();

 if(player.body.position.x >=900){
   console.log("hello");
   fill("red");
   textSize(50);
   text("YOU WIN",600,300);
 }
}

 



function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
} 