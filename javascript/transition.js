/* global $, shojo */
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
		
		// Copy transition.
		$('.copy')
			.removeClass('active cover')
			.addClass('quest-1');
		setTimeout(function() {
			$('.copy').addClass('active');
		}, 750);
	});
		
	$('.opt-btn').click(function() {			
		// The last question.
		if (currQuestIdx === 8) {
			// console.log(shojo.result);
			
			// Hero image transition.
			$('.hero-image .quest-' + currQuestIdx).removeClass('active');
			$('.hero-image .result-' + shojo.result).addClass('active');
			
			// Button/footer transition.
			$('.opt-btn').addClass('delay').removeClass('active');
			setTimeout(function() {
				$('.opt-btn').hide();
				
				// Result footer transition.
				setTimeout(function() {
					$('footer.result').show().addClass('active delay');
					
					setTimeout(function() {
						$('footer.result').removeClass('delay');
					}, 2500);
				}, 1500);
			}, 1100);
			
			// Copy transition.
			$('.copy')
				.removeClass('active quest-' + currQuestIdx)
				.addClass('result-' + shojo.result);
			setTimeout(function() {
				$('.copy').addClass('active');
				
				// Share widget transition.
				setTimeout(function() {	
					$('.share-widget').show().addClass('active');
				}, 500);
			}, 750);
			
			return;
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
