! function () {
	//1.获取sid
	let $sid = location.search.substring(1).split('=')[1];

	//2.将当前的id传给后端获取对应的数据
	$.ajax({
		url: 'http://10.31.163.53/lecuntao/php/detail.php',
		data: {
			sid: $sid
		},
		dataType: 'json'
	}).done(function (data) {//data:后端返回的和id对应的数据
		// console.log(data);
		$('#smallpic').attr('src', data.url);
		$('#smallpic').attr('sid', data.sid);
		$('#bpic').attr('src', data.url);
		$('.loadtitle').html(data.title);
		$('#adv_goods').html(data.secondarytitle)
		$('.loadpcp').html(data.price);
		let $listarr = data.urls.split(',');
		// console.log($listarr);
		let $listStr = '';
		$.each($listarr, function (index, value) {
			$listStr += `
			<li>
				<img src="${value}">  
			</li>
		`;
		});
		$('#list ul').html($listStr);
	});
	// 3.放大镜
	class scale {
		constructor() {
			this.wrap = $('.comdetails_wrap');
			this.spic = $('#spic');
			this.bpic = $('#bpic');
			this.sf = $('#sf');
			this.bf = $('#bf');
			this.ul = $('#list ul');
			this.list = $('#list ul li');
			this.left = $('#left');
			this.right = $('#right');
		}
		init() {
			let _this = this;
			this.spic.hover(function () {
				_this.over();
			}, function () {
				_this.out();
			});
			this.list.on('click', function () {
				_this.liclick(this);
			});
			this.ul.on('click','li',function(e){
				let $imgurl = $(this).find('img').attr('src');
				_this.spic.find('img').attr('src', $imgurl);
				_this.bpic.attr('src', $imgurl);
			})
		}
		over() {
			let _this = this;
			this.sf.show();
			this.bf.show();
			//计算小放的尺寸和比例;小放/大放=小图/大图
			this.sf.width(this.spic.width() * this.bf.width() / this.bpic.width());
			this.sf.height(this.spic.height() * this.bf.height() / this.bpic.height());
			this.bili = this.bpic.width() / this.spic.width();
			this.spic.on('mousemove', function (e) {
				_this.move(e);
			})
		}
		out() {
			this.sf.hide();
			this.bf.hide();
		}
		move(e) {
			let l = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
			let t = e.pageY - this.wrap.offset().top - this.sf.height() / 2;
			if (l <= 0) {
				l = 0;
			} else if (l >= this.spic.width() - this.sf.width()) {
				l = this.spic.width() - this.sf.width();
			};
			if (t <= 0) {
				t = 0;
			} else if (t >= this.spic.height() - this.sf.height()) {
				t = this.spic.height() - this.sf.height();
			};
			this.sf.css({
				left: l,
				top: t
			});
			this.bpic.css({
				left: -this.bili * l,
				top: -this.bili * t
			})
		}
	}
	new scale().init()


	//改变商品数量++
	$('.increase').on('click', function() {
	    var $count = $(this).parents('.ncs_num').find('#count').val();//值
	    $count++;
	    if ($count >= 99) {
	        $count = 99;
	    }
	    $(this).parents('.ncs_num').find('#count').val($count);//赋值回去
	});
	
	//改变商品数量--
	$('.decrease').on('click', function() {
	    var $count = $(this).parents('.ncs_num').find('#count').val();
	    $count--;
	    if ($count <= 1) {
	        $count = 1;
	    }
	    $(this).parents('.ncs_num').find('#count').val($count);
	});
	
	//直接输入改变数量
	$('#count').on('input', function() {
	    var $reg = /^\d+$/g; //只能输入数字
	    var $value = parseInt($(this).val());
	    if ($reg.test($value)) {//是数字
	        if ($value >= 99) {//限定范围
	            $(this).val(99);
	        } else if ($value <= 0) {
	            $(this).val(1);
	        } else {
	            $(this).val($value);
	        }
	    } else {//不是数字
	        $(this).val(1);
	    }
	});


	// 1.解决方式：提前获取cookie里面id和num
	// 点击按钮将商品的数量和id存放cookie中
	var arrsid = []; //商品的sid
	var arrnum = []; //商品的数量
	function cookietoarray() {
		if(getcookie('cookiesid') && getcookie('cookienum')) {//判断商品是第一次存还是多次存储
			arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
			arrnum = getcookie('cookienum').split(','); //cookie商品的num
		}
	}

	//2.有了上面的方法，可以点击加入购物车按钮判断商品是否是第一次还是多次。

	$('.ncs_btn').on('click', function() { //点击加入购物车按钮。

		//判断当前的商品sid是否存在购物车(cookie)
		//判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较

		//获取当前的按钮对应的商品的sid
		var $sid = $(this).parents('.comdetails').find('#smallpic').attr('sid');
		console.log($sid);
		cookietoarray();//获取已经存在的cookie值。

		//$.inArray(a,b)获取a在数组b的索引
		if($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加 
			//先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
			var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val());
			console.log(num);
			arrnum[$.inArray($sid, arrsid)] = num;
			addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie

		} else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
			arrsid.push($sid); //将当前的id存入数组
			addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
			arrnum.push($('#count').val());
			addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
		}
		$('.ncs_cart_popup').show();
	});
}();
