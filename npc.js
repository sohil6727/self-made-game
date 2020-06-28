class npc{
     constructor(x,y){

      var options ={
        restitution:2.0
      }
       this.body=Bodies.circle(x,y,20,options);
       World.add(world,this.body);
     }   
     
     display(){
       ellipseMode(RADIUS);
      // fill("red");
       ellipse(this.body.position.x,this.body.position.y,20,20);
     }
}