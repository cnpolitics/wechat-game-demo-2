/* global $, Shojo*/
(function() {
	'use strict';
	
	var scoreChart = [
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
	
	$('.opt-btn').click(function() {
		if (currQuestIdx > 8) {
			console.log('No more question.'); // For debug
			return;	// Safeguard.
		}
		
		console.log($(this).data('opt'));
		shojo.select(currQuestIdx, parseInt($(this).data('opt'), 10));
		console.log(shojo.getScore(scoreChart));
		
		currQuestIdx++;
	});
})();