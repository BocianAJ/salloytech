//Adding classes to html if JavaScript is active
function activeScript() {
	document.body.className = "script";
}

//slider
function nextSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var nextSlide = currentSlide.nextElementSibling;
	if (Boolean(nextSlide) == true && nextSlide.className == "img-slide next-slide") {
		console.log("hej");
		nextSlide.className = "current-img-slide";
		currentSlide.className = "img-slide previous-slide";
	}
}
function previousSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var previousSlide = currentSlide.previousElementSibling;
	if (Boolean(previousSlide) == true && previousSlide.className == "img-slide previous-slide") {	
		currentSlide.className = "img-slide next-slide";
		previousSlide.className = "current-img-slide";
	}
}

//interactive mobile menu
function showMenu() {
	document.getElementsByTagName("nav")[0].style.display = "block";
	document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
}