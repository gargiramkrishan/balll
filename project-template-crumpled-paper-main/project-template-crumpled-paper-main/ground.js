class ground
{
   constructor(x,y)
   {  
    let opp =
    {
	isStatic : true
    }
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 1000;

      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,opp)
      World.add(world,this.body);
      fill("blue")
   }
   show(){
	var pos = this.body.position;
	rectMode(CENTER);
	rect(pos.x, pos.y,this.width, this.height);
     } 

}