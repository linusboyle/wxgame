import Picture from './Picture.js'

export default class Scene{
    constructor(){
        this.buttonlist=[];
    }
    renderBg() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        var bg=new Picture(this.ctx,'res/img/bg.png',0,0,this.canvas.width,this.canvas.height);

        //this.ctx.fillStyle = '#FEBAC9';
       // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
       //this.ctx.fillStyle = '#000000';
        console.log("renderedbg!")
    }
    addInteractiveArea(button){
        this.buttonlist.push(button);
    }
}