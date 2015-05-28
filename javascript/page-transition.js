(function() {
	'use strict';
	var currQuestIdx = 0;
	$('.opt-btn').click(function() {
		$('.quest-' + currQuestIdx).removeClass('active');
		
		currQuestIdx++;
		if (currQuestIdx > 7) { // for debug
			currQuestIdx = 0;
		}
		
		$('.quest-' + currQuestIdx).addClass('active');
		
		
	});
})();