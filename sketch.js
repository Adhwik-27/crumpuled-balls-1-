
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;

  ground= new Ground(600,370,1200,20)
  

  paper = new Paper(99,200,13);
  binBottom = new Bin(1000,350,200,20);
  binLeft = new Bin(900,300,20,100);
  binRight = new Bin(1100,300,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  binBottom.display();
  binLeft.display();
  binRight.display();

  paper.display();


 
}
function keyPressed(){
  if (keyCode === UP_ARROW ){

    console.log("in")
    Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-5})
  }

}




