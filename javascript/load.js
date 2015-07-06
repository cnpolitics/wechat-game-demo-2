/* global $ */

(function() {
	'use strict';

	$(window).load(function() {
		// console.log('test');
		$('.load-screen, .load-widget').addClass('active');
		setTimeout(function() {
			$('.load-screen').hide();
		}, 1500);
	});
}());
