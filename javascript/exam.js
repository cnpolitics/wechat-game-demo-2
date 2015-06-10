/* global $, Shojo, uuid, shojo*/
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
			userid = getValueByKey(hashURL, 'id');
		console.log(hashURL);
		console.log(result);
		console.log(userid);
		
		if (result === null) {
			console.log('No result. Default cover.');
			// Show default cover.
			$('.hero-wrap .cover').addClass('active');
			$('.main-wrap .copy').addClass('cover');
			$('.foot-wrap .start-btn').show().addClass('active');
			
		} else if (userid === shojo.id) {
			console.log('This is myself. My result.');
			// Show my result frome the URL.
			$('.hero-wrap .result-' + result).addClass('active');
			$('.main-wrap .copy').addClass('result-' + result);
			//$('.main-wrap .share-widget').show().addClass('active');
			$('.main-wrap .gift-widget').show().addClass('active');
			$('.foot-wrap').addClass('result');
			$('.foot-wrap footer.result').show().addClass('active');
			
			// Another logic: alway show me the last updated result.
			/*
			var myLastResult = $.cookie('mzNeZha.result');
			$('.hero-wrap .result-' + myLastResult).addClass('active');
			$('.main-wrap .copy').addClass('result-' + myLastResult);
			$('.main-wrap .share-widget').show().addClass('active');
			$('.foot-wrap footer.result').show().addClass('active');
			*/	
		} else {
			// Show the custom cover from URL.
			$('.hero-wrap .result-' + result).addClass('active');
			$('.main-wrap .copy').addClass('cover-' + result);
			$('.foot-wrap .start-btn').show().addClass('active');
			
			switch (result) {
				case '1':
					break;
				case '2':
					break;
				case '3':
					break;
				case '4':
					break;
				default:

			}
		}
	});
	
	
	
	//====== DO THE EXAM.
	var currQuestIdx = 1;
	
	$('.opt-btn').click(function() {
		// Safeguard.
		if (currQuestIdx > 8) { return; }
		
		shojo.select(currQuestIdx, parseInt($(this).data('opt'), 10));
		
		// Calc result; write cookie, hash URL and doc title.
		if (currQuestIdx === 8) {
			// Calc result, and write cookie.
			$.cookie('mzNeZha.result', calcResult(shojo.getScore(SCORE_CHART)), { expires: 30 });
			
			// Write hash URL.
			window.location.hash = 'result=' + shojo.result + '&id=' + shojo.id;
			
			// Write doc title.
			switch (shojo.result) {
				case 1:
					document.title = '我没救了！你呢？';
					break;
				case 2:
					document.title = '我离少女越来越远！你呢？';
					break;
				case 3:
					document.title = '我有少女的一面！你呢？';
					break;
				case 4:
					document.title = '我少女指数爆棚！你呢？';
					break;
				default: 

			}
		}
		
		currQuestIdx++;
	});
})(shojo);
