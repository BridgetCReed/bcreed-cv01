jQuery(function ($) {
    'use strict';
    // ---------------------------------------------------------
    // PreLoader
    // ---------------------------------------------------------
    (function () {
        $('#preloader').delay(1000).fadeOut('slow');
    }());
}); // JQuery end

jQuery(document).ready(function($){
	var contentSections = $('.bcr-section'),
		navigationItems = $('#bcr-vertical-nav a'),
		smoothItems = $('a.smooth');

	//smooth scroll nav
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
	});
	
	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#bcr-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	//smooth scroll links
	updateSmooth();
	$(window).on('scroll', function(){
		updateSmooth();
	});

	smoothItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
	});
	
	function updateSmooth() {
		$this = $(this);
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});