
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer1;
var rubber1;
var stone1;
var ground1;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;

	hammer1=new hammer(100,100);
	stone1=new stone(700,300,50,50);
	rubber1=new rubber(800,300,70,70);
	ground1=new ground1(600,570,1500,20)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  hammer1.display();
  stone1.display();
  rubber1.display();
  ground1.display();
  
  drawSprites();
 
}



