$(function(){
	//브라우저(뷰포트 viewport)의 높이값을 article의 높이값으로 갱신
	var ht = $(window).height();
	$('.img_top').height(ht);

	$(function() {
	    function swing() {
	        $('.scroll').animate({'top':'5px'}, 800).animate({'top':'10px'}, 800, swing);
	    }
	    swing();
	});

	$('h1').click(function() {
		$('html, body').animate({scrollTop:0, easing:'linear'}, 700);
	});

	$('.scroll-wrap').click(function() {
		var ht = $(window).height();
		$('html, body').stop().animate({'scrollTop':ht}, 800);
	});
	
	//서브 메뉴	
	$('nav>ul>li').click(function(){
		var click = $(this).attr('data-click');
		var idx = $(this).index();
		var st = $('nav>ul>li').eq(idx).offset().top;
		console.log(st)

		if(click == 'false'){//첫번째 클릭시
			$(this).attr('data-click','tr');
			$('.sub_menu').eq(idx).show();
		} else {//두번째 클릭시
			$(this).attr('data-click','false');
			$('.sub_menu').eq(idx).hide();
		}
	});
});