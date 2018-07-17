$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		slidesPerView: 'auto',
		loopedSlides: 6,
	});
		$('.home-scroll').height($(window).height());
		
		$('.search-list').width($('header').width()-parseFloat($('header').css('padding-left'))*2);
		$('.search-home').width($('header').width()-parseFloat($('.search-home').css('padding-left')));
		

});