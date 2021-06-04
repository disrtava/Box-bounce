class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
       this.width = width
       this.height = height
    }
    display(){
        var position = this.body.position
        rectMode(CENTER)
        fill (0,255,0)
        rect(position.x,position.y,this.width,this.height)
    }
      
}