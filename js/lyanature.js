$(function(){
	//브라우저(뷰포트 viewport)의 높이값을 article의 높이값으로 갱신
	var ht = $(window).height();
	$('article').height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on('resize', function(){
		var ht = $(window).height();
		$('article').height(ht);
	});

	//내비게이션의 메뉴 클릭시 해당 페이지로 이동
	$('nav li').on('click', function(){
		var ht = $(window).height();//브라우저의 높이값 저장 = article의 높이값
		var idx = $(this).index();//각각의 메뉴의 인덱스 번호를 저장

		var articleT = ht * idx;//현재 박스의 스크롤 위치값

		$('html, body').stop().animate({'scrollTop':articleT}, 800);
	});

	//스크롤 될 때마다 해당 페이지의 내비게이션 메뉴 인식
	$(window).on('scroll', function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		for(var i=0; i<8; i++){//0~7까지 1씩 증가
			if(scroll >= ht*i && scroll < ht*(i+1)){
				$('nav li').removeClass();
				$('nav li').eq(i).addClass('on');	
			}
		}
	});

	//article 위에서 마우스 휠을 움직이면
	$('article').on('mousewheel', function(event, delta){
		if(delta > 0) {//마우스 휠을 올렸을 때
			//현재 article의 이전 article의 상단에서부터의 위치로
			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리
			var prev = $(this).prev().offset().top;
			$('html, body').stop().animate({'scrollTop':prev}, 800, 'easeInCirc');
		} else if(delta < 0) {//마우스 휠을 내렸을 때
			var next = $(this).next().offset().top;
			$('html, body').stop().animate({'scrollTop':next}, 800, 'easeInCirc');
		}
	});

	//맨 위로 이동
	$('h1').click(function() {
		$('html, body').animate({scrollTop:0, easing:'linear'}, 700);
	});

	$('h2').mouseenter(function(){
		$(this).prev().stop().animate({width:'100%', height:'100%', 'border-radius':0}, 1000);
	});
	$('h2').mouseleave(function(){
		$(this).prev().stop().animate({width:540, height:540, 'border-radius':'50%'}, 1000);
	});

	$(function() {
	    function swing() {
	        $('span').animate({'top':'5px'}, 800).animate({'top':'10px'}, 800, swing);
	    }
	    swing();
	});
});