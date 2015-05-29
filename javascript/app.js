/* global $, FastClick */
$(function() {
    FastClick.attach(document.body);
});

/* Switch pressing effect for touch device. */
$('button').on('touchstart', function() {
	$(this).addClass('pressing');
	
	$('button').on('touchend', function() {
		$(this).removeClass('pressing');
	});
});
