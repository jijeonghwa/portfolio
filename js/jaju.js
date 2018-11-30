$('#mainvisual').each(function() {
	$(this).slick({
		autoplay: true,
		speed: 2000,
		fade: true,
		autoplaySpeed:2000,
		pauseOnHover:true,
		dots:true,		
		appendDots:$(this).siblings('#btn')
	});
});

//맨 위로 이동
$('.top').click(function() {
	$('html,body').animate({scrollTop:0, easing:'linear'}, 700);
});

//서브 메뉴
$('.menu').mouseenter(function() {
	$('.list_wrap, .sub_bg').stop().fadeIn(1000);
});
$('.sub_bg').mouseleave(function() {
	$('.list_wrap, .sub_bg').stop().fadeOut(1000);
});

//지금 뜨고 있는 상품들
$('.imgL').slick({
	fade:true
});
$('.imgR').slick({
	fade:true
});

//모바일 메뉴
$('.bars').click(function(){
	var click = $(this).attr('data-click');

	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.mobile_menu').fadeIn(700);
	} else {//두번째 클릭시
		$(this).attr('data-click','false');
		$('.mobile_menu').fadeOut(700);
	}
});