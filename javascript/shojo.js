(function() {
	// Cunstructor: Define the properties.
	var Shojo = function() {
		this.id = '0';
		this.option = new Uint8Array(8);
		this.result = 0;
		//this.score = -1;
	};
	
	// Method: Select a option.
	Shojo.prototype.select = function(questIdx, optionIdx) {
		this.option[questIdx - 1] = optionIdx - 1;
	};
	
	// Method: Sum the score.
	Shojo.prototype.getScore = function(SCORE_CHART) {
		var sum = 0;
		for (var i = 0; i < this.option.length; i++) {
			sum += SCORE_CHART[i][this.option[i]];
		}	
		
		return sum;
	};
	
	// Method: Map the score to the result.
	/*Shojo.prototype.getResult = function(SCORE_CHART) {
		var score = this.getScore(SCORE_CHART);
		
		if (score <= 16) {
			this.result = 1;
		} else if (score <= 24) {
			this.result = 2;
		} else if (score <= 31) {
			this.result = 3;
		} else {
			this.result = 4;
		}
		
		return this.result;
	};*/
	
	window.Shojo = Shojo;
	return window.Shojo;
})();
