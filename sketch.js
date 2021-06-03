
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObj,groundObject;	
var world, launcher;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,660);
	paperObj=new paper(200,200,70);
	launcher = new Launcher(paperObj.body,{x:200, y:100});
	groundObject=new ground(width/2,670,width,20);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
//	Render.run(render);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  paperObj.display();
  groundObject.display();
  dustbinObj.display();
  launcher.display();
}
function mouseDragged(){
	Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}