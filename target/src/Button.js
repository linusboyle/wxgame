//import Picture from './Picture.js'

export default class Button{
    constructor(ctx, path, dx, dy, width, height,word){
        this.ctx = ctx;
        this.img = wx.createImage();
        this.img.src = path;
        this.x = dx;
        this.y = dy;
        this.width = width;
        this.height = height;
        this.img.onload = (function () {
            this.ctx.drawImage(this.img, dx, dy);
            console.log("new load");
            this.drawWord(word);
        }).bind(this)
    } 

    drawWord(str){
        let middlex=this.ctx.canvas.width/2;
        let textbasey=this.y+this.height/2;
        this.ctx.textAlign="center"
        this.ctx.font="14px sans-serif"
        if (this.ctx.measureText(str).width > this.ctx.canvas.width || this.ctx.measureText(str).width > this.width) {
            let left_str = str.match(/(\S*)（(\S*)）/)[1];
            let right_str = '（' + str.match(/(\S*)（(\S*)）/)[2] + '）';
            this.ctx.fillText(left_str, middlex, textbasey - this.height/5);
            this.ctx.fillText(right_str, middlex, textbasey + this.height/5);
        }
        else {
            this.ctx.fillText(str, middlex, textbasey);
        }
    }

    is_touched(x, y) {
        return !!(x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height))
    }
}