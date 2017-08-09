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
	var iconMenuOpen = document.getElementsByClassName("menu-open")[0];
	var elementDisplay = window.getComputedStyle(iconMenuOpen, null).display;
	if (elementDisplay == "block") {
		document.getElementsByTagName("nav")[0].style.display = "block";
		document.getElementsByClassName("menu-open")[0].style.display = "none";
		document.getElementsByClassName("menu-close")[0].style.display = "inline-block";
		document.getElementsByClassName("main")[0].classList.add("blurowanie");
		document.getElementById("kontakt").classList.add("blurowanie");
	}
}
function hideMenu() {
	var iconMenuClose = document.getElementsByClassName("menu-close")[0].style.display;
	if (iconMenuClose == "inline-block") {
		document.getElementsByTagName("nav")[0].style.display = "none";
		document.getElementsByClassName("menu-close")[0].style.display = "none";
		document.getElementsByClassName("menu-open")[0].style.display = "inline-block";
		document.getElementsByClassName("main")[0].classList.remove("blurowanie");
		document.getElementById("kontakt").classList.remove("blurowanie");
	}
} 

//slide in animation

function slideInAnimation() {
	var animatedElements = document.getElementsByClassName("slidein-animation");
	var animElemCount = animatedElements.length;
	for (x = 0; x < animElemCount; x++){
		animatedElements[x].classList.add("base-position");
	}
}