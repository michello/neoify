'use strict';

let guildLink = 'http://www.neopets.com/guilds/guild_board.phtml?id=4168178';

$(function(){
	// let status = checksLoggedIn();
	$.get(guildLink, function(data) {
		var loginStatus = checksLoggedIn(data);
		// console.log(checksLoggedIn(data));

		// getPosts(checksLoggedIn(data));
		// setInterval(getPosts, 60000);
		// setInterval(getPosts, 60000);

		setInterval(getPosts, 5000, loginStatus);

	})
	
	// getPosts(status);
	// setInterval(checksLoggedIn, 5000, data);

});

function checksLoggedIn(data) {
	// console.log(typeof(data));
	// var status = true;
	// console.log(data);
	var status = $.get(guildLink, function(data) {
	
		if ((data).indexOf('errorMessage') === -1) {
			// console.log("you're logged in!");
			return(true);
			//console.log(data);
		}
		else {
			// console.log("you're not logged in!");
			return(false);
		}
	});

	console.log(status);
	return(status);

}


function getPosts(theStatus) {
	if (theStatus === true) {	// ensures user is logged in
		console.log(theStatus);
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
								notify(post, theStatus);
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

	else {

		console.log(theStatus);
		notify({}, status);
	}
	
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

function notify(thePost, theStatus) {

	if ((theStatus) === true) {
		console.log(theStatus);
		var notification = new Notification("MuxHo", {
			icon: "img/neoify-128.png",
			body: thePost.username + " made a post at " + thePost.date + " on " + thePost.time + "!"
		});

		notification.onclick = function() {
			window.open("http://www.neopets.com/guilds/guild_board.phtml?id=4168178");
		}
	}

	else {
		console.log(theStatus);
		var notification = new Notification("MuxHo", {
			icon: "img/neoify-128.png",
			body: "Please login to Neopets to receive notifications!"
		});
		
		notification.onclick = function() {
			window.open("http://www.neopets.com/loginpage.phtml");
		}
	}

}

