/* global $, Shojo, uuid*/
(function() {
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
	
	var shojo = new Shojo(),
		currQuestIdx = 1;
	
	// Set user ID, and write cookie.
	shojo.id = $.cookie('mzNeZha.id') || uuid.v4();
	$.cookie('mzNeZha.id', shojo.id);
	
	// For debug.
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
	
	$('.opt-btn').click(function() {
		// Safeguard.
		if (currQuestIdx > 8) {
			alert('Result: ' + calcResult(shojo.getScore(SCORE_CHART))); // For debug
			return;
		}
		
		//console.log($(this).data('opt'));
		shojo.select(currQuestIdx, parseInt($(this).data('opt'), 10));
		//console.log(shojo.getScore(SCORE_CHART));
		
		// Calc result, and write cookie.
		if (currQuestIdx === 8) {
			$.cookie('mzNeZha.result', calcResult(shojo.getScore(SCORE_CHART)));
			
			//alert('Result: ' + $.cookie('mzNeZha.result')); // For test
		}
		
		currQuestIdx++;
	});
	
	window.shojo = shojo;
	return window.shojo;
})();
