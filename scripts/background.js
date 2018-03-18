let boardLink = 'http://www.neopets.com/neoboards/boardlist.phtml?board=8';
let guildLink = 'http://www.neopets.com/guilds/guild_board.phtml?id=4168178';

$(function(){
	setInterval(getBoards, 60000);
	setInterval(getPosts, 60000);
});

function getBoards(){
	$.get(boardLink, function(data) {
		var elems = $(data).find("span[style='font-weight:normal;']");
		for (var i = 0; i < elems.length; i++) {
			let link = elems[i].parentNode;
			if (elems[i].innerText.includes("MU x HO")) {
				if (i > 20) {
					notify2($(link).attr("href"));
					return;
				} 
				if (i < 20) {
					return;
				}
			} 
		}
	});

	notify2($(boardLink).attr("href"));
}

function notify2(board) {

	var notification = new Notification("MuxHo", {
		icon: "img/neoify-128.png",
		body: "The guild board fell below too low!"
	});

	notification.onclick = function() {
		window.open(boardLink);
	}

}



function getPosts() {
	$.get(guildLink, function(data) {
		var elems = $(data).find("a");
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].style.textDecoration != "none") {
				if (elems[i].parentNode.nodeName == "TD") {
					var html = elems[i].parentNode.innerHTML;
					if (html.includes("randomfriend")) {	// elems[i].parentNode.innerText
						var username = $('a')[3].textContent;
						if (elems[i].innerText != username) {	
							let post = {
								username: elems[i].innerText,
								time: elems[i].parentNode.innerText.substr(-17).substring(0, 6),
								date: elems[i].parentNode.innerText.substr(-17).substring(6)
							};

							if (checksIfExists(post) === false){
								notify(post);
							};
							let user = elems[i].innerText;	// username
							let timeDate = elems[i].parentNode.innerText.substr(-17); // date & time
							let time = timeDate.substring(0, 6);
							let date = timeDate.substring(6);
						}
					}
				}
			}
		}

	});
}


function checksIfExists(currPost) {

	var savedPosts = JSON.parse(localStorage.getItem('postsArray')) || [];

	for (var i = 0; i < savedPosts.length; i++) {
    	if (JSON.stringify(savedPosts[i]) === JSON.stringify(currPost)) {
        	return(true);
        }
  	}

  	savedPosts.push(currPost);
	localStorage.setItem('postsArray', JSON.stringify(savedPosts));
  	return(false);

}


function notify(thePost) {

	var notification = new Notification("MuxHo", {
		icon: "img/neoify-128.png",
		body: thePost.username + " made a post at " + thePost.date + " on " + thePost.time + "!"
	});

	notification.onclick = function() {
		window.open("http://www.neopets.com/guilds/guild_board.phtml?id=4168178");
	}

}

