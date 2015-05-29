(function() {
	'use strict';
	
	var currQuestIdx = 0,
	    nextQuestIdx = 1;
		
	$('.opt-btn').click(function() {
		// Hero image transition
		$('.hero-image .quest-' + currQuestIdx).removeClass('active');
		$('.hero-image .quest-' + nextQuestIdx).addClass('active');
		
		// Question copy transition
		$('.question').removeClass('active quest-' + currQuestIdx).addClass('quest-' + nextQuestIdx);
		setTimeout(function() {
			$('.question').addClass('active');
		}, 750);
		
		currQuestIdx = nextQuestIdx;
		nextQuestIdx++;
		if (nextQuestIdx > 7) {
			nextQuestIdx = 0;	// Loop for debug
		}
	});
})();