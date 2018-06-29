import Scene from './Scene.js'
import Button from './Button.js'

export default class EndScene extends Scene{
    constructor(){
        super();
    }
    draw(ctx){
        this.ctx=ctx;
        this.canvas=ctx.canvas
        ctx.is_end=true;

        this.renderBg();

        let middlex=ctx.canvas.width/2
        let middley=ctx.canvas.height/2;
        var button=new Button(ctx,'res/img/button2.png',middlex-309/2,middley-43/2,309,43,"结束");

        this.buttonlist.push(button);
    }
}
