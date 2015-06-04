/* global $, FastClick, Shojo */
$(function() {
    FastClick.attach(document.body);
});

/* Switch pressing effect for touch device. */
$('button, a').on('touchstart', function() {
	$(this).addClass('pressing');
	
	$('button, a').on('touchend', function() {
		$(this).removeClass('pressing');
	});
});

// Polyfill for equidistant layout for footer buttons.
function equidisBtn() {
	var footWidth = $('.foot-wrap').width(),
		marginLeft = (footWidth - 240) / 4;
	
	$('.opt-btn.opt-2, .opt-btn.opt-3, .opt-btn.opt-4, .opt-btn.opt-5')
		.css('margin-left', marginLeft);
}
$(document).ready(function() {
	equidisBtn();
});
$(window).on('resize', function() {
	equidisBtn();
});

var shojo = new Shojo();
