; (function () {
    let $nav = $('.stairs');
    let $louLi = $('.stairs li').not('.back_top');
    let $louc = $('.louc');
    let $lbtn = $('.stairs li .louc_btn');
    let $letit = $('.stairs li .etitle');

    $(window).on('scroll', function () {
        let $top = $(window).scrollTop();
        if ($top >= 700 && $top <= 3250) {
            $nav.show();
        } else {
            $nav.hide();
        }
        $louc.each(function (index, element) {
            let $loucTop = $(element).offset().top + 300;
            if ($loucTop > $top) {
                $louLi.eq(index).find($lbtn).hide();
                $louLi.eq(index).find($letit).show();
                $louLi.eq(index).siblings().find($lbtn).show();
                $louLi.eq(index).siblings().find($letit).hide();
                return false;
            }
        })
    });

    $louLi.bind({//楼梯
        mouseover: function () {//鼠标经过楼层数字消失，文字出现
            $(this).find($lbtn).hide();
            $(this).find($letit).show();
        },
        mouseout: function () {//鼠标移出楼层文字消失，数字出现
            $(this).find($letit).hide();
            $(this).find($lbtn).show();
        },
        click: function () {
            let $top = $louc.eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop: $top,
            })
        }
    });

    //返回顶部
    $('.back_top,.return_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });
})();

// 二级菜单
; (function () {
    ; (function () {
        let $select = $('.banner_l li');
        // console.log($select);
        $select.hover(function(){
            $(this).find('.sel').show();
        },function(){
            $(this).find('.sel').hide();
        });
    })();

    // 二级购物车
    ; (function () {
        let $cart = $('.mycart');
        $cart.hover(function(){
            $(this).find('.cart_list').show();
        },function(){
            $(this).find('.cart_list').hide();
        })
    })();

})();

