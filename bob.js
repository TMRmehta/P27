class bob{
    constructor(x, y, radius ){
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.8
        }
        this.radius = radius
        this.x=x;
        this.y = y;
        this.body=Bodies.circle(this.x,this.y,(this.radius)/2,options)
        World.add(world,this.body)
        
    }
    display(){
       var  angle= this.body.angle
        push();
        //rotate(angle)
        translate(this.body.position.x, this.body.position.y);
        fill(255)
        //ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
}
