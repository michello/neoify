var elems = document.getElementsByTagName("a");			// gets all the "ahref" items
var arr = [];											// creates array though we should have a database for this

for (var i = 0; i < elems.length; i++) {					// loops through all the items
	if (elems[i].style.textDecoration != "none") {		// skips the "ahref" items with textDecoration of none because council links have this attribute
		if (elems[i].parentNode.nodeName == "TD") {
			elems[i].parentNode.innerText;				// gets the inner text
			var html = elems[i].parentNode.innerHTML;
			if (html.includes("randomfriend")) {
				if (!(arr.includes(elems[i].parentNode.innerText))) { // temp checks our array but it should check our database
					arr.push(elems[i].parentNode.innerText.substr(-17)); // if it's not there, it'll push the time & date of post to our array
				}
			}
		}
	}
};

console.log(arr);