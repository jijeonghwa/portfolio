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

$('.product').click(function(){
	var click = $(this).attr('data-click');
	
	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.mobile_sub_menu').fadeIn(700);
	} else {//두번째 클릭시
		$(this).attr('data-click','false');
		$('.mobile_sub_menu').fadeOut(700);
	}
});

//카테고리
$('.list1').click(function(){
	var click = $(this).attr('data-click');
	
	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.sub1').slideDown(700);
	} else {//두번째 클릭시
		$(this).attr('data-click','false');
		$('.sub1').slideUp(700);
	}
});
$('.list2').click(function(){
	var click = $(this).attr('data-click');
	
	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.sub2').slideDown(700);
	} else {//두번째 클릭시
		$(this).attr('data-click','false');
		$('.sub2').slideUp(700);
	}
});
$('.list3').click(function(){
	var click = $(this).attr('data-click');
	
	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.sub3').slideDown(700);
	} else {//두번째 클릭시
		$(this).attr('data-click','false');
		$('.sub3').slideUp(700);
	}
});