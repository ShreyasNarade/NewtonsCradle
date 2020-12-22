
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof;
var rope2,rope3,rope4,rope5,rope6,rope7;
var bob2,bob3,bob4,bob5,bob6;
var ground;
var bob7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground = new Ground(400,height,12000,30);
	roof = new Roof(400,100,500,40);
	bob2 = new Bob(220,400,40);
	bob3 = new Bob(260,400,40);
	bob4 = new Bob(450,400,40);
	bob5 = new Bob(500,400,40);
	bob6 = new Bob(620,400,40);
	bob7 = new Bob(180,400,40);

	rope2 = new Chain(roof.body,bob2.body,-150,-0);
	rope3 = new Chain(roof.body,bob3.body,-70,-0);
	rope4 = new Chain(roof.body,bob4.body,10,-0);
	rope5 = new Chain(roof.body,bob5.body,90,0);
	rope6 = new Chain(roof.body,bob6.body,160,0);
	rope7 = new Chain(roof.body,bob7.body,-220,0);



	

	
	


	Engine.run(engine);
  

	
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(255);
  ground.display();

  roof.display();
  rope2.display();
  bob2.display();
  bob3.display();
  rope3.display();
  rope4.display();
  bob4.display();
  bob5.display();
  rope5.display();
  bob6.display();
  rope6.display();
  bob7.display();
  rope7.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob7.body,bob7.body.position,{x:-400,y:-115});


	}
	if(keyCode === DOWN_ARROW){
		Body.applyForce(bob6.body,bob6.body.position,{x:400,y:-115});


	}
	if(keyCode === LEFT_ARROW){
		Body.applyForce(bob2.body,bob2.body.position,{x:-400,y:-115});


	}
	if(keyCode === RIGHT_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:400,y:-115});


	}
}



