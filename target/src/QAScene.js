import Scene from './Scene.js'
import Picture from './Picture.js'
import Button from './Button.js'

export default class QAScene extends Scene {
    constructor(index, manager) {
        super();
        this.manager = manager;
        this.answerlist = [];
        this.loadQuestion(index);
        this.loadAnswer(index);
    }

    loadQuestion(index) {
        this.question=""
        var that=this;
        var path = `${wx.env.USER_DATA_PATH}/Q` + index.toString() + '.txt'
        this.manager.readFile({
            filePath: path,
            encoding: 'utf8',
            success: function (res) {
                that.question=res.data;
            },
            failed:function(res){
                console.log(res.errMsg);
            }
        })
    }


    loadAnswer(index) {
        if (index === 6) {
            this.answercount = 4;
        }
        else if (index === 7) {
            this.answercount = 3;
        }
        else {
            this.answercount = 2;
        }


        for (let i = 1; i <= this.answercount; i++) {
            var path = `${wx.env.USER_DATA_PATH}/Q` + index.toString() + 'A' + i.toString() + '.txt'
            var that=this;
            this.manager.readFile({
                filePath: path,
                encoding:'utf8',
                success:function(res){
                    //console.log(res.data);
                    that.answerlist.push(res.data)
                },
                fail: function (res) {
                    console.log(res.errMsg);
                },
                complete:function(){
                    console.log('completed')
                }
            })
        }
    }

    draw(ctx){
        console.log(this.answerlist);
        this.ctx=ctx;
        ctx.is_end=false;
        this.canvas=ctx.canvas;

        this.renderBg();

        this.ctx.font = "18px sans-serif"
        this.ctx.textAlign = "start";
        this.drawQuestion();

        this.ctx.font = "12px sans-serif"
        this.ctx.textAlign = "center";
        this.drawOption();
        this.ctx.textAlign = "start";
    }

    drawOption(){
        let strokebasey=this.canvas.height-180;
        let middlex=this.canvas.width/2
        for(let i=0;i<this.answercount;i++){
            let str=this.answerlist[i];
            console.log(str);
            var button=new Button(this.ctx,'res/img/button2.png',middlex-309/2,strokebasey,309,43,str);
            console.log("drawed option");
            this.buttonlist.push(button);
            strokebasey += 43;
        }
    }  

    drawQuestion(){
        let lineWidth = 0;
        let canvasWidth = this.canvas.width;//计算canvas的宽度
        let initHeight = 55;//绘制字体距离canvas顶部初始的高度
        let lastSubStrIndex = 0; //每次开始截取的字符串的索引
        for (let i = 0; i < this.question.length; i++) {
            if (lineWidth + this.ctx.measureText(this.question[i]).width> canvasWidth) {
               this. ctx.fillText(this.question.substring(lastSubStrIndex, i), 0, initHeight);//绘制截取部分
                initHeight += 20;//20为字体的高度
                lineWidth = 0;
                lastSubStrIndex = i;
            }
            else{
                lineWidth += this.ctx.measureText(this.question[i]).width;
            }
            if (i == this.question.length - 1) {//绘制剩余部分
                this.ctx.fillText(this.question.substring(lastSubStrIndex, i + 1), 0, initHeight);
            }
        }
    }
}