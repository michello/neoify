let rightSide = $('<div/>', {id: 'rightSide'});

let statusMessage = $('<div/>', { id: 'status'});
let highlight = $('<span/>', {id: 'highlight'});
let statusHeader = $('<h1/>', {id: 'statusHeader'});
let curseWords = ['uncle', 'shit', 'fuck', 'semen', 'rape', 'cum', 'weed', 'nuts', 'anal', 'meth', 'ball', 'ass', 'stupid as', 'kill', 'hole', 'base', 'nigger', 'bad as', 'my space', 'do it', 'expression', 'sex', 'screw', 'crack', 'vagina', 'yuri', 'yaoi'];

$("textarea").css({"float": "left", "width": "340px"});
$(rightSide).css({"float": "left", "width": "200px", "height": "300px"});
$("textarea").after(rightSide);

$(statusHeader).html("Your message is gucci.");
$("#rightSide").append(statusHeader);
$("#rightSide").append(statusMessage);

$(statusHeader).css({"width":"100%", "float": "left", "height": "10px", "font":"14px calibri", "text-transform": "uppercase", "margin-left": "10px"});
$("#status").css({"width": "100%", "float": "left", "margin-left": "10px", "word-wrap": "break-word", "height": "275px", "overflow": "auto", "font-family": "calibri"});

$("textarea").keydown(function(char){
	var string = "";
	string += $(this).val();
	verify(string);
}); 

function verify(words) {
	$("#status").text(words);
	
	$('#status').highlight(['uncle', 'shit', 'fuck', 'semen', 'rape','cum',	'weed',	'nuts',	'anal',	'meth',	'ball',	'ass', 'stupid as']);
	
	console.log($("#status").hasClass("highlight"));
	
	if ($("#status").children().hasClass("highlight")) {
		$(statusHeader).html("Your message isn't good!");
	} else {
		$(statusHeader).html("Your message is gucci.");
	}
}


