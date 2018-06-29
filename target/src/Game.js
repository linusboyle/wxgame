import Picture from './Picture.js'
import FirstScene from './FirstScene.js'
import QAScene from './QAScene.js'
import EndScene from './EndScene.js'

let canvas = wx.createCanvas();
let ctx = canvas.getContext('2d');
let file = wx.getFileSystemManager();




export default class Game {
    constructor() {
        this.initScene();
        this.start();
    }


    initScene() {
        this.scenelist=[];
        this.buttonlist=[];
        this.currentscene=-1;
        var firstscene = new FirstScene();
        this.scenelist.push(firstscene);
        var sc1 = new QAScene(1, file);
        var sc2 = new QAScene(2, file);
        var sc3 = new QAScene(3, file);
        var sc4 = new QAScene(4, file);
        var sc5 = new QAScene(5, file);
        var sc6 = new QAScene(6, file);
        var sc7 = new QAScene(7, file);

        this.scenelist.push(sc1);
        this.scenelist.push(sc2);
        this.scenelist.push(sc3);
        this.scenelist.push(sc4);
        this.scenelist.push(sc5);
        this.scenelist.push(sc6);
        this.scenelist.push(sc7);

        var lastscene=new EndScene();
        this.scenelist.push(lastscene);

        this.touchHandler = this.touchEventHandler.bind(this);
        wx.onTouchStart(this.touchHandler);
    }

    switchScene() {
        this.currentscene++;
        let nextscene = this.scenelist[this.currentscene];
        nextscene.draw(ctx);
        this.buttonlist = nextscene.buttonlist;

    }

    //下一个场景的入口
    touchEventHandler(res) {
        let x = res.touches[0].clientX;
        let y = res.touches[0].clientY;

        for (let i = 0; i < this.buttonlist.length; i++) {
            let pic = this.buttonlist[i];
            if (pic.is_touched(x, y)) {
                console.log("touched!");
                if(ctx.is_end){
                    wx.exitMiniProgram();
                    return;
                }
                else{
                    this.switchScene();
                    return;
                }
            }
        }
        console.log('not touched~~');
    }

    start() {
        this.switchScene();
        file.access({
          path:  `${wx.env.USER_DATA_PATH}/Q1.txt`,
          fail: (function(){
              this.writedata();
              console.log("will write");
            }).bind(this)
        })
    }

    writedata() {
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q1.txt`,
            data: 'Q1 进入清华前的暑假，准备如何度过？',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q1A1.txt`,
            data: 'A、和好友来一场毕业旅行（甩掉升学压力，我要享受生活）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q1A2.txt`,
            data: 'B、好好学英语（周围强手如林，我要赢在起跑线上）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q2.txt`,
            data: 'Q2 午后，紫操，百团大战。作为被精彩纷呈的社团吸引的萌新，你会选择？',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q2A1.txt`,
            data: 'A、感兴趣的就加入（多尝试才不会后悔）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q2A2.txt`,
            data: 'B、权衡取舍，考虑再三（给自己时间适应大学生活）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q3.txt`,
            data: 'Q3 大一下学期，有了转到心仪专业的机会，你会如何抉择？',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q3A1.txt`,
            data: 'A、抓住机会（能抓住心中所爱就绝不放手）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q3A2.txt`,
            data: 'B、自己专业也不错，可以修双学位提升自己（我爱现在的生活）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q4.txt`,
            data: 'Q4 十一假期到了，你准备',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q4A1.txt`,
            data: 'A、携亲带友出去浪（释放压力，更益于效率提升）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q4A2.txt`,
            data: 'B、泡在图书馆/实验室（有大把空闲时间，更要好好利用）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q5.txt`,
            data: 'Q5 遇见了让自己心动的人，你会',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q5A1.txt`,
            data: 'A、勇敢去追（不在感情上留下遗憾）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q5A2.txt`,
            data: 'B、不敢搭讪，远远站在ta的身后（不靠近你，是因为怕失去你）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q6.txt`,
            data: 'Q6 大二结束的暑假，你会如何安排？',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q6A1.txt`,
            data: 'A、当然是来一场说走就走的旅行（到大佬密度低的远方放飞自我）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q6A2.txt`,
            data: 'B、和志同道合的伙伴实践调研（读万卷书，更要行万里路）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q6A3.txt`,
            data: 'C、科研，科研，科研（我的心里只有学术）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q6A4.txt`,
            data: 'D、实习（我要看职场如何运作）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q7.txt`,
            data: 'Q7 大三快要结束，对未来，你要作何抉择？',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q7A1.txt`,
            data: 'A、稳妥地保个研然后养老（平平淡淡才是真）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q7A2.txt`,
            data: 'B、申请出国留学（人生需要挑战）',
            encoding: 'utf8',
        })
        file.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/Q7A3.txt`,
            data: 'C、安心准备毕业找工作（脱贫才是王道）',
            encoding: 'utf8',
        })
    }
}
