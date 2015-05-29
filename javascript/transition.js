/* global $ */
(function() {
	'use strict';
	
	var currQuestIdx = 1,
	    nextQuestIdx = 2;
	
	$('.start-btn').click(function() {
		// Hero image transtion.
		$('.hero-image .cover').removeClass('active');
		$('.hero-image .quest-1').addClass('active');
		
		// Button transition.
		$(this).removeClass('active');
		setTimeout(function() {
			$('.start-btn').hide();
			$('.opt-btn').show().addClass('active delay');
		}, 500);
		
		setTimeout(function() {
			$('.opt-btn').removeClass('delay');
		}, 1100);
		
		
	});
		
	$('.opt-btn').click(function() {
		if (nextQuestIdx > 8) {
			return;	// For debug
		}
		
		// Hero image transition.
		$('.hero-image .quest-' + currQuestIdx).removeClass('active');
		$('.hero-image .quest-' + nextQuestIdx).addClass('active');
		
		// Question copy transition.
		$('.copy')
			.removeClass('active quest-' + currQuestIdx)
			.addClass('quest-' + nextQuestIdx);
		setTimeout(function() {
			$('.copy').addClass('active');
		}, 750);
		
		currQuestIdx = nextQuestIdx;
		nextQuestIdx++;
	});
})();
