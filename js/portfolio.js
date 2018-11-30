$('.menu_open').click(function(){
	var click = $(this).attr('data-click');

	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.leftSide').animate({
			'width':'30%'
		}, 700);
		$('.rightSide').animate({
		'width':'70%'
		}, 700);
		$('.profile').css(
		'display','block'
		);
		$('.menu_open').css(
		'margin-left','2%'
		);
		$('.menu_close').css(
		'margin-left','2%'
		);
	} else {//두번째 클릭시
		$(this).attr('data-click','false');
		$('.leftSide').animate({
			'width':'90%'
		}, 700);
		$('.rightSide').animate({
		'width':'10%'
		}, 700);
		$('.profile').css(
		'display','none'
		);
		$('.menu_open').css(
		'margin-left','10%'
		);
		$('.menu_close').css(
		'margin-left','10%'
		);
	}
});