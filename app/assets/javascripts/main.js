jQuery(document).ready(function(){
	jQuery(".nav .navbar-toggle").click(function(){
		jQuery(".nav .navigation").slideToggle().toggleClass("active");
	});
	
	jQuery('#parentHorizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'hor_1', // The tab groups identifier
		activetab_bg: 'transperent',
		inactive_bg: 'transperent',
		active_border_color: 'transperent',
		active_content_border_color: 'transperent'
	  
	});
	
	jQuery('#parentHorizontalTabTwo').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'hor_1', // The tab groups identifier
		activetab_bg: 'transperent',
		inactive_bg: 'transperent',
		active_border_color: 'transperent',
		active_content_border_color: 'transperent'
	  
	});
	
	jQuery('.scrollup').click(function () {
		jQuery("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	jQuery('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	jQuery('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		start: function(slider){
		  jQuery('body').removeClass('loading');
		}
	});

	// On swipe event
	jQuery('.slider-nav').on('swipe', function(event, slick, direction){
	  console.log(direction);
	  console.log("hi2");
	  // left
	});

	// On edge hit
	jQuery('.slider-nav').on('edge', function(event, slick, direction){
	  console.log('edge was hit')
	});

	// On before slide change
	jQuery('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  //console.log(nextSlide);
	  console.log("hi1");
	  jQuery(".slick-slide").removeClass("slik-second");
	  //jQuery(this).find(".slick-current").next().addClass("slik-second");
	});
	jQuery('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  //console.log(nextSlide);
	  console.log("hi 333");
	  jQuery(".slick-slide").removeClass("slik-second");
	  jQuery(this).find(".slick-current").next().addClass("slik-second");
	  jQuery(this).find(".slick-current").prev().addClass("slik-second");
	});
	jQuery(".slick-slide").each(function(){
		var test1 = jQuery(this).hasClass("slick-current");
		if(test1){
			jQuery(this).next().addClass("slik-second");
			jQuery(this).prev().addClass("slik-second");
		}
	});
	
	
});