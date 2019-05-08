!function(){
	//1.拼接数据
	$.ajax({
		url:'http://10.31.163.53/lecuntao/php/lecuntao.php',
		dataType:'json'
	}).done(function(data){
		let $html1='';
		let $html2='';
		let $html3='';
		let $html4='';
		let $html5='';
		console.log(data);
		$.each(data,function(index,value){
			if(index<6){
				$html1+=`
				<li class="flr_ua_li">
                        <a href="details.html?sid=${value.sid}"  target="_blank">
                            <h3>${value.title}</h3>
                            <span>${value.secondarytitle}</span>
                            <div class="flr_ra_img">
                                <img src="${value.url}">
                            </div>
                            <div class="flr_ua_price">
                                <span class="fl">¥${value.price}</span>
                                <span class="fr"><img src="//www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png"></span>
                            </div>
                        </a>
                    </li>
				`;
			}
			if(index>=6 && index<12){
				$html2+=`
				<li class="flr_ua_li">
                        <a href="details.html?sid=${value.sid}"  target="_blank">
                            <h3>${value.title}</h3>
                            <span>${value.secondarytitle}</span>
                            <div class="flr_ra_img">
                                <img src="${value.url}">
                            </div>
                            <div class="flr_ua_price">
                                <span class="fl">¥${value.price}</span>
                                <span class="fr"><img src="//www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png"></span>
                            </div>
                        </a>
                    </li>
				`;
			}
			if(index>=12 && index<18){
				$html3+=`
				<li class="flr_ua_li">
                        <a href="details.html?sid=${value.sid}"  target="_blank">
                            <h3>${value.title}</h3>
                            <span>${value.secondarytitle}</span>
                            <div class="flr_ra_img">
                                <img src="${value.url}">
                            </div>
                            <div class="flr_ua_price">
                                <span class="fl">¥${value.price}</span>
                                <span class="fr"><img src="//www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png"></span>
                            </div>
                        </a>
                    </li>
				`;
			}
			if(index>=18 && index<24){
				$html4+=`
				<li class="flr_ua_li">
                        <a href="details.html?sid=${value.sid}"  target="_blank">
                            <h3>${value.title}</h3>
                            <span>${value.secondarytitle}</span>
                            <div class="flr_ra_img">
                                <img src="${value.url}">
                            </div>
                            <div class="flr_ua_price">
                                <span class="fl">¥${value.price}</span>
                                <span class="fr"><img src="//www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png"></span>
                            </div>
                        </a>
                    </li>
				`;
			}
			if(index>=24 && index<30){
				$html5+=`
				<li class="flr_ua_li">
                        <a href="details.html?sid=${value.sid}"  target="_blank">
                            <h3>${value.title}</h3>
                            <span>${value.secondarytitle}</span>
                            <div class="flr_ra_img">
                                <img src="${value.url}">
                            </div>
                            <div class="flr_ua_price">
                                <span class="fl">¥${value.price}</span>
                                <span class="fr"><img src="//www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png"></span>
                            </div>
                        </a>
                    </li>
				`;
			}
		});		
		$('.second_ul1').html($html1);
		$('.second_ul2').html($html2);
		$('.second_ul3').html($html3);
		$('.second_ul4').html($html4);
		$('.second_ul5').html($html5);
	});


//事件委托，当鼠标悬浮在li标签上的时候，div定位上移出现
	$('.louc').on('mouseenter mouseleave','.flr_ua_li',function(event){
		let $price = $(this).find('.flr_ua_price');
		if(event.type == 'mouseenter'){
			$price.stop(true).animate({
			top:200
		})}
		else{
			$price.stop(true).animate({
				top:230
			})
		}
		})
	
	
}();


