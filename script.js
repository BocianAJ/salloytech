//slider
function nextSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var nextSlide = document.querySelector(".current-img-slide + .next-slide");
	if (nextSlide) {
		currentSlide.className += " img-slide previous-slide";
		currentSlide.className -= "current-img-slide";
		nextSlide.className -= "img-slide next-slide";
		nextSlide.className += " current-img-slide";
	}
}
function previousSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var previousSlide = document.querySelector(".prevoius-slide");
	if (previousSlide) {	
		currentSlide.className += ".img-slide .next-slide";
		previousSlide.className +=".current-img-slide";
	}
}