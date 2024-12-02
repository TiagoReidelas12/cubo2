class Portal{
    constructor(x,y,largura,altura,){
        this.corpo=Matter.Bodies.rectangle(x,y,largura,altura,{isStatic:true})
 
        this.largura=largura
        this.altura=largura
        this.imagem=loadImage('Portal.png')
        Matter.World.add(mundo,this.corpo)
    }
    mostrar(){
        const posicao=this.corpo.position
        push()
        imageMode(CENTER)
        image(this.imagem,posicao.x,posicao.y,this.largura,this.altura);
        pop()
    }
}
