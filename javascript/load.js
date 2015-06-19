(function() {
	'use strict';

	$(window).load(function() {
		// console.log('test');
		$('.load-screen').addClass('active');
		setTimeout(function() {
			$('.load-screen').hide();
		}, 2500);
	
	});
}());