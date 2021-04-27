var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball1
var paper;

function preload()
loadImage("images/paper.png")
{
}

function setup() {
	createCanvas(1200, 500);
	

	engine = Engine.create();
	world = engine.world;


	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1=new Box(900,490,200,20);
	box2=new Box(800,450,20,100);
	box3=new Box(1000,450,20,100)
	ball1=new Ball(100,400,20)
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 

  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  paper.display();

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:73,y:-73}) 
    
  }
}



