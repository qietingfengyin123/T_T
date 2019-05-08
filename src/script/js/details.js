! function() {
	//1.获取sid
	let $sid = location.search.substring(1).split('=')[1];

	//2.将当前的id传给后端获取对应的数据
	$.ajax({
		url: 'http://10.31.163.53/lecuntao/php/detail.php',
		data: {
			sid: $sid
		},
		dataType: 'json'
	}).done(function(data) {//data:后端返回的和id对应的数据
		console.log(data);
		$('#smallpic').attr('src', data.url);
		$('#bpic').attr('src', data.url);
		$('.loadtitle').html(data.title);
		$('#adv_goods').html(data.secondarytitle)
		$('.loadpcp').html(data.price);
		let arr = data.urls.split(',');
		console.log(arr);
		let $str = '';
		$.each(arr, function(index, value) {
			$str += '<li><img src="' + value + '"/></li>';
		});
		$('#list ul').html($str);
	});

	// 3.放大镜
	


	
	// // 1.解决方式：提前获取cookie里面id和num
	// // 点击按钮将商品的数量和id存放cookie中
	// var arrsid = []; //商品的sid
	// var arrnum = []; //商品的数量
	// function cookietoarray() {
	// 	if(getcookie('cookiesid') && getcookie('cookienum')) {//判断商品是第一次存还是多次存储
	// 		arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
	// 		arrnum = getcookie('cookienum').split(','); //cookie商品的num
	// 	}
	// }
	
	// //2.有了上面的方法，可以点击加入购物车按钮判断商品是否是第一次还是多次。
	
	// $('.p-btn a').on('click', function() { //点击加入购物车按钮。
		
	// 	//判断当前的商品sid是否存在购物车(cookie)
	// 	//判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较
		
	// 	//获取当前的按钮对应的商品的sid
	// 	var $sid = $(this).parents('.goodsinfo').find('#smallpic').attr('sid');
	// 	cookietoarray();//获取已经存在的cookie值。
		
	// 	if($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加 
	// 		//先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
	// 		var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val());
	// 		arrnum[$.inArray($sid, arrsid)] = num;
	// 		addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie

	// 	} else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
	// 		arrsid.push($sid); //将当前的id存入数组
	// 		addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
	// 		arrnum.push($('#count').val());
	// 		addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
	// 	}
	// });

}();