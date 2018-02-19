// changer h1 à h6 en majiscule
// function majiscule() {
function majiscule() {
	var arr = ['h1','h2'/*,'h3','h4','h5','h6'*/], maj, i;
	for (i = 0 ; i < arr.length; i++) {
		maj= document.querySelector(arr[i]).style.textTransform= "uppercase";
		console.log(maj);
	}

}


