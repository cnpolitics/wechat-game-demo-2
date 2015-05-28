/* global FastClick */

$(function() {
    FastClick.attach(document.body);
});

(function() {

$('button').on('touchstart', function() {
	$(this).addClass('pressing');
	
	$('button').on('touchend', function() {
		$(this).removeClass('pressing');
	});
});



})();