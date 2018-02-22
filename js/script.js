// changer h1 à h6 en majiscule
// function majiscule() {
function majiscule() {
	var arr = ['h1','h2','h3','h4','h5','h6'], maj, i;
	for (i = 0 ; i < arr.length; i++) {
		maj= document.querySelector(arr[i]).style.textTransform= "uppercase";
		console.log(maj);
	}

}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollProg()};

function scrollProg() {
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (scroll / height) * 100;
  document.getElementById("scrollPr").style.width = scrolled + "%";
}
