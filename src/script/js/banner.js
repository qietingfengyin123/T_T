; (function () {//闭包写轮播图；
    let $box = $('.banner_c');
    let $pics = $('.bnr_s li')
    let $left = $('.btn_left');
    let $right = $('.btn_right');
    let $btns = $('.banner_btns a');
    let $timer = null;
    let $num = 0;
    //鼠标经过轮播图时，停止定时器，出现左右两个箭头按钮
    $box.hover(function () {
        $left.show();
        $right.show();
        clearInterval($timer);
    }, function () {//鼠标移出时，两个箭头按钮隐藏，定时器开启；
        $left.hide();
        $right.hide();
        time();
    })
    //鼠标经过小圆点时的切换效果
    $btns.mouseover(function () {
        $num = $(this).index();
        tab();
    })
    //点击左边箭头按钮切换轮播图
    $left.on('click', function () {
        $num--;
        if ($num < 0) {
            $num = $btns.length - 1;
        }
        tab()
    });
    //点击右边箭头按钮切换轮播图
    $right.on('click', function () {
        $num++;
        if ($num > $btns.length - 1) {
            $num = 0;
        }
        tab();
    })
    function time() {//定时器设置自动轮播
        $timer = setInterval(function () {
            $right.click();
        }, 2000)
    }
    //点进页面自动调用定时器自动轮播
    time();

    function tab() {
        $btns.eq($num).addClass('active_dot').siblings().removeClass('active_dot');
        $pics.eq($num).addClass('active')
        // .stop(true).animate({
        //     opacity: 1
        // },500);        
        $pics.eq($num).siblings().removeClass('active')
        // .stop(true).animate({
        //     opacity: 0
        // },500)
    }
})();




// //面向对象轮播图
// function Lunbo() {
//     this.box = $('.banner_c');
//     this.pics = $('.bnr_s li')
//     this.left = $('.btn_left');
//     this.right = $('.btn_right');
//     this.btns = $('.banner_btns a');
//     this.timer = null;
//     this.num = 0;
// }

// Lunbo.prototype.init = function () {
//     let that = this;
//     for (var i = 0; i < this.btns.length; i++) {
//         //鼠标经过时，切换轮播图
//         this.btns[i].onmouseover = function () {
//             that.num = $(this).index();
//             that.tabchange();
//         }
//     }
//     //鼠标移入，出现按钮停止定时器
//     this.box.hover(function () {
//         that.left.show();
//         that.right.show();
//         clearInterval(that.timer);
//     }, function () {//鼠标移出按钮消失，定时器开启
//         that.left.hide();
//         that.right.hide();
//         that.autoplay();
//     });
//     //点击右边箭头按钮的切换效果
//     this.right.on('click', function () {
//         that.num++;
//         if (that.num > that.btns.length - 1) {
//             that.num = 0;
//         }
//         that.tabchange();
//     });
//     //点击左边箭头按钮的切换效果
//     this.left.on('click', function () {
//         that.num--;
//         if (that.num < 0) {
//             that.num = that.btns.length - 1;
//         }
//         that.tabchange();
//     });
//     this.autoplay();
// }

// Lunbo.prototype.tabchange = function () {
//     var that = this;
//     that.btns.eq(that.num).addClass('active_dot').siblings().removeClass('active_dot');
//     that.pics.eq(that.num).addClass('active').siblings().removeClass('active');
// }
// Lunbo.prototype.autoplay = function () {
//     var that = this;
//     that.timer = setInterval(function () {
//         that.right.click();
//     }, 2000)
// }
// new Lunbo().init();
