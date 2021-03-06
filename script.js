//Adding classes to html if JavaScript is active
function activeScript() {
	document.body.className = "script";
}

//slider
function nextSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var nextSlide = currentSlide.nextElementSibling;
	if (Boolean(nextSlide) == true && nextSlide.className == "img-slide next-slide") {
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
	var languageIcon = document.getElementsByClassName("jezyki")[0];
	if (typeof getComputedStyle !== 'undefined') {
		var elementDisplay = window.getComputedStyle(iconMenuOpen, null).display;
	}
	else {
		var elementDisplay = window.currentStyle(iconMenuOpen).display;
	}
	if (elementDisplay != "none") {
		document.getElementsByTagName("nav")[0].style.display = "block";
		document.getElementsByClassName("menu-open")[0].style.display = "none";
		document.getElementsByClassName("menu-close")[0].style.display = "inline-block";
		document.getElementsByClassName("main")[0].classList.add("blurowanie");
		document.getElementByClassName("sekcja-kontakt")[0].classList.add("blurowanie");
		languageIcon.style.display = "block";
	}
}
function hideMenu() {
	var iconMenuClose = document.getElementsByClassName("menu-close")[0].style.display;
	var languageIcon = document.getElementsByClassName("jezyki")[0];
	if (iconMenuClose == "inline-block") {
		document.getElementsByTagName("nav")[0].style.display = "none";
		document.getElementsByClassName("menu-close")[0].style.display = "none";
		document.getElementsByClassName("menu-open")[0].style.display = "inline-block";
		document.getElementsByClassName("main")[0].classList.remove("blurowanie");
		document.getElementByClassName("sekcja-kontakt")[0].classList.remove("blurowanie");
		languageIcon.style.display = "none";
	}
} 

//slide in animation
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < ((0.9 * window.innerHeight) || (0.9 * document.documentElement.clientHeight))
    );
}
function onVisibilityChange(el, callback) {
    var old_visible = false;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}