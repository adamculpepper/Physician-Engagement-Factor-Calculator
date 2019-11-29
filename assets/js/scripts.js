$(function() {
	var answersTotal;
	var answer1;
	var answer2;
	var answer3;
	var answer4;
	var answer5;
	var bonus1;
	var bonus2;
	var bonus3;

	//$('#scores > div').hide().removeClass('hidden');
	$('#scores > div').removeClass('hidden');

	$('#pef-questions input').on('change', function() {
		console.log('fdfsfsd');
		answer1 = parseInt($('#q1 input[name=question1]:checked').val() || 0);
		answer2 = parseInt($('#q2 input[name=question2]:checked').val() || 0);
		answer3 = parseInt($('#q3 input[name=question3]:checked').val() || 0);
		answer4 = parseInt($('#q4 input[name=question4]:checked').val() || 0);
		answer5 = parseInt($('#q5 input[name=question5]:checked').val() || 0);
		bonus1 = parseInt($('#bonus1').prop('checked') ? 1 : 0);
		bonus2 = parseInt($('#bonus2').prop('checked') ? 1 : 0);
		bonus3 = parseInt($('#bonus3').prop('checked') ? 1 : 0);

		answersTotal = answer1 + answer2 + answer3 + answer4 + answer5;
		bonusesTotal = 1 + bonus1 + bonus2 + bonus3;
		grandTotal = answersTotal * bonusesTotal;
		$('#results').html('answersTotal: ' + answersTotal + '<br>bonuses: ' + (bonusesTotal-1) + '<br>grandTotal: ' + grandTotal);

		allQuestionsAnswered();
	});

	function allQuestionsAnswered() {
		if (answer1 != 0 && answer2 != 0 && answer3 != 0 && answer4 != 0 && answer5 != 0) {
			//$('#scores > div').removeClass('highlight').hide();
			$('#scores > div').removeClass('highlight')
			
			if (grandTotal >= 40) {
				$('#score1').addClass('highlight').fadeIn();
			} else if (grandTotal >= 25 && grandTotal <= 39) {
				$('#score2').addClass('highlight').fadeIn();
			} else if (grandTotal >= 11 && grandTotal <= 24) {
				$('#score3').addClass('highlight').fadeIn();
			} else if (grandTotal <= 10) {
				$('#score4').addClass('highlight').fadeIn();
			}
		}

	}

});