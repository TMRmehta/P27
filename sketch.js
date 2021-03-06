
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter= 40;

	//Create the Bodies Here.

	bobObject1 = new bob(720,675,40)
	bobObject2 = new bob(760,675,40)
	bobObject3 = new bob(800,675,40)
	bobObject4 = new bob(840,675,40)
	bobObject5 = new bob(880,675,40)
	//create a roof
	roof = new Roof(800,200,500,20)
	rope1=new Rope(bobObject1.body,roof.body,-80,0)
	rope2=new Rope(bobObject2.body,roof.body,-40,0)
	rope3=new Rope(bobObject3.body,roof.body,0,0)
	rope4=new Rope(bobObject4.body,roof.body,40,0)
	rope5=new Rope(bobObject5.body,roof.body,80,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-90})
	}
}

