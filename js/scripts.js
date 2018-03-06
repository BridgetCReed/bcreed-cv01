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
	var smoothItems = $('a.smooth');
	
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