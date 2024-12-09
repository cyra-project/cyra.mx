/*
 * Author: matchthemes.com
 *
 */
 
(function($) {
    "use strict";
	
	// home slider
	$('.home-slider').owlCarousel({
    items:1,
    loop:true,
	autoplay:true,
	autoplayTimeout:7000,
	autoplayHoverPause:true,
	animateOut: 'fadeOut',
	dots:false,
	nav:true,
	navText:''
});

	$('.testimonial-slider').owlCarousel({
    items:1,
    loop:true,
	autoHeight: true,
	autoplay: true,
	autoplayTimeout:8000,
	animateOut: 'fadeOut'
});	

//mobile menu
$('.nav-button').on('click', function(e){
	
	e.preventDefault();
	
    $('.mobile-menu-holder, .menu-mask').addClass('is-active');
	$('body').addClass('has-active-menu');

});

$('.exit-mobile, .menu-mask').on('click', function(e){
	
	e.preventDefault();

    $('.mobile-menu-holder, .menu-mask').removeClass('is-active');
	$('body').removeClass('has-active-menu');

});

$('.menu-mobile > li.menu-item-has-children > a').on('click', function(e){
			
			e.preventDefault();
			e.stopPropagation();
			
			if ( $(this).parent().hasClass('menu-open') )
			
			$(this).parent().removeClass('menu-open');
			
			else {
			
			$(this).parent().addClass('menu-open');
			
			}
																  
			});
	
	// end mobile menu
	
$(window).on('load', function() {
	
	//masonry
   var portfolioItems = $('.layout-masonry');
   
   portfolioItems.isotope({
  itemSelector : '.blog-item-masonry',
  layoutMode : 'masonry',
 
	});


});	//window.load


//gallery
if ($('.blocks-gallery-item a').length){
$('.blocks-gallery-item a').simpleLightbox({
	heightRatio: 1,
	widthRatio: 0.8
   
});
}

//search popup	
$('.search-btn').on('click', function(e){
			
			if($(this).is('.inactive')) {
				
				$(this).toggleClass('inactive active');
				$('body').addClass('has-active-menu');
     			$('.mask-nav-2').addClass('is-active');
				
				}																  
});	

$('.exit-modal').on('click', function(e){
	
	e.preventDefault();

    $('.search-btn').toggleClass('inactive active');
	$('body').removeClass('has-active-menu');
	$('.mask-nav-2').removeClass('is-active');

});	
	
 //scroll up button
 
  $(".scrollup").hide();
     $(window).on('scroll', function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });

$("a.scrolltop[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').stop().animate({scrollTop:0}, 1000, 'easeOutExpo');

});
  
})(jQuery);