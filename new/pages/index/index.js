import * as zrender from '../../lib/zrender/zrender';
import * as zrhelper from '../../lib/zrender/zrender-helper';


var xuebali = 0;
var gexingli = 0;
var shejiaoli = 0;
var nulili = 0;
var xiuxianli = 0;




//global variable
const app = getApp()
var zr = zrhelper.createZrender('canvas-1', app.width, app.height);
var w = zr.getWidth();
var h = zr.getHeight();

var bgcolor = "#17202A"

var sceneindex = 0;

var question = ["Q1 进入清华前的暑假，准备如何度过？", "Q2 午后，紫操，百团大战。作为被精彩纷呈的社团吸引的萌新，你会选择？", "Q3 大一下学期，有了转到心仪专业的机会，你会如何抉择？", "Q4 十一假期到了，你准备", "Q5 遇见了让自己心动的人，你会", "Q6 大二结束的暑假，你会如何安排？", "Q7大三快要结束，对未来，你要作何抉择？"];

var answer = ["A、和好友来一场毕业旅行（甩掉升学压力，我要享受生活）", "B、好好学英语（周围强手如林，我要赢在起跑线上）", "", "", "A、感兴趣的就加入（多尝试才不会后悔）", "B、权衡取舍，考虑再三（给自己时间适应大学生活）", "", "", "A、抓住机会（能抓住心中所爱就绝不放手）", "B、自己专业也不错，可以修双学位提升自己（我爱现在的生活）", "", "", "A、携亲带友出去浪（释放压力，更益于效率提升）", "B、泡在图书馆/实验室（有大把空闲时间，更要好好利用）", "", "", "A、勇敢去追（不在感情上留下遗憾）", "B、不敢搭讪，远远站在ta的身后（不靠近你，是因为怕失去你）", "", "", "A、当然是来一场说走就走的旅行（到大佬密度低的远方放飞自我）", "B、和志同道合的伙伴实践调研（读万卷书，更要行万里路）", "C、科研，科研，科研（我的心里只有学术）", "D、实习（我要看职场如何运作）", "A、稳妥地保个研然后养老（平平淡淡才是真）", "B、申请出国留学（人生需要挑战）", "C、安心准备毕业找工作（脱贫才是王道）", ""];


Page({
    data: {
        width: app.width + 'px',
        height: app.height + 'px',
    },
    //wrapper
    tapstart: function (e) {
        let touch = e.touches[0];
        zr.handler.dispatch('mousedown', {
            zrX: touch.x,
            zrY: touch.y
        })
    },
    tapend: function (e) {
    },
    tapmove: function (e) {
        let touch = e.touches[0];
        zr.handler.dispatch('mousemove', {
            zrX: touch.x,
            zrY: touch.y
        })
    },



    onLoad: function () {
        zr.clear();
        setFirstscene();
    }
})

function setFirstscene() {
    var scene1 = new zrender.Group();
    drawBg();

    var inittext = ["又是一年高考季", "又是一年毕业季", "即将迈出这个园子的你", "是否会经常怀念4年前", "那个或青涩，或懵懂，或热血的家伙", "欢迎进入时光机", "乘坐它", "你会回到那个收到录取通知书的午后", "4年前的一切 重新来过", "要逃离什么，奔向什么，成为什么", "都由你选择", "给你一个机会重新开始", "你会成为理想中的自己吗"];

    for (var i = 0; i < inittext.length; i++) {
        let hh = new zrender.Text({
            style: {
                text: inittext[i],
                textAlign: 'center',
                textVerticalAlign: 'middle',
                fontSize: 17,
                //fontFamily: 'Lato',
                //fontWeight: 'bolder',
                textFill: '#8E44AD',
                blend: 'lighten'
            },
            position: [w / 2, h / 3 - 10 + 20 * i]
        })
        zr.add(hh);
        scene1.add(hh);
    }

    var button = new zrender.Rect({
        shape: {
            r: 10,
            x: w / 2 - 55 - w / 14,
            y: h / 3 + 20 * 13 + 20,
            width: 110 + w / 7,
            height: 40,
        },
        style: {
            fill: "#6D7270",
            text: '启动',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 20,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            textFill: '#0ff',
            blend: 'lighten'
        }
    }).on('mousedown', function (res) {
        if (button.contain(res.offsetX, res.offsetY)) {
            drawMain();
            return;
        }
    });
    scene1.add(button);
    zr.add(button);



    var t1 = new zrender.Text({
        style: {
            text: '时光机',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 50,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            textFill: '#0ff',
            blend: 'lighten'
        },
        position: [w / 2, h / 5]
    });
    scene1.add(t1);
    zr.add(t1);



    var t2 = new zrender.Text({
        style: {
            text: '时光机',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 50,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            textFill: '#B2BABB',
            blend: 'lighten',
            opacity: 0.8,
        },
        position: [w / 2, h / 5]
    });
    scene1.add(t2);
    zr.add(t2);



    var lines = [];
    for (var i = 0; i < 14; ++i) {
        var line = new zrender.Rect({
            shape: {
                x: w * (Math.random() - 0.3),
                y: h * Math.random(),
                width: w * (Math.random() + 0.3),
                height: Math.random() * 8
            },
            style: {
                fill: ['#ff0', '#f0f', '#0ff', '#33CC33', "#186A3B"][Math.floor(Math.random() * 5)],
                blend: 'lighten',
                opacity: 0
            }
        });
        scene1.add(line);
        zr.add(line);
        lines.push(line);
    }

    setInterval(function () {
        if (Math.random() > 0.2) {
            t2.attr('position', [w / 2 - Math.random() * 40 + Math.random() * 50, h / 5]);

            for (var i = 0; i < lines.length; ++i) {
                lines[i].attr('shape', {
                    x: w * Math.random(),
                    y: h * Math.random(),
                    width: w * Math.random(),
                    height: Math.random() * 8
                });
                lines[i].attr('style', {
                    opacity: 1
                });
            }

            setTimeout(function () {
                t2.attr('position', [w / 2, h / 5]);

                for (var i = 0; i < lines.length; ++i) {
                    lines[i].attr('style', {
                        opacity: 0
                    });
                }
            }, 200);
        }
    }, 400);

    return scene1;
}

function destroy(group) {
    let wid = group.children();
    for (let i = 0; i < wid.length; i++) {
        let target = wid[i];
        zr.remove(target);
    }
}

function drawResult() {
    drawBg();

    var button = new zrender.Rect({
        shape: {
            r: 10,
            x: w / 2 - 55 - w / 14,
            y: h / 2+20,
            width: 110 + w / 7,
            height: 40,
        },
        style: {
            fill: "#6D7270",
            text: '结束',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 20,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            textFill: '#0ff',
            blend: 'lighten'
        }
    }).on('mousedown', function (res) {
        if (button.contain(res.offsetX, res.offsetY)) {
            wx.navigateBack({
                delta:-1
            })
        }
    });
    zr.add(button);
}

function drawBg() {
    var bg = new zrender.Rect({
        shape: {
            x: 0,
            y: 0,
            width: w,
            height: h,
        },
        style: {
            fill: bgcolor,
        }
    })
    zr.add(bg);
}

function drawMain() {
    if (sceneindex === 7) {
        drawResult();
        return;
    }
    let question_target = question[sceneindex];
    let answer_target = [];
    answer_target.push(answer[4 * sceneindex]);
    answer_target.push(answer[4 * sceneindex + 1]);
    answer_target.push(answer[4 * sceneindex + 2]);
    answer_target.push(answer[4 * sceneindex + 3]);

    drawBg();

    var ques = new zrender.Text({
        style: {
            text: question_target,
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 16,
            fontWeight: 'bolder',
            textFill: '#B2BABB',
            blend: 'lighten',
        },
        position: [w / 2, h / 5]
    })
    zr.add(ques);

    if (answer_target[0] !== "") {
        var A = new zrender.Rect({
            shape: {
                r: 10,
                x: 0,
                y: h -160,
                width: w,
                height: 40,
            },
            style: {
                fill: "#6D7270",
                text: answer_target[0],
                textAlign: 'center',
                textVerticalAlign: 'middle',
                fontSize: 16,
                fontFamily: 'Lato',
                fontWeight: 'bolder',
                textFill: '#0ff',
                blend: 'lighten'
            }
        }).on('mousedown', function (res) {
            if (A.contain(res.offsetX, res.offsetY)) {
                drawMain();
                return;
            }
        });
        zr.add(A);
    }
    if (answer_target[1] !== "") {
        var B = new zrender.Rect({
            shape: {
                r: 10,
                x: 0,
                y: h -120,
                width: w,
                height: 40,
            },
            style: {
                fill: "#6D7270",
                text: answer_target[1],
                textAlign: 'center',
                textVerticalAlign: 'middle',
                fontSize: 16,
                fontFamily: 'Lato',
                fontWeight: 'bolder',
                textFill: '#0ff',
                blend: 'lighten'
            }
        }).on('mousedown', function (res) {
            if (B.contain(res.offsetX, res.offsetY)) {
                drawMain();
                return;
            }
        });
        zr.add(B);
    }
    if (answer_target[2] !== "") {
        var C = new zrender.Rect({
            shape: {
                r: 10,
                x: 0,
                y: h -80,
                width: w,
                height: 40,
            },
            style: {
                fill: "#6D7270",
                text: answer_target[2],
                textAlign: 'center',
                textVerticalAlign: 'middle',
                fontSize: 16,
                fontFamily: 'Lato',
                fontWeight: 'bolder',
                textFill: '#0ff',
                blend: 'lighten'
            }
        }).on('mousedown', function (res) {
            if (C.contain(res.offsetX, res.offsetY)) {
                drawMain();
                return;
            }
        });
        zr.add(C);
    }
    if (answer_target[3] !== "") {
        var D = new zrender.Rect({
            shape: {
                r: 10,
                x: 0,
                y: h -40,
                width: w,
                height: 40,
            },
            style: {
                fill: "#6D7270",
                text: answer_target[3],
                textAlign: 'center',
                textVerticalAlign: 'middle',
                fontSize: 16,
                fontFamily: 'Lato',
                fontWeight: 'bolder',
                textFill: '#0ff',
                blend: 'lighten'
            }
        }).on('mousedown', function (res) {
            if (D.contain(res.offsetX, res.offsetY)) {
                drawMain();
                return;
            }
        });
        zr.add(D);
    }
    sceneindex++;
}

