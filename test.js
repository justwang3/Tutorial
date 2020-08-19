//导航栏吸顶功能
//获取滚动条当前的位置
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
//获取导航栏的dom节点
var nav_dom = document.getElementById("nav_model");
//监听滚动条
window.onscroll = function () {
    //判断滚动条大于30,导航栏吸顶
    if (getScrollTop() > 1300) {
        console.log('此时滚动条的高度：' + this.getScrollTop());
        nav_dom.className = "nav fixed";
    } else {
        nav_dom.className = "nav";
    }
}

var flower1 = document.getElementById('school-1');
var flower2 = document.getElementById('school-2');
var flower3 = document.getElementById('school-3');
var anhuiBtn = document.getElementById('frist');
var koreaBtn = document.getElementById('second');
var couText = document.getElementById('coursetext');
var mainText = document.getElementById('maincourse');

koreaBtn.onclick = function () {
    // alert('被点击了');
    flower1.setAttribute('src', 'images/school-4.jpg');
    flower2.setAttribute('src', 'images/school-5.jpg');
    flower3.setAttribute('src', 'images/school-6.jpg');
    couText.innerHTML = '韩国顺天乡大学/计算机软件开发 2018.09-2020.07:'
    mainText.innerHTML = '主修课程： 数据结构，python融合软件，C语言程序设计，C++程序设计，Java程序设计,计算机工学，安卓开发，网络编程等';
    anhuiBtn.style.backgroundColor = '#302d3a';
    koreaBtn.style.backgroundColor = '#e9e8ee';



}
anhuiBtn.onclick = function () {
    flower1.setAttribute('src', 'images/school-1.jpg');
    flower2.setAttribute('src', 'images/school-2.jpg');
    flower3.setAttribute('src', 'images/school-3.jpg');
    couText.innerHTML = '安徽中医药大学/计算机科学与技术 2016.09-2018.07:'
    mainText.innerHTML = '主修课程： C语言程序设计，C++程序设计，Java程序设计，网页设计，电工电子技术，计算机网络，密码学等';
    koreaBtn.style.backgroundColor = '#302d3a';
    anhuiBtn.style.backgroundColor = '#e9e8ee';

}
//第一个圆环
var circle = document.getElementById("circle1");
var ctx = circle.getContext("2d");
//结束角度
var end = -90;
// 创建变量，进度值1%
var load = 0;
// 创建定时器，绘制进度条
var timer = setInterval(function () {


    //每次加载前清除画布
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    // 灰色底框
    ctx.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end += 3.6;
    // 开始新的路径
    ctx.beginPath();
    // 绘制新的圆环
    ctx.strokeStyle = "#2c3e50";
    ctx.lineWidth = 10;
    //从顶点位置开始
    ctx.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx.stroke();
    // 设置中间的文字字体和大小
    ctx.font = "16px SimHei";
    load++;
    // 设置图形文字
    ctx.fillText(+ load + "%", 130, 150);
    if (load == 90) {
        clearInterval(timer);
    }

}, 20);
//第二个圆环
var circle2 = document.getElementById("circle2");
var ctx2 = circle2.getContext("2d");
//结束角度
var end2 = -90;
// 创建变量，进度值1%
var load2 = 0;
// 创建定时器，绘制进度条
// var timer2 = setInterval(function () {

//     //每次加载前清除画布
//     ctx2.clearRect(0, 0, 300, 300);
//     ctx2.beginPath();
//     // 灰色底框
//     ctx2.strokeStyle = "#e0e1e5"; //底框的背景颜色
//     ctx2.lineWidth = 10; //底框的宽度
//     //底框显示的位置想x,y,r,start,end
//     ctx2.arc(150, 150, 80, 0, 2 * Math.PI);
//     ctx2.stroke(); //绘制底框，空心圆
//     // 修改结束角度
//     end2 += 3.6;
//     // 开始新的路径
//     ctx2.beginPath();
//     // 绘制新的圆环
//     ctx2.strokeStyle = "#2c3e50";
//     ctx2.lineWidth = 10;
//     //从顶点位置开始
//     ctx2.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
//     ctx2.stroke();
//     // 设置中间的文字字体和大小
//     ctx2.font = "16px SimHei";
//     load2++;
//     // 设置图形文字
//     ctx2.fillText(+ load2 + "%", 130, 150);
//     if (load2 == 80) {
//         clearInterval(timer2);
//     }
// }, 20);
//第三个圆环
var circle3 = document.getElementById("circle3");
var ctx3 = circle3.getContext("2d");
//结束角度
var end3 = -90;
// 创建变量，进度值1%
var load3 = 0;
// 创建定时器，绘制进度条
var timer3 = setInterval(function () {

    //每次加载前清除画布
    ctx3.clearRect(0, 0, 300, 300);
    ctx3.beginPath();
    // 灰色底框
    ctx3.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx3.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx3.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx3.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end3 += 3.6;
    // 开始新的路径
    ctx3.beginPath();
    // 绘制新的圆环
    ctx3.strokeStyle = "#2c3e50";
    ctx3.lineWidth = 10;
    //从顶点位置开始
    ctx3.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx3.stroke();
    // 设置中间的文字字体和大小
    ctx3.font = "16px SimHei";
    load3++;
    // 设置图形文字
    ctx3.fillText(+ load3 + "%", 130, 150);
    if (load3 == 70) {
        clearInterval(timer3);
    }
}, 20);
//第四个圆环
var circle4 = document.getElementById("circle4");
var ctx4 = circle4.getContext("2d");
//结束角度
var end4 = -90;
// 创建变量，进度值1%
var load4 = 0;
// 创建定时器，绘制进度条
var timer4 = setInterval(function () {

    //每次加载前清除画布
    ctx4.clearRect(0, 0, 300, 300);
    ctx4.beginPath();
    // 灰色底框
    ctx4.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx4.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx4.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx4.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end4 += 3.6;
    // 开始新的路径
    ctx4.beginPath();
    // 绘制新的圆环
    ctx4.strokeStyle = "#2c3e50";
    ctx4.lineWidth = 10;
    //从顶点位置开始
    ctx4.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx4.stroke();
    // 设置中间的文字字体和大小
    ctx4.font = "16px SimHei";
    load4++;
    // 设置图形文字
    ctx4.fillText(+ load4 + "%", 130, 150);
    if (load4 == 80) {
        clearInterval(timer4);
    }
}, 20);
//第五个圆环
var circle5 = document.getElementById("circle5");
var ctx5 = circle5.getContext("2d");
//结束角度
var end5 = -90;
// 创建变量，进度值1%
var load5 = 0;
// 创建定时器，绘制进度条
var timer5 = setInterval(function () {

    //每次加载前清除画布
    ctx5.clearRect(0, 0, 300, 300);
    ctx5.beginPath();
    // 灰色底框
    ctx5.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx5.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx5.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx5.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end5 += 3.6;
    // 开始新的路径
    ctx5.beginPath();
    // 绘制新的圆环
    ctx5.strokeStyle = "#2c3e50";
    ctx5.lineWidth = 10;
    //从顶点位置开始
    ctx5.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx5.stroke();
    // 设置中间的文字字体和大小
    ctx5.font = "16px SimHei";
    load5++;
    // 设置图形文字
    ctx5.fillText(+ load5 + "%", 130, 150);
    if (load5 == 70) {
        clearInterval(timer5);
    }
}, 20);
//第六个圆环
var circle6 = document.getElementById("circle6");
var ctx6 = circle6.getContext("2d");
//结束角度
var end6 = -90;
// 创建变量，进度值1%
var load6 = 0;
// 创建定时器，绘制进度条
var timer6 = setInterval(function () {

    //每次加载前清除画布
    ctx6.clearRect(0, 0, 300, 300);
    ctx6.beginPath();
    // 灰色底框
    ctx6.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx6.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx6.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx6.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end6 += 3.6;
    // 开始新的路径
    ctx6.beginPath();
    // 绘制新的圆环
    ctx6.strokeStyle = "#2c3e50";
    ctx6.lineWidth = 10;
    //从顶点位置开始
    ctx6.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx6.stroke();
    // 设置中间的文字字体和大小
    ctx6.font = "16px SimHei";
    load6++;
    // 设置图形文字
    ctx6.fillText(+ load6 + "%", 130, 150);
    if (load6 == 75) {
        clearInterval(timer6);
    }
}, 20);
//第七个圆环
var circle7 = document.getElementById("circle7");
var ctx7 = circle7.getContext("2d");
//结束角度
var end7 = -90;
// 创建变量，进度值1%
var load7 = 0;
// 创建定时器，绘制进度条
var timer7 = setInterval(function () {

    //每次加载前清除画布
    ctx7.clearRect(0, 0, 300, 300);
    ctx7.beginPath();
    // 灰色底框
    ctx7.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx7.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx7.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx7.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end7 += 3.6;
    // 开始新的路径
    ctx7.beginPath();
    // 绘制新的圆环
    ctx7.strokeStyle = "#2c3e50";
    ctx7.lineWidth = 10;
    //从顶点位置开始
    ctx7.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx7.stroke();
    // 设置中间的文字字体和大小
    ctx7.font = "16px SimHei";
    load7++;
    // 设置图形文字
    ctx7.fillText(+ load7 + "%", 130, 150);
    if (load7 == 20) {
        clearInterval(timer7);
    }
}, 20);
//第八个圆环
var circle8 = document.getElementById("circle8");
var ctx8 = circle8.getContext("2d");
//结束角度
var end8 = -90;
// 创建变量，进度值1%
var load8 = 0;
// 创建定时器，绘制进度条
var timer8 = setInterval(function () {

    //每次加载前清除画布
    ctx8.clearRect(0, 0, 300, 300);
    ctx8.beginPath();
    // 灰色底框
    ctx8.strokeStyle = "#e0e1e5"; //底框的背景颜色
    ctx8.lineWidth = 10; //底框的宽度
    //底框显示的位置想x,y,r,start,end
    ctx8.arc(150, 150, 80, 0, 2 * Math.PI);
    ctx8.stroke(); //绘制底框，空心圆
    // 修改结束角度
    end8 += 3.6;
    // 开始新的路径
    ctx8.beginPath();
    // 绘制新的圆环
    ctx8.strokeStyle = "#2c3e50";
    ctx8.lineWidth = 10;
    //从顶点位置开始
    ctx8.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
    ctx8.stroke();
    // 设置中间的文字字体和大小
    ctx8.font = "16px SimHei";
    load8++;
    // 设置图形文字
    ctx8.fillText(+ load8 + "%", 130, 150);
    if (load8 == 20) {
        clearInterval(timer8);
    }
}, 20);
// 显示时间
var displayTime = document.getElementById("nowdata");
var displayDay = document.getElementById('nowday');

setInterval(nowNumTime, 10);
function nowNumTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var year = now.getFullYear();
    var month = now.getMonth();
    var d = now.getDate();
    var week = now.getDay();
    var weeks = ['星期天', '星期一', '星期二', '星期三', '星期天四', '星期五', '星期六'];
    var temp = '' + (hour > 12 ? hour - 12 : hour);
    if (hour == 0) {
        temp = '12';

    }
    temp = temp + (minute < 10 ? ':0' : ":") + minute;
    temp = temp + (second < 10 ? ':0' : ":") + second;
    temp = temp + (hour >= 12 ? ' P.M' : " A.M");
    // temp = '${year}年${month}月${d}日${temp}${weeks[week]}';
    temp = year + '年 ' + month + '月 ' + d + "日 " + weeks[week] + ' ' + temp;

    displayTime.innerHTML = temp;
    displayDay.innerHTML = d;
}
//轮播图制作
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point');
var goPreBtn = document.getElementById('rightbtn');
var goNextBtn = document.getElementById('leftbtn');
var troDivs = document.getElementById('intro');
var infors = ['毕业作品-安卓开发：和搭档利用心率传感器和MindWave测量人体的心率与此时的压力指数。主要功能包括用户的登录与注册、心率和压力指数的测量、结果分析、测量记录的查询与提醒测量等。',
    '毕业作品-心率与压力指数测量android app在韩国获得认证。',
    'java小课题：和搭档合作完成通过文件流读取数据并模拟出FCFS、SJF、SRT、RR等8个调度算法的进程，并计算出各个进程的所需时间。',
    'Python小游戏制作：与搭档自学并开发双人和单人模式的贪吃蛇小游戏。因刚到韩国自学python语言所以游戏较为简单。主要功能包括单双人模式的选择、难度的选择和记录最高分等。',
    '制作个人简历网页版：利用HTML5、CSS3、JavaScript制作个人网上简历。'];
var index = 0;
var time = 0;
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';

    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}
var goIndex = function () {
    clearActive();

    items[index].className = 'item active';
    points[index].className = 'point active';
    console.log(infors[index]);
    troDivs.innerHTML = infors[index];

}
var goNext = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}
var goPre = function () {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goIndex();
}
goNextBtn.onclick = function () {

    goNext();
}
goPreBtn.onclick = function () {
    goPre();
}
for (var i = 0; i < points.length; i++) {
    points[i].onclick = function () {
        var pointIndex = this.getAttribute('data-index');

        index = pointIndex;
        goIndex();

    }
}
var timer2 = null;
// 滚动条控制
var t = document.getElementsByClassName('skill');

function getPS() {
    var h = document.documentElement;
    var x = (h && h.scrollLeft);
    var y = (h && h.scrollTop);
    return {
        x: x,
        y: y
    };
}
window.onscroll = function () {
    if (getPS().y > 1600) {
        timer2 = setInterval(function () {

            //每次加载前清除画布
            ctx2.clearRect(0, 0, 300, 300);
            ctx2.beginPath();
            // 灰色底框
            ctx2.strokeStyle = "#e0e1e5"; //底框的背景颜色
            ctx2.lineWidth = 10; //底框的宽度
            //底框显示的位置想x,y,r,start,end
            ctx2.arc(150, 150, 80, 0, 2 * Math.PI);
            ctx2.stroke(); //绘制底框，空心圆
            // 修改结束角度
            end2 += 3.6;
            // 开始新的路径
            ctx2.beginPath();
            // 绘制新的圆环
            ctx2.strokeStyle = "#2c3e50";
            ctx2.lineWidth = 10;
            //从顶点位置开始
            ctx2.arc(150, 150, 80, -90 * Math.PI / 180, end * Math.PI / 180);
            ctx2.stroke();
            // 设置中间的文字字体和大小
            ctx2.font = "16px SimHei";
            load2++;
            // 设置图形文字
            ctx2.fillText(+ load2 + "%", 130, 150);
            if (load2 == 80) {
                clearInterval(timer2);
            }
        }, 20);
    }


}
