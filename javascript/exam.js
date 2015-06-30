/* global $, uuid, shojo, _hmt*/

/**
 * References for the Baidu Analytics
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_cover']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_score']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_myurl']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_start2play']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_back2share']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_shareguide']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_shaonv']);
 * _hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_mzread']);
 */

(function(shojo) {
	'use strict';
	
	var SCORE_CHART = [
		[2, 3, 4, 0, 5],
		[2, 4, 5, 0, 3],
		[5, 4, 0, 3, 2],
		[2, 4, 3, 0, 5],
		[5, 4, 0, 2, 3],
		[4, 0, 5, 3, 2],
		[5, 2, 3, 0, 4],
		[3, 4, 2, 0, 5]
	];
	
	// Get value by key from hash URL.
	function getValueByKey(str, key) {
		var matches = str.match(new RegExp(key+'=([^&]*)'));
		return matches ? matches[1] : null;
	}
	
	// Map the score to the result.
	function calcResult(score) {
		if (score <= 16) {
			shojo.result = 1;
		} else if (score <= 24) {
			shojo.result = 2;
		} else if (score <= 31) {
			shojo.result = 3;
		} else {
			shojo.result = 4;
		}
		return shojo.result;
	}
	
	// Set user ID, and write cookie.
	shojo.id = $.cookie('mzNeZha.id') || uuid.v4();
	$.cookie('mzNeZha.id', shojo.id, { expires: 30 });
	
	// Parse URL when visit the webpage.
	$(document).ready(function() {
		var hashURL = window.location.hash;
		var result = getValueByKey(hashURL, 'result'),
			userid = getValueByKey(hashURL, 'id'),
			flag = getValueByKey(hashURL, 'flag');
		
		result = result ? result.substring(0, 1) : null;
		userid = userid ? userid.substring(0, 36) : null;
		flag = flag ? flag.substring(0, 1) : null;
		// console.log('hashURL: ' + hashURL);
		// console.log('result: ' + result);
		// console.log('userid: ' + userid);
		// console.log('flag: ' + flag);
		
		if (result === null) {
			// Baidu analytics: View cover.
			// console.log('view cover (default)');
			_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_cover']);
			
			// Show default cover. Ready to start.
			// console.log('No result. Default cover.');
			$('.hero-wrap .cover').addClass('active');
			$('.main-wrap .copy').addClass('cover');
			$('.foot-wrap .start-btn').show().addClass('active');
			
		} else if (userid === shojo.id) {
			// Baidu analytics: View my URL.
			// console.log('view cover (my result with footer)');
			_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_myurl']);
			
			// Show my result from the URL.
			// console.log('This is myself. My result.');
			$('.hero-wrap .result-' + result).addClass('active');
			$('.main-wrap .copy').addClass('result-' + result);
			//$('.main-wrap .share-widget').show().addClass('active');
			$('.main-wrap .gift-widget').show().addClass('active');
			$('.foot-wrap').addClass('result');
			$('.foot-wrap footer.result').show().addClass('active');
			
			/*
			// Another logic: alway show me the last updated result.
			var myLastResult = $.cookie('mzNeZha.result');
			$('.hero-wrap .result-' + myLastResult).addClass('active');
			$('.main-wrap .copy').addClass('result-' + myLastResult);
			$('.main-wrap .share-widget').show().addClass('active');
			$('.foot-wrap footer.result').show().addClass('active');
			*/
			
			// Write doc title.
			switch (result) {
				case '1':
					document.title = '我没救了！你呢？';
					break;
				case '2':
					document.title = '我离少女越来越远！你呢？';
					break;
				case '3':
					document.title = '我有少女的一面！你呢？';
					break;
				case '4':
					document.title = '我少女指数爆棚！你呢？';
					break;
				default:
			}
		} else {
			// Baidu analytics: View cover.
			// console.log('view cover (custom)');
			_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_cover']);

			// Show the custom cover from URL. Ready to start.
			$('.hero-wrap .result-' + result).addClass('active');
			$('.main-wrap .copy').addClass('cover-' + result);
			$('.foot-wrap .start-btn').show().addClass('active');
		}
	});

	/**
	 * DO THE EXAM.
	 */

	var currQuestIdx = 1;
	
	$('.opt-btn').click(function() {
		// Safeguard.
		if (currQuestIdx > 8) { return; }
		
		shojo.select(currQuestIdx, parseInt($(this).data('opt'), 10));
		
		// Calc result; write cookie, hash URL and doc title.
		if (currQuestIdx === 8) {
			// Baidu analytics: Complete test, and view score.
			// console.log('view score');
			_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_view_score']);
			
			// Calc result, and write cookie.
			$.cookie('mzNeZha.result', calcResult(shojo.getScore(SCORE_CHART)), { expires: 30 });
			
			// Write hash URL.
			window.location.hash = 'result=' + shojo.result + '&id=' + shojo.id;
			
			// Write doc title.
			switch (shojo.result) {
				case 1:
					document.title = '我没救了！你呢？';
					// history.replaceState({result: '1'}, '我没救了！你呢？', '#' + 'result=' + shojo.result + '&id=' + shojo.id);
					break;
				case 2:
					document.title = '我离少女越来越远！你呢？';
					// history.replaceState({result: '2'}, '我离少女越来越远！你呢？', '#' + 'result=' + shojo.result + '&id=' + shojo.id);
					break;
				case 3:
					document.title = '我有少女的一面！你呢？';
					// history.replaceState({result: '3'}, '我有少女的一面！你呢？', '#' + 'result=' + shojo.result + '&id=' + shojo.id);
					break;
				case 4:
					document.title = '我少女指数爆棚！你呢？';
					// history.replaceState({result: '4'}, '我少女指数爆棚！你呢？', '#' + 'result=' + shojo.result + '&id=' + shojo.id);
					break;
				default: 
			}
		}
		
		currQuestIdx++;
	});

	/**
	 * Baidu Analytics:
	 * Count the clicks of some buttons/links.
	 */

	// Start to play.
	$('.start-btn').click(function() {
		// console.log('click start');
		_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_start2play']);
	});
	// Click share guide.
	$('.share-btn').click(function() {
		// console.log('click share');
		_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_button_shareguide']);
	});
	// Click link shaonv.
	$('footer .logo-nezha').click(function() {
		// console.log('click nezha');
		_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_shaonv']);	
	});
	// Click link mzread.
	$('footer .logo-mzread').click(function() {
		// console.log('click mzread');
		_hmt.push(['_trackEvent', 'nezha', 'nezha_click', 'nezha_link_mzread']);	
	});
})(shojo);
