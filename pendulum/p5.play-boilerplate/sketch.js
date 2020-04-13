
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const constraint2 = Matter.MouseContraint;

var engine, world;
var ellipse,rectan;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 ellipse  = new circle(170,100,100,30);
 rectan = new head(200,200,20,20);


 var options = {
  bodyA:ellipse.body,
  bodyB:rectan.body,
  length:100,
  stiffness:2
 }
 var constraint = Constraint.create(options);
World.add(world,constraint);
}

function draw() {
  background("black");  
  
  Engine.update(engine);
ellipse.display();
rectan.display();

line(ellipse.body.position.x,ellipse.body.position.y,rectan.body.position.x,rectan.body.position.y);
mouseDragged();
}
function mouseDragged(){
  Matter.Body.setPosition(rectan.body, {x: mouseX , y: mouseY});
}
