
let profanity = ['uncle', 'fuck', 'semen', 'rape', 'cum', 'weed', 'nuts', 'anal', 'meth', 'ball', 'ass', 'stupid as', ''];


$('textarea').highlightTextarea({
	words: ['uncle',
			'shit',
			'fuck',
			'semen',
			'rape',
			'cum',
			'weed',
			'nuts',
			'anal',
			'meth',
			'ball',
			'ass',
			'stupid as'
			]

});


/*
$('.highlightTextarea').attr('name', 'message_text');
$('textarea').removeAttr('name');
*/

// $('textarea').innerText = $('.highlightTextarea').innerText;

// $('textarea[name="message_text"]').prop('disabled', true);
//  $('#input1').attr('name', 'other_amount');


$('.highlightTextarea-highlighter').keyup(function(){
	$('textarea[name="message_text"]').val() = $(this).text();
	console.log($(this).text());
});

$('form').submit(function(){
	// event.preventDefault();
	// alert($('.highlightTextarea-highlighter').text());
	$('textarea[name="message_text"]').val() = $('.highlightTextarea-highlighter').text();
	// alert($('textarea[name="message"]').val());
	// $('textarea').innerText = $('.highlightTextarea').innerText;
	// alert($('textarea').val());
	return (true);
	// return($('.highlightTextarea-highlighter').text());
});



// $('textarea').

/*
$("textarea").keydown(function(char){
	var string = "";
	string += $(this).val();
	verify(string);
}); 


function verify(text) {
	// if profanity
	var parsable = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '');
	// console.log(parsable);
	profanity.forEach(function(word) {
		if (parsable.includes(word)) {
			console.log("you said a bad word!");
			
		}
	});

	$('textarea').highlightTextarea({
		words: profanity
  	});
} */