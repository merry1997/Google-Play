$(function() {
	//搜索框
	$('.search-home').focus(function() {
		$('header .icon-view-list-o').addClass('animated rotateOut');
		$('header .icon-left-o').removeClass('rotateOut').addClass('rotateIn');
		$('.search-home').css({
			'border-bottom-left-radius':'0',
			'border-bottom-right-radius':'0'
		});
		$('.search-list').animate({
			'height':$('.search-list li').height()*$('.search-list li').length*2
		},300);
		$('.mmm').fadeIn();
		$(this).css('background-image', 'none').attr('placeholder', '搜索 Google Play');
	});
	$('.search-home').blur(function() {
		$('header .icon-view-list-o').removeClass('rotateOut').addClass('rotateIn');
		$('header .icon-left-o').removeClass('rotateIn').addClass('rotateOut');
		$('.search-home').css({
			'border-bottom-left-radius':'.06rem',
			'border-bottom-right-radius':'.06rem'
		});
		$('.search-list').animate({
			'height':'0'
		},300);
		$('.mmm').fadeOut();
		$(this).css('background-image', 'url(images/ic_searchbox_google.png)').attr('placeholder', '');
	});
	//点击拉出侧栏
	$('.aaaaa').click(function(){
		$('.home-scroll').animate({
			left: "0"
		}, 300).css('box-shadow','1px 0 10px 0 rgba(0,0,0,0.4)');
		$('.mmm').fadeIn();
	});
	$('.mmm').click(function(){
		$('.home-scroll').animate({
			left: -$('.home-scroll').width(),
			'box-shadow':'none'
		}, 500);
		$('.mmm').fadeOut();
	});
	//顶部导航栏
	$('.nav-tab').click(function() {
		var i = $(this).index();
		$('.home-nav a').removeClass('active');
		$(this).addClass('active');
		$('.xi span').removeClass('active');
		$('.xi span').eq(i).addClass('active');
	});
	//点击顶部滑块
	$('#header-nav').find('li').click(function(){
		$('#header-nav li').removeClass('active');
		$(this).addClass('active');
	});
	//影视
	$('.video-warp').click(function(){
		$('header').css('background','#fe1743');
		$('.home-nav a').css('color','#ffa2b4');
		$('.swiarp-nav').load('video.html');
	});
	//首页 游戏
	$('.home-warp,.game-warp').click(function(){
		$('header').css('background','#109d58');
		$('.home-nav a').css('color','#9ed9bd');
	});
	$('.home-warp').click(function(){
		$('.swiarp-nav').load('home.html');
	});
	$('.game-warp').click(function(){
		$('.swiarp-nav').load('game.html');
	});
	//图书
	$('.photo-warp').click(function(){
		$('header').css('background','#039be6');
		$('.home-nav a').css('color','#79c3e6');
		$('.swiarp-nav').load('photo.html');
	});
	//音乐
	$('.music-warp').click(function(){
		$('header').css('background','#fe5722');
		$('.home-nav a').css('color','#ffbaa4');
		$('.swiarp-nav').load('music.html');
	});
	//报亭
	$('.news-warp').click(function(){
		$('header').css('background','#9c28b1');
		$('.home-nav a').css('color','#dca6e4');
		$('.swiarp-nav').load('news.html');
	});
	
	$('.scroll-list li').click(function(){
		if($(this).index()>=5&&$(this).index()<=9){
			$('.scroll-list li').removeClass('active');
			$(this).addClass('active');
		}
	});
	//播放
	$('.vid').click(function(){
		$(this).find('.player')[0].play();
		$(this).find('.play').fadeOut();
	});
	
	$('.btn').click(function(){
		$(this).html('已注册');
	});
	$('.boot li').click(function(){
		alert('暂无');
	});
	$('.jbbd').click(function(){
		location.href='jubao.html';
	})
	var srcs = null;
	var bt = null;
	var mo = null;
	$('.nav-newup .swiper-slide').click(function(){
		srcs = $(this).find('.nav-newupimg').attr('src');
		bt = $(this).find('span').eq(0).html();
		mo = $(this).find('.moerr').html();
		scroll(0,0);
		$('header,.nnn').fadeOut();
		$('.content').hide();
		$('.con-img').attr('src',srcs);
		$('.con-t').html(bt);
		$('.rq p').html(mo);
		$('.content').fadeIn();
	});
	
	$('.reo li').click(function(){
		$(this).find('img').attr('src','images/abc_btn_radio_to_on_mtrl_015.png');
	});
	$('.tj').click(function(){
		alert('提交完成');
		location.href='index.html';
	});
});