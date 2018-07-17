$(function() {
	$('.swiarp-nav').width($('body').width());
	$('#header-nav').width($('#header-nav').find('li').width() * $('#header-nav').find('li').length * 1.37);
	$('.nav-newup').width($('.nav-newup').find('li').width()*$('.nav-newup').find('li').length * 1.37);
	//侧栏touch
	var le = 0;
	var X1 = 0;
	$(document).on("touchstart", function(e) {
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
		leh = $('.home-scroll').position().left;
	});
	$(document).on("touchmove", function(e) {
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X1 = moveEndX - startX,
			Y1 = moveEndY - startY;

		if(Math.abs(X1) > Math.abs(Y1) && X1 > 0) {
			/*左往右*/
			if(startX < 15) {
				$('.home-scroll').css({
					'left': leh + X1,
					'box-shadow':'1px 0 10px 0 rgba(0,0,0,0.4)'
				});
				if(X1 >= $('.home-scroll').width()) {
					$('.home-scroll').css({
						'left': 0
					});
					$('.mmm').fadeIn();
				}
			}
		} else if(Math.abs(X1) > Math.abs(Y1) && X1 < 0) {
			/*右往左*/
			$('.home-scroll').css('left', leh + X1);
			if(-X1 >= $('.home-scroll').width()) {
				$('.home-scroll').css({
					'left': -$('.home-scroll').width(),
					'box-shadow':'none'
				});
				$('.mmm').fadeOut();
			}
			
		}
	});

	$(document).on("touchend", function(e) {
		leh = $('.home-scroll').position().left;
		if(X1>0 && startX < 15) {
			if(X1 >= $('.home-scroll').width() / 2) {
				$('.home-scroll').animate({
					left: "0"
				}, 500);
				$('.mmm').fadeIn();
			}
			if(X1 < $('.home-scroll').width() / 2) {
				$('.home-scroll').animate({
					left: -$('.home-scroll').width(),
					'box-shadow':'none'
				}, 500);
				$('.mmm').fadeOut();
			}

		}
		if(X1<0){
			if(-X1 < $('.home-scroll').width() / 2) {
				$('.home-scroll').animate({
					left: 0
				}, 500);
				$('.mmm').fadeIn();
			}
			if(-X1 >= $('.home-scroll').width() / 2) {
				$('.home-scroll').animate({
					left: -$('.home-scroll').width(),
					'box-shadow':'none'
				}, 500);
				$('.mmm').fadeOut();
			}
		}
	});
	
	//侧栏列表
	var startX1 = 0, //开始的X轴
		startY1 = 0, //开始的Y轴
		endX1 = 0, //开始的X轴
		endY1 = 0; //结束的Y轴
	$('.home-scroll').on("touchstart", function(e) {
		startX1 =  e.originalEvent.changedTouches[0].pageX;
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$('.home-scroll').on("touchmove", function(e) {
		e.preventDefault();
		endX1 = e.originalEvent.changedTouches[0].pageX;
		endY1 = e.originalEvent.changedTouches[0].pageY;
	});
	
	

	//滑块touch
	var le = 0;
	$("#header-nav").on("touchstart", function(e) {
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
		le = $('#header-nav').position().left;
	});
	$("#header-nav").on("touchmove", function(e) {
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;

		maX = $('#header-nav').width() - $(window).width();
		if(Math.abs(X) > Math.abs(Y) && X > 0) {
			/*左往右*/
			if(le >= 0) {
				le = 0;
				$('#header-nav').css('left', le);

			} else if(le < 0) {
				X = moveEndX - startX;
				$('#header-nav').css('left', le + X);
				le = $('#header-nav').position().left;
				if(le >= 0) {
					le = 0;
					$('#header-nav').css('left', le);
				}
			}

		} else if(Math.abs(X) > Math.abs(Y) && X < 0) {
			/*右往左*/
			if(-le < maX) {
				X = moveEndX - startX;
				$('#header-nav').css('left', le + X);
				le = $('#header-nav').position().left;
				if(-le >= maX) {
					$('#header-nav').css('left', -maX);
				}
			} else if(-le >= maX) {
				$('#header-nav').css('left', -maX);
			}

		}
	});
	$("#header-nav").on("touchend", function(e) {
		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
		le = $('#header-nav').position().left;
	});
});