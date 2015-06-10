/* global $, shojo */
(function(shojo) {
	'use strict';
	
	var currQuestIdx = 1,
		nextQuestIdx = 2;
		
	$('.start-btn').click(function() {
		// Hero image transtion.
		$('.hero-image .active').removeClass('active');
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
		$('.copy').attr('class', 'copy quest-1');
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
			$('.foot-wrap').addClass('result');
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
				
				// Gift widget transition.
				setTimeout(function() {	
					$('.gift-widget').show().addClass('active');
				}, 500);
				
				/*
				// Share widget transition.
				setTimeout(function() {	
					$('.share-widget').show().addClass('active');
				}, 500);
				*/
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
	
	// Pop on/off the share guide.
	$('.share-btn').click(function() {
		// Pop on.
		$('.modal-wrap, .modal-wrap .share-guide').addClass('active');
		$('.hero-wrap .active, .hero-wrap .tearpaper-lower img, .main-wrap .active, .foot-wrap .active')
			.css({
				'-webkit-filter': 'blur(5px)',
				'filter': 'blur(5px)',
				'-webkit-transition': 'filter .3s ease-in-out, -webkit-filter .3s ease-in-out',
				'transition': 'filter .3s ease-in-out, -webkit-filter .3s ease-in-out'
			});
		
		// Pop off.
		$('.modal-wrap').click(function() {
			$('.modal-wrap, .modal-wrap .share-guide').removeClass('active');
			
			$('.hero-wrap .active, .hero-wrap .tearpaper-lower img, .main-wrap .active, .foot-wrap .active')
				.css({
					'-webkit-filter': 'blur(0px)',
					'filter': 'blur(0px)'
				});
				
			setTimeout(function() {
				$('.hero-wrap .active, .hero-wrap .tearpaper-lower img, .main-wrap .active, .foot-wrap .active')
				.css({
					'-webkit-filter': '',
					'filter': '',
					'-webkit-transition': '',
					'transition': ''
				});
			}, 500);
		});
	});
})(shojo);
