export default class Picture{
    constructor(ctx,path,dx,dy,width,height){
        this.ctx=ctx;
        this.img=wx.createImage();
        this.img.src=path;
        this.img.onload=( function (){
            this.ctx.drawImage(this.img,dx,dy,width,height)
            console.log("original load");
        }).bind(this)
        this.x=dx;
        this.y=dy;
        this.width=width;
        this.height=height;
    }
    
    
    is_touched(x, y) {
        return !!(x >= this.x && x <= (this.x + this.width) && y >= this.y &&y <= (this.y + this.height))
    }
}
