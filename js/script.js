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

// charger la page progressievement...
function fade(){
	document.body.className += 'fadeIn ';
	console.log("it's faded");	
}

const ids =["plage", "jungle", "pic04", "pic05", "pic06","pic07"];


//changer le theme DUBAI...
function changeTheme() {
	// var dubai = ["2-2","3-2","4-2","5-2","6-2","7-2"]
	document.getElementsByTagName("link")[0].setAttribute("href", "css/mine.css");
	var num =2;
	for (var i = 0; i <= ids.length; i++) {
		document.getElementById(ids[i]).setAttribute("src","images/pic0"+num+"-2.jpg");
		num++;
	}
}

//retablir l'original...

function reset() {
	document.getElementsByTagName("link")[0].setAttribute("href", "css/style.css");

	var num =2;
	for (var i = 0; i <= ids.length; i++) {
		document.getElementById(ids[i]).setAttribute("src","images/pic0"+num+".jpg");
		num++;
	}

}




