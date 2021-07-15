class Stone{
	constructor(x,y,width,height)
	{
	    var options={

           'restitution':0.8,
           'friction':0.9, 
           'density':12 

        }
		this.body=Bodies.rectangle(x,y, 100, 100,options)
		
		
		this.width= width;
        this.height= height;
		
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			var angle= this.body.position;

			push()
			translate(pos.x, pos.y);
			rotate(angle);
			rectMode(CENTER)
			stroke("black");
			fill("black");
			rect(0,0,this.width,this.height)

			pop()
	}

}