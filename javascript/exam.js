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
	$.cookie('mzNeZha.id', shojo.id);
	
	// Parse URL when visit the webpage.
	$(document).ready(function() {
		var hashURL = window.location.hash;
		var result = getValueByKey(hashURL, 'result'),
			userid = getValueByKey(hashURL, 'id');
		console.log(hashURL);
		console.log(result);
		console.log(userid);
		
		if (result === null) {
			console.log('No result.');
			return;
		} else if (userid === shojo.id) {
			console.log('This is myself.');
			// View my last result page.
			
		} else {
			// View the custom cover from URL.
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
			$.cookie('mzNeZha.result', calcResult(shojo.getScore(SCORE_CHART)));
			
			// Write hash URL.
			window.location.hash = 'result=' + shojo.result + '&id=' + shojo.id;
			
			// Write doc title.
			switch (shojo.result) {
				case 1:
					document.title = '没救了！';
					break;
				case 2:
					document.title = '离少女越来越远！';
					break;
				case 3:
					document.title = '有少女的一面！';
					break;
				case 4:
					document.title = '少女指数爆棚！';
					break;
				default: 

			}
		}
		
		currQuestIdx++;
	});
})(shojo);
