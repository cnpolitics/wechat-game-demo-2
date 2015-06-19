/* global $, FastClick, Shojo, _hmt */

/**
 * References for the Baidu Analytics
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_start']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_score']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_back2share']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_shareguide']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_shaonv']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_mzread']);
 */

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
	
	// For robuster onload rendering.
	$('.copy').addClass('active');
});
$(window).on('resize', function() {
	equidisBtn();
});

var shojo = new Shojo();

// Baidu analytics: Click link shaonv.
$('footer .logo-nezha').click(function() {
	// console.log('click nezha');
	_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_shaonv']);	
});
// Baidu analytics: Click link mzread.
$('footer .logo-mzread').click(function() {
	// console.log('click mzread');
	_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_mzread']);	
});
