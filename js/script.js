

var getCssLink = document.getElementsByTagName("link")[0];

// document.body.onload = function(){
// 	if (document.cookie.length != 0) {
// 		var cssLinkValue = getCssLink.setAttribute("href", document.cookie[0]);
// 		cssLinkValue;
// 	}
	
// }


// charger la page progressievement...
function fade(){
	
	
	if (document.cookie.length != 0) {
		var cssLinkValue = getCssLink.setAttribute("href", document.cookie[0]);
		console.log("this is "+ cssLinkValue);
	}
	else {
		getCssLink.setAttribute("href","css/style.css");
	}
	document.body.className += 'fadeIn ';
	console.log("it's faded");	
}
setThemeCookie();
function setThemeCookie() {
	
	var selectedTheme = getCssLink.getAttribute("href");
	console.log("Selected theme is "+selectedTheme);
	if (selectedTheme == "css/mine.css") {
		document.cookie = getCssLink.setAttribute("href", selectedTheme);
		console.log(document.cookie+";max-age="+(60*60*24*30)+";");
	}

}


// changer h1 à h6 en majiscule...

function majiscule() {
	var arr = ['h1','h2','h3','h4','h5','h6'], maj, i;
	for (i = 0 ; i < arr.length; i++) {
		maj= document.querySelector(arr[i]).style.textTransform= "uppercase";
		console.log(maj);
	}

}
// parametrer  scroll progression...
window.onscroll = function() {
	scrollProg();
};

function scrollProg() {
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (scroll / height) * 100;
  document.getElementById("scrollPr").style.width = scrolled + "%";
}
















const ids =["plage", "jungle", "pic04", "pic05", "pic06","pic07"];


//changer le theme DUBAI...
function changeTheme() {
	// var dubai = ["2-2","3-2","4-2","5-2","6-2","7-2"]
	getCssLink.setAttribute("href", "css/mine.css");
	var num =2;
	for (var i = 0; i <= ids.length; i++) {
		document.getElementById(ids[i]).setAttribute("src","images/pic0"+num+"-2.jpg");
		num++;
	}
}

//retablir l'original...

function reset() {
	getCssLink.setAttribute("href", "css/style.css");

	var num =2;
	for (var i = 0; i <= ids.length; i++) {
		document.getElementById(ids[i]).setAttribute("src","images/pic0"+num+".jpg");
		num++;
	}

}




