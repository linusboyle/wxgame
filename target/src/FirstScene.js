import Scene from './Scene.js'
import Picture from './Picture.js'


export default class FirstScene extends Scene{
    constructor(){
        super();
    }
    draw(ctx){
        this.ctx=ctx;
        ctx.is_end=false;
        this.canvas=ctx.canvas;
        this.renderBg();
        
        var title = new Picture(this.ctx, 'res/img/title.png', this.canvas.width/2-85, 10, 170, 56);
        var button1 = new Picture(this.ctx, 'res/img/button1.png', this.canvas.width / 2 - 62, 350, 126, 58);

        this.ctx.font = "20px sans-serif"
        this.ctx.textAlign="center"

        let middlex=(ctx.canvas.width)/2;

        this.ctx.fillText("又是一年高考季", middlex, 100);
        this.ctx.fillText("又是一年毕业季", middlex, 120);
        this.ctx.fillText("即将迈出这个园子的你", middlex, 140);
        this.ctx.fillText("是否会经常怀念4年前", middlex, 160);
        this.ctx.fillText("那个或青涩，或懵懂，或热血的家伙", middlex, 180);
        this.ctx.fillText("欢迎进入时光机", middlex, 200);
        this.ctx.fillText("乘坐它", middlex, 220);
        this.ctx.fillText("你会回到那个收到录取通知书的午后", middlex, 240);
        this.ctx.fillText("4年前的一切 重新来过", middlex, 260);
        this.ctx.fillText("要逃离什么，奔向什么，成为什么", middlex, 280);
        this.ctx.fillText("都由你选择", middlex, 300);
        this.ctx.fillText("给你一个机会重新开始", middlex, 320);
        this.ctx.fillText("你会成为理想中的自己吗", middlex, 340);


        this.addInteractiveArea(button1);
    }
}