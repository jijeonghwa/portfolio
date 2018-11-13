new WOW().init();

$('.menu_open').click(function(){
	var click = $(this).attr('data-click');

	if(click == 'false'){//첫번째 클릭시
		$(this).attr('data-click','tr');
		$('.leftSide').animate({
			'width':'30%'
		}, 700);
		$('.container section').animate({
			'width':'96%',
			'margin-left':'2%',
			'margin-right':'2%'
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
		$('#portfolio1').animate({
			'width':'63.332%',
			'margin-left':'34.666%',
			'margin-right':'2%'
		}, 700);
		$('#portfolio2').animate({
			'width':'30.666%',
			'margin-left':'2%',
			'margin-right':'1%'
		}, 700);
		$('#portfolio3').animate({
			'width':'30.666%',
			'margin-left':'1%',
			'margin-right':'1%'
		}, 700);
		$('#portfolio4').animate({
			'width':'30.666%',
			'margin-left':'1%',
			'margin-right':'2%'
		}, 700);
		$('#portfolio5').animate({
			'width':'47%',
			'margin-left':'2%',
			'margin-right':'1%'
		}, 700);
		$('#portfolio6').animate({
			'width':'47%',
			'margin-left':'1%',
			'margin-right':'2%'
		}, 700);
		$('#portfolio7').animate({
			'width':'63.334%',
			'margin-left':'2%',
			'margin-right':'1%'
		}, 700);
		$('#portfolio8').animate({
			'width':'30.666%',
			'margin-left':'1%',
			'margin-right':'2%'
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