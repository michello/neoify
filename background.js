let guildLink = 'http://www.neopets.com/guilds/guild_board.phtml?id=4168178';

$(function(){
	getPosts();
	setInterval(getPosts, 0);
});

function getPosts() {
	$.get(guildLink, function(data) {
		var elems = $(data).find("a");
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].style.textDecoration != "none") {
				if (elems[i].parentNode.nodeName == "TD") {
					var html = elems[i].parentNode.innerHTML;
					if (html.includes("randomfriend")) {	// elems[i].parentNode.innerText
						
						let post = {
							username: elems[i].innerText,
							time: elems[i].parentNode.innerText.substr(-17).substring(0, 6),
							date: elems[i].parentNode.innerText.substr(-17).substring(6)
						};

						if (checksIfExists(post) === false){
							notify(post);
						};

						/*
						let user = elems[i].innerText;	// username
						let timeDate = elems[i].parentNode.innerText.substr(-17); // date & time
						let time = timeDate.substring(0, 6);
						let date = timeDate.substring(6);
						*/
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

