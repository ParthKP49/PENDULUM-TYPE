class circle{
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
    stroke(255);
    strokeWeight(4);
     fill("black");
    rect(this.x,this.y,this.width,this.height);
       
      }
}